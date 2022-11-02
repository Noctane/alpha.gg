import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const worldleRouter = router({
  createScore: publicProcedure
    .input(z.object({ score: z.number(), userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const score = await ctx.prisma.worldle.create({
        data: {
          score: input.score,
          user: {
            connect: {
              id: input.userId,
            },
          },
        },
      });
      return score;
    }),
});
