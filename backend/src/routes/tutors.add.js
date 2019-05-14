module.exports = {
  method: 'post',
  path: '/add',
  handler: async ctx => {
    const { body } = ctx.request;
    ctx.body = await ctx.db.createTutor(body);
  },
};
