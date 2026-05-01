import fs from 'fs';
import { build } from 'esbuild';

console.log('Building Vercel Output API format...');

const VERCEL_DIR = '.vercel/output';
const FUNC_DIR = `${VERCEL_DIR}/functions/index.func`;

// Clean existing output
if (fs.existsSync(VERCEL_DIR)) {
  fs.rmSync(VERCEL_DIR, { recursive: true, force: true });
}

// Create directories
fs.mkdirSync(`${VERCEL_DIR}/static`, { recursive: true });
fs.mkdirSync(FUNC_DIR, { recursive: true });

// Copy client assets to static
fs.cpSync('dist/client', `${VERCEL_DIR}/static`, { recursive: true });

// Vercel routing config: serve static files first, fall back to SSR function
fs.writeFileSync(
  `${VERCEL_DIR}/config.json`,
  JSON.stringify(
    {
      version: 3,
      routes: [
        { handle: 'filesystem' },
        { src: '/(.*)', dest: '/index' },
      ],
    },
    null,
    2,
  ),
);

// Vercel function runtime config
fs.writeFileSync(
  `${FUNC_DIR}/.vc-config.json`,
  JSON.stringify(
    {
      runtime: 'nodejs20.x',
      handler: 'index.mjs',
      launcherType: 'Nodejs',
    },
    null,
    2,
  ),
);

// Bundle the server with esbuild into a fully self-contained output.
// The Vite build leaves npm imports (h3-v2, react, @tanstack/*, etc.) as bare
// specifiers — they work locally because node_modules is present, but inside a
// Vercel serverless function there is no node_modules, so they must be inlined.
// esbuild resolves and bundles all dependencies; only true Node.js built-ins
// (handled natively by the runtime) stay external.
// Code-splitting is enabled so that the dynamic import() calls used by
// TanStack Start for lazy route chunks are preserved as separate chunk files
// rather than being inlined into one giant bundle.
console.log('Bundling server with esbuild...');
const result = await build({
  entryPoints: ['dist/server/server.js'],
  bundle: true,
  splitting: true,
  platform: 'node',
  target: 'node20',
  format: 'esm',
  outdir: `${FUNC_DIR}/server`,
  // 'canvas' is an optional native addon used by some matter-js headless
  // setups; it is never installed, so mark it external to avoid a build error.
  external: ['canvas'],
  allowOverwrite: true,
  logLevel: 'info',
  metafile: true,
});
const outputFiles = Object.keys(result.metafile.outputs);
console.log(`esbuild produced ${outputFiles.length} output files`);
const serverEntry = outputFiles.find((f) => f.endsWith('server/server.js'));
if (!serverEntry) throw new Error('esbuild did not produce server/server.js — bundle failed');
const bytes = result.metafile.outputs[serverEntry].bytes;
console.log(`server.js bundle size: ${(bytes / 1024 / 1024).toFixed(2)} MB`);

// Thin Node.js http handler that adapts the Web Request/Response API used by
// the TanStack Start handler to the Node.js IncomingMessage/ServerResponse API
// expected by Vercel's Nodejs launcher.
fs.writeFileSync(
  `${FUNC_DIR}/index.mjs`,
  `import handler from './server/server.js';

export default async function (req, res) {
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const url = new URL(req.url, \`\${protocol}://\${host}\`);

  const headers = new Headers();
  for (const key in req.headers) {
    if (req.headers[key]) headers.append(key, req.headers[key]);
  }

  const init = { method: req.method, headers };

  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = await new Promise((resolve) => {
      const chunks = [];
      req.on('data', (c) => chunks.push(c));
      req.on('end', () => resolve(Buffer.concat(chunks)));
    });
  }

  const request = new Request(url.href, init);
  const response = await handler.fetch(request);

  res.statusCode = response.status;
  res.statusMessage = response.statusText;

  response.headers.forEach((value, key) => {
    res.setHeader(key, value);
  });

  if (response.body) {
    const reader = response.body.getReader();
    while (true) {
      const { done, value } = await reader.read();
      if (done) break;
      res.write(value);
    }
  }

  res.end();
}
`,
);

console.log('Vercel Output built successfully!');
