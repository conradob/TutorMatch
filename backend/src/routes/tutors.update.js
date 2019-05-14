module.exports = {
  method: 'put',
  path: '/update/:id',
  handler: async ctx => {
    const { id } = ctx.params;
    const { body } = ctx.request;
    ctx.body = await ctx.db.updateTutor({
      where: { id },
      data: body,
    });
  },
};
