module.exports = {
  method: 'get',
  path: '/tutor/:id',
  handler: async ctx => {
    const { id } = ctx.params;
    ctx.body = await ctx.db.tutor({ id });
  },
};
