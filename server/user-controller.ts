import prisma from '@/prisma/prisma-client';
import { TRPCError } from '@trpc/server';
import { CreateUserInput, FilterQueryInput } from './user-schema';

export const createUserHandler = async ({
  input,
}: {
  input: CreateUserInput;
}) => {
  try {
    const user = await prisma.user.create({
      data: input,
    });

    return {
      status: 'success',
      data: {
        user,
      },
    };
  } catch (err: any) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  }
};

export const getUsersHandler = async ({
  filterQuery,
}: {
  filterQuery: FilterQueryInput;
}) => {
  try {
    const { limit, page } = filterQuery;
    const take = limit || 10;
    const skip = (page - 1) * limit;

    const users = await prisma.user.findMany({
      skip,
      take,
    });

    return {
      status: 'success',
      results: users.length,
      data: {
        users,
      },
    };
  } catch (err: any) {
    throw new TRPCError({
      code: 'INTERNAL_SERVER_ERROR',
      message: err.message,
    });
  }
};
