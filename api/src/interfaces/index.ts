import {
  IJobApplication,
  IJobApplicationInput,
  IUser,
  IUserInput,
} from './modelInterfaces';

export interface IList<T> {
  count: number;
  data: T[];
  done: boolean;
}

export interface IUserService {
  create(user: IUserInput): Promise<IUser>;
  getOne(userId: string): Promise<IUser>;
}

export interface IJobAppService {
  create: (jobAppInput: IJobApplicationInput) => Promise<IJobApplication>;
  edit: (jobAppInput: IJobApplicationInput) => Promise<IJobApplication>;
  getOne: (id: string) => Promise<IJobApplication>;
  getMany: () => Promise<IList<IJobApplication>>;
  deleteOne:() => Promise<string>;
  deleteMany: (ids: string[]) => Promise<string[]>;
}
