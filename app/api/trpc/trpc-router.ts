import { initTRPC } from '@trpc/server';
import superjson from 'superjson';
import userRouter from '@/server/user-route';

export const t = initTRPC.create({
  transformer: superjson,
});

const healthCheckerRouter = t.router({
  healthchecker: t.procedure.query(({ ctx }) => {
    return {
      status: 'success',
      message: 'Welcome to trpc with Next.js 14 and React Query',
    };
  }),
});

export const appRouter = t.mergeRouters(userRouter, healthCheckerRouter);

export type AppRouter = typeof appRouter;
