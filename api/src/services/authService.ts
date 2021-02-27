import { User, UserInput } from '../types/graphql-types';
import { IService } from './../types/services.d';
import { User as UserModel } from '../sequelizeModels/User.model';

type IAuthService = IService<User, UserInput>

export class AuthService implements IAuthService {
  delete!: (id: string) => Promise<User>;
  edit!: (item: UserInput) => Promise<User>;
  get!: (id: string) => Promise<User>;
  getMany!: () => Promise<User>;

  public create = async (item: UserInput): Promise<User> => {
    const user = await (await UserModel
      .create(item))
      .save();
    return user as unknown as User;
  }
}
