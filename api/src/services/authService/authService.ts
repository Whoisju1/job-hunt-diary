import { User, UserInput } from '../../types/graphql-types';
// import { IService } from '../../types/services';
import { User as UserModel } from '../../sequelizeModels/User.model';
import bcrypt from 'bcrypt';

// type IAuthService = IService<User, UserInput>
export class AuthService {
  public static delete  = async (id: string): Promise<number> => {
    const numOfRowsDelted = await UserModel.destroy({ where: { id }});
    return numOfRowsDelted;
  }

  edit!: (item: UserInput) => Promise<User>;
  get!: (id: string) => Promise<User>;
  getMany!: () => Promise<User>;

  public static create = async (user: UserInput): Promise<User> => {
    const { password, ...newUser} = user;
    // hash password with 10 salt rounds
    const hashedPass = await bcrypt.hash(password, 10);
    // remove the password property from item
    const createdUser = (await UserModel.create({ ...newUser, hashedPass })).toJSON();

    return createdUser as unknown as User;
  }
}
