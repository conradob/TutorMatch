module.exports = {
  method: 'put',
  path: '/delete/:id',
  handler: async ctx => {
    const { id } = ctx.params;
    ctx.body = await ctx.db.deleteTutor({ id });
  },
};
