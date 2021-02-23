import { IService } from './../types/services.d';
import { UserInput, User } from '../types/graphql-types';
import { User as UserModel } from '../sequelizeModels/User.model';

interface IAuthService extends IService<User, UserInput> { }

export class AuthService implements IAuthService {
  delete!: (id: string) => Promise<User>;
  edit!: (item: UserInput) => Promise<User>;
  get!: (id: string) => Promise<User>;
  getMany!: () => Promise<User>;

  public create = async (item: UserInput) => {
    const user = await (await UserModel
      .create(item))
      .save();
    return user as unknown as User;
  }
}
