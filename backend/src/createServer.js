const koa = require('koa');
const cors = require('@koa/cors');
const koaBody = require('koa-body');

const { prisma } = require('./generated/prisma-client');

function createServer() {
  const app = new koa();

  app.use(cors());
  app.use(koaBody());
  app.context.db = prisma;

  return app;
}

module.exports = createServer;
