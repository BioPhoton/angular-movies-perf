import 'zone.js/dist/zone-node';

import { ngExpressEngine } from '@nguniversal/express-engine';
import * as express from 'express';
import { join } from 'path';

import { AppServerModule } from './src/main.server';
import { APP_BASE_HREF } from '@angular/common';
import { existsSync } from 'fs';

const domino = require('domino');

// The Express app is exported so that it can be used by serverless Functions.
export function app(): express.Express {
  console.log('!!!!!!!');
  const server = express();
  const distFolder = join(process.cwd(), 'dist/hub-movies/browser');
  const indexHtml = existsSync(join(distFolder, 'index.original.html'))
    ? 'index.original.html'
    : 'index';
  patchWindow(indexHtml);
  // Our Universal express-engine (found @ https://github.com/angular/universal/tree/master/modules/express-engine)
  server.engine(
    'html',
    ngExpressEngine({
      bootstrap: AppServerModule,
    })
  );

  server.set('view engine', 'html');
  server.set('views', distFolder);

  // Example Express Rest API endpoints
  // server.get('/api/**', (req, res) => { });
  // Serve static files from /browser
  server.get(
    '*.*',
    express.static(distFolder, {
      maxAge: '1y',
    })
  );

  // All regular routes use the Universal engine
  server.get('*', (req, res) => {
    res.render(indexHtml, {
      req,
      providers: [
        {
          provide: APP_BASE_HREF,
          useValue: req.baseUrl,
        },
      ],
    });
  });

  return server;
}

function run(): void {
  const port = process.env.PORT || 4000;

  // Start up the Node server
  const server = app();
  server.listen(port, () => {
    console.log(`Node Express server listening on http://localhost:${port}`);
  });
}

function patchWindow(template: string): void {
  const win = domino.createWindow(template);
  win.Object = Object;
  win.Math = Math;

  (global as any).window = win;
  (global as any).document = win.document;
  (global as any).branch = null;
  (global as any).object = win.object;

  (global as any).window.requestAnimationFrame = (callback, element) => {
    let lastTime = 0;
    const currTime = new Date().getTime();
    const timeToCall = Math.max(0, 16 - (currTime - lastTime));
    const id = setTimeout(() => callback(currTime + timeToCall), timeToCall);
    lastTime = currTime + timeToCall;
    return id;
  };

  (global as any).window.cancelAnimationFrame = (id) => {
    clearTimeout(id);
  };

  (global as any).window.localStorage = {
    getItem: (prop: string): undefined => undefined,
    setItem: (prop: string, value: any) => void 0,
  };

  console.log('patched window');
}

// Webpack will replace 'require' with '__webpack_require__'
// '__non_webpack_require__' is a proxy to Node 'require'
// The below code is to ensure that the server is run only when not requiring the bundle.
declare const __non_webpack_require__: NodeRequire;
const mainModule = __non_webpack_require__.main;
const moduleFilename = (mainModule && mainModule.filename) || '';
if (moduleFilename === __filename || moduleFilename.includes('iisnode')) {
  run();
}

export * from './src/main.server';
