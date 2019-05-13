module.exports = {
  method: 'get',
  path: '/list',
  handler: async ctx => (ctx.body = await ctx.db.tutors({})),
};
