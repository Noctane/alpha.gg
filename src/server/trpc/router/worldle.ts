import { router, publicProcedure } from "../trpc";
import { z } from "zod";
import { formatISO } from "date-fns";
import { TRPCError } from "@trpc/server";

export const worldleRouter = router({
  createScore: publicProcedure
    .input(z.object({ score: z.number(), userId: z.string() }))
    .mutation(async ({ ctx, input }) => {
      // Check if score has already been submitted today
      const scoreExist = await ctx.prisma.worldle.findMany({
        where: {
          createdAt: {
            gte: new Date(
              formatISO(new Date(Date.now()), { representation: "date" })
            ), // !?
          },
        },
      });

      if (scoreExist.length > 0) {
        throw new TRPCError({
          code: "BAD_REQUEST",
          message: "Score already exist",
        });
      }
      // Create score
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
      // Update average score
      const average = await ctx.prisma.worldle.aggregate({
        _avg: { score: true },
      });

      await ctx.prisma.user.update({
        where: { id: input.userId },
        data: {
          worldleScore: {
            set: average._avg.score as number,
          },
        },
      });
      return score;
    }),
});
