import userRouter from '@/server/user-route';
import { t } from '@/utils/create-router';

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
