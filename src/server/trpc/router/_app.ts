// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { usersRouter } from "./users";
import { worldleRouter } from "./worldle";
import { sutomRouter } from "./sutom";

export const appRouter = router({
  users: usersRouter,
  worldle: worldleRouter,
  sutom: sutomRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
