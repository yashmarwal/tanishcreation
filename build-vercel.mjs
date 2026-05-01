import fs from 'fs';
import path from 'path';

console.log("Building Vercel Output API format...");

const VERCEL_DIR = '.vercel/output';

// Clean if exists
if (fs.existsSync(VERCEL_DIR)) {
  fs.rmSync(VERCEL_DIR, { recursive: true, force: true });
}

// 1. Create directories
fs.mkdirSync(`${VERCEL_DIR}/static`, { recursive: true });
fs.mkdirSync(`${VERCEL_DIR}/functions/index.func`, { recursive: true });

// 2. Copy client assets to static
fs.cpSync('dist/client', `${VERCEL_DIR}/static`, { recursive: true });

// 3. Create config.json
const config = {
  version: 3,
  routes: [
    { handle: "filesystem" },
    { src: "/(.*)", dest: "/index" }
  ]
};
fs.writeFileSync(`${VERCEL_DIR}/config.json`, JSON.stringify(config, null, 2));

// 4. Create function config
const funcConfig = {
  runtime: "nodejs20.x",
  handler: "index.mjs",
  launcherType: "Nodejs"
};
fs.writeFileSync(`${VERCEL_DIR}/functions/index.func/.vc-config.json`, JSON.stringify(funcConfig, null, 2));

// 5. Copy server bundle into function
fs.cpSync('dist/server', `${VERCEL_DIR}/functions/index.func/server`, { recursive: true });

// 6. Create index.mjs wrapper for Node Serverless Function
const indexJs = `
import { createServer } from 'node:http';
import handler from './server/server.js';

// Convert Node req/res to Web Request/Response for the TanStack Start handler
export default async function(req, res) {
  // Convert req to Web Request
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const url = new URL(req.url, \`\${protocol}://\${host}\`);
  
  const headers = new Headers();
  for (const key in req.headers) {
    if (req.headers[key]) headers.append(key, req.headers[key]);
  }
  
  const init = {
    method: req.method,
    headers,
  };
  
  if (req.method !== 'GET' && req.method !== 'HEAD') {
    init.body = await new Promise((resolve) => {
      const chunks = [];
      req.on('data', c => chunks.push(c));
      req.on('end', () => resolve(Buffer.concat(chunks)));
    });
  }
  
  const request = new Request(url.href, init);
  
  // Call the TanStack Start handler
  const response = await handler.default({ request });
  
  // Send the Web Response back via Node res
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
`;
fs.writeFileSync(`${VERCEL_DIR}/functions/index.func/index.mjs`, indexJs);

console.log("Vercel Output built successfully!");
