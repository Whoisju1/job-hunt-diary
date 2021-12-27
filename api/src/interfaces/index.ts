import { User, UserInput } from '../types/graphql-types';


export type ReturnedUser = Omit<User, '__typename'>;

export interface IUserService {
  create(user: UserInput): Promise<ReturnedUser>;
  getOne(userId: string): Promise<ReturnedUser>;
}
