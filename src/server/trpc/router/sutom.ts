import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const sutomRouter = router({
  createScore: publicProcedure
    .input(z.object({ score: z.number(), userId: z.number() }))
    .mutation(async ({ ctx, input }) => {
      return ctx.prisma.sutom.create({
        data: {
          score: input.score,
          user: {
            connect: {
              id: input.userId,
            },
          },
        },
      });
    }),
});
