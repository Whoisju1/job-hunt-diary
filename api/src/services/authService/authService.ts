import { User, UserInput } from '../../types/graphql-types';
// import { IService } from '../../types/services';
import { User as UserModel } from '../../sequelizeModels/User.model';
import bcrypt from 'bcrypt';

// type IAuthService = IService<User, UserInput>
export class AuthService {
  delete!: (id: string) => Promise<User>;
  edit!: (item: UserInput) => Promise<User>;
  get!: (id: string) => Promise<User>;
  getMany!: () => Promise<User>;

  public static create = async (newUser: UserInput): Promise<User> => {
    // hash password with 10 salt rounds
    const hashedPass = await bcrypt.hash(newUser.password, 10);
    // remove the password property from item
    Reflect.deleteProperty(newUser, 'password');
    const createdUser = (await UserModel.create({ ...newUser, hashedPass })).toJSON();

    return createdUser as unknown as User;
  }
}
