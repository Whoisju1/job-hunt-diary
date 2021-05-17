import { User, UserInput } from '../../types/graphql-types';
// import { IService } from '../../types/services';
import { User as UserModel } from '../../sequelizeModels/User.model';
import bcrypt from 'bcrypt';

export class UserService {
  public static delete  = async (id: string): Promise<number> => {
    const numOfRowsDelted = await UserModel.destroy({ where: { id } });
    return numOfRowsDelted;
  }

  static edit = async (id: string, modifications: Partial<UserInput>): Promise<User> => {
    const [quantityEdited] = await UserModel.update(modifications, { where: { id }});
    if (!quantityEdited) throw new Error('User not found.');
    const editedUser = await UserModel.findOne({ where: { id} });
    if (!editedUser) throw new Error('User not found.');
    return editedUser.toJSON() as User;
  }

  static getOne = async (id: string): Promise<User> => {
    const foundUser = await UserModel.findOne({ where: { id } });
    if (!foundUser) throw new Error('User not found.');
    return foundUser.toJSON() as User;
  }

  public static create = async (user: UserInput): Promise<User> => {
    const { password, ...newUser } = user;
    // hash password with 10 salt rounds
    const hashedPass = await bcrypt.hash(password, 10);
    // remove the password property from item
    const createdUser = (await UserModel.create({ ...newUser, hashedPass })).toJSON();

    return createdUser as unknown as User;
  }
}
