import { User, UserInput } from '../../types/graphql-types';
import { IService } from '../../types/services';
import { User as UserModel } from '../../sequelizeModels/User.model';
import bcrypt from 'bcrypt';

type IAuthService = IService<User, UserInput>

export class AuthService implements IAuthService {
  delete!: (id: string) => Promise<User>;
  edit!: (item: UserInput) => Promise<User>;
  get!: (id: string) => Promise<User>;
  getMany!: () => Promise<User>;

  public static create = async (item: UserInput): Promise<User> => {
    // hash password with 10 salt rounds
    const hashedPass = await bcrypt.hash(item.password, 10);
    // remove the password property from item
    Reflect.deleteProperty(item, 'password');
    console.log('------------------------');
    console.log({ item });
    console.log('------------------------');
    const user = await (await UserModel
      .create({ ...item, hashedPass }))
      .save();
    return user as unknown as User;
  }
}
