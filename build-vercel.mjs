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
if (fs.existsSync('dist/client')) {
  fs.cpSync('dist/client', `${VERCEL_DIR}/static`, { recursive: true });
}

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
if (fs.existsSync('dist/server')) {
  fs.cpSync('dist/server', `${VERCEL_DIR}/functions/index.func/server`, { recursive: true });
}

// 6. Create package.json for the function
const pkgJson = {
  "type": "module",
  "dependencies": {}
};
fs.writeFileSync(`${VERCEL_DIR}/functions/index.func/package.json`, JSON.stringify(pkgJson, null, 2));

// 7. Create index.mjs wrapper for Node Serverless Function
const indexJs = `
let handler;

async function loadHandler() {
  try {
    // TanStack Start outputs server in different ways depending on configuration
    // Try multiple possible locations and export patterns
    const possiblePaths = [
      './server/index.js',
      './server/index.mjs',
      './server.js',
      './server.mjs',
    ];
    
    let lastError;
    for (const path of possiblePaths) {
      try {
        console.log('Trying to load handler from:', path);
        const mod = await import(path);
        const h = mod.default || mod.handler || mod;
        if (typeof h === 'function') {
          console.log('Successfully loaded handler from:', path);
          return h;
        }
      } catch (err) {
        lastError = err;
        console.log('Failed to load from', path, ':', err.message);
      }
    }
    
    throw new Error(\`Failed to load server handler. Last error: \${lastError?.message || 'Unknown error'}\`);
  } catch (err) {
    console.error('Failed to load server handler:', err);
    throw err;
  }
}

export default async function(req, res) {
  try {
    if (!handler) {
      handler = await loadHandler();
    }

    // Convert Node req to Web Request
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const host = req.headers['x-forwarded-host'] || req.headers.host || 'localhost';
    
    // Construct full URL with proper handling
    let fullUrl;
    try {
      fullUrl = new URL(req.url, \`\${protocol}://\${host}\`).href;
    } catch (e) {
      // Fallback if URL construction fails
      fullUrl = \`\${protocol}://\${host}\${req.url || '/'}\`;
    }
    
    const headers = new Headers();
    Object.entries(req.headers).forEach(([key, value]) => {
      if (value) {
        const headerValue = Array.isArray(value) ? value.join(', ') : String(value);
        if (headerValue) {
          headers.append(key, headerValue);
        }
      }
    });
    
    const init = {
      method: req.method || 'GET',
      headers,
    };
    
    // Handle request body for non-GET/HEAD/OPTIONS requests
    if (req.method && !['GET', 'HEAD', 'OPTIONS'].includes(req.method)) {
      init.body = await new Promise((resolve, reject) => {
        const chunks = [];
        req.on('data', chunk => chunks.push(chunk));
        req.on('error', reject);
        req.on('end', () => {
          const buffer = Buffer.concat(chunks);
          resolve(buffer.length > 0 ? buffer : undefined);
        });
      });
    }
    
    const request = new Request(fullUrl, init);
    
    // Call the TanStack Start handler
    let response;
    try {
      response = await handler(request);
    } catch (handlerErr) {
      console.error('Handler execution error:', handlerErr);
      throw handlerErr;
    }
    
    // Ensure response is valid
    if (!response || typeof response.status !== 'number') {
      throw new Error('Handler did not return a valid Response object');
    }
    
    // Send the Web Response back via Node res
    res.statusCode = response.status;
    res.statusMessage = response.statusText || '';
    
    // Set response headers
    response.headers.forEach((value, key) => {
      res.setHeader(key, value);
    });
    
    // Handle response body
    if (response.body) {
      const reader = response.body.getReader();
      try {
        while (true) {
          const { done, value } = await reader.read();
          if (done) break;
          res.write(Buffer.from(value));
        }
      } catch (streamErr) {
        console.error('Error reading response body:', streamErr);
      } finally {
        try {
          reader.releaseLock();
        } catch (e) {
          // Ignore lock release errors
        }
      }
    }
    
    res.end();
  } catch (error) {
    console.error('Handler error:', error);
    res.statusCode = 500;
    res.setHeader('Content-Type', 'application/json');
    res.end(JSON.stringify({
      error: 'Internal Server Error',
      message: error?.message || 'Unknown error'
    }));
  }
}
`;
fs.writeFileSync(`${VERCEL_DIR}/functions/index.func/index.mjs`, indexJs);

console.log("Vercel Output built successfully!");
