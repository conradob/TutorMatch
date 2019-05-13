const Router = require('koa-router');
const routes = require('./routes');

function createRouter(server) {
  const router = new Router();

  routes.forEach(({ method, path, handler }) =>
    router[method.toLowerCase()](path, handler)
  );

  server.use(router.routes()).use(router.allowedMethods());
  return router;
}

module.exports = createRouter;
