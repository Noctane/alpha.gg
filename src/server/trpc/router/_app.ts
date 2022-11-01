// src/server/trpc/router/_app.ts
import { router } from "../trpc";
import { exampleRouter } from "./example";
import { usersRouter } from "./users";
import { worldleRouter } from "./worldle";
import { sutomRouter } from "./sutom";
import { authRouter } from "./auth";

export const appRouter = router({
  example: exampleRouter,
  auth: authRouter,
  users: usersRouter,
  worldle: worldleRouter,
  sutom: sutomRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
