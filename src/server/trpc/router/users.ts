import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const usersRouter = router({
  getById: publicProcedure.input(z.number()).query(({ ctx, input }) => {
    return ctx.prisma.user.findUnique({
      where: {
        id: input,
      },
    });
  }),
  getAll: publicProcedure.query(({ ctx }) => {
    return ctx.prisma.user.findMany();
  }),
});
