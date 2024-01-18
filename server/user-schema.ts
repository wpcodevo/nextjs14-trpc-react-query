import { TypeOf, number, object, string } from 'zod';

export const createUserSchema = object({
  name: string({ required_error: 'Name is required' }),
  email: string({ required_error: 'Email is required' }).email('Invalid email'),
});

export const filterQuery = object({
  limit: number().default(1),
  page: number().default(10),
});

export type CreateUserInput = TypeOf<typeof createUserSchema>;
export type FilterQueryInput = TypeOf<typeof filterQuery>;
