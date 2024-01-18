import { t } from '@/app/api/trpc/trpc-router';
import { createUserSchema, filterQuery } from './user-schema';
import { createUserHandler, getUsersHandler } from './user-controller';

const userRouter = t.router({
  createUser: t.procedure
    .input(createUserSchema)
    .mutation(({ input }) => createUserHandler({ input })),
  getUsers: t.procedure
    .input(filterQuery)
    .query(({ input }) => getUsersHandler({ filterQuery: input })),
});

export default userRouter;
