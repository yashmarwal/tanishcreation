
import { createServer } from 'node:http';
import handler from './server/server.js';

// Convert Node req/res to Web Request/Response for the TanStack Start handler
export default async function(req, res) {
  // Convert req to Web Request
  const protocol = req.headers['x-forwarded-proto'] || 'http';
  const host = req.headers['x-forwarded-host'] || req.headers.host;
  const url = new URL(req.url, `${protocol}://${host}`);
  
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
