const currentEnv = process.env.ENV_NAME || 'local';

if (currentEnv === 'local') {
  require('dotenv').config({ path: 'variables.env' });
}

const createServer = require('./createServer');
const createRouter = require('./createRouter');

const server = createServer();

createRouter(server);

const port = process.env.PORT || 4444;
server
  .listen(port)
  .on('listening', () => console.info(`[info] Server listening on: ${port}`));
