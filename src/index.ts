import http from 'http';
import 'reflect-metadata';

// this require is necessary for server HMR to recover from error
// tslint:disable-next-line:no-var-requires
let app = require('./server').default;

const server = http.createServer(app);

let currentApp = app;

server
  .listen(process.env.PORT || 3000, () => {
    console.log(`
    _____ __________  ____  ________________  ___   ______  __ __ ____ 
    / ___// ____/ __ \\/ __ \\/ ____/_  __/ __ \\/   | / ____/ / //_// __ \\
    \\__ \\/ /   / / / / /_/ / __/   / / / /_/ / /| |/ /     / ,<  / /_/ /
   ___/ / /___/ /_/ / _, _/ /___  / / / _, _/ ___ / /____ / /| |/ _, _/ 
  /____/\\____/\\____/_/ |_/_____/ /_/ /_/ |_/_/  |_\\____(_)_/ |_/_/ |_|  
                                                                        
    `);
    console.log('🚀  Scoretrac.kr started!\n');
  })
  .on('error', (error) => {
    console.log(error);
  });

if (module.hot) {
  console.log('✅  Server-side HMR enabled!');

  module.hot.accept('./server', () => {
    console.log('🔁  HMR Reloading `./server`...');

    try {
      app = require('./server').default;
      server.removeListener('request', currentApp);
      server.on('request', app);
      currentApp = app;
    } catch (error) {
      console.error(error);
    }
  });
}
