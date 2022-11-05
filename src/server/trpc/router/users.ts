import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const usersRouter = router({
  getById: publicProcedure.input(z.string()).query(async ({ ctx, input }) => {
    const user = await ctx.prisma.user.findUnique({
      where: {
        id: input,
      },
      include: {
        worldle: true,
        sutom: true,
      },
    });

    return user;
  }),
  getAll: publicProcedure.query(async ({ ctx }) => {
    return await ctx.prisma.user.findMany({
      include: {
        _count: {
          select: {
            worldle: true,
            sutom: true,
          },
        },
      },
    });
  }),
});
