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

      const average = await ctx.prisma.sutom.aggregate({
        _avg: { score: true },
      });

      await ctx.prisma.user.update({
        where: { id: input.userId },
        data: {
          sutomScore: {
            set: average._avg.score as number,
          },
        },
      });
      return score;
    }),
});
