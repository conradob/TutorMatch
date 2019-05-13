const koa = require('koa');
const { prisma } = require('./generated/prisma-client');

function createServer() {
  const app = new koa();
  app.context.db = prisma;

  return app;
}

module.exports = createServer;
