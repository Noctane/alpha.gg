import { router, publicProcedure } from "../trpc";
import { z } from "zod";

export const sutomRouter = router({
  createScore: publicProcedure
    .input(z.object({ score: z.number(), userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      const score = await ctx.prisma.sutom.create({
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
