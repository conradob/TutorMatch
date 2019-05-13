const currentEnv = process.env.ENV_NAME || 'local';

if (currentEnv === 'local') {
  require('dotenv').config({ path: 'variables.env' });
}

const createServer = require('./createServer');
const server = createServer();

const Router = require('koa-router');

const router = new Router();

router.get('/list', async ctx => (ctx.body = await ctx.db.tutors({})));

server.use(router.routes()).use(router.allowedMethods());

const port = process.env.PORT || 4444;
server
  .listen(port)
  .on('listening', () => console.info(`[info] Server listening on: ${port}`));
