import 'reflect-metadata';
import { IUserService, ReturnedUser } from '../../interfaces';
import { User, UserInput } from '../../types/graphql-types';
import { User as UserModel } from '../../sequelizeModels/User.model';
import bcrypt from 'bcrypt';
import { injectable } from 'inversify';
// import { IService } from '../../types/services';

@injectable()
export class UserService implements IUserService {
  public delete  = async (id: string): Promise<number> => {
    const numOfRowsDeleted = await UserModel.destroy({ where: { id } });
    return numOfRowsDeleted;
  }

  public edit = async (id: string, modifications: Partial<UserInput>): Promise<User> => {
    const [quantityEdited] = await UserModel.update(modifications, { where: { id }});
    if (!quantityEdited) throw new Error('User not found.');
    const editedUser = await UserModel.findOne({ where: { id} });
    if (!editedUser) throw new Error('User not found.');
    return editedUser.toJSON() ;
  }

  public getOne = async (id: string): Promise<ReturnedUser> => {
    const foundUser = await UserModel.findOne({ where: { id } });
    if (!foundUser) throw new Error('User not found.');
    return foundUser.toJSON();
  }

  public create = async (user: UserInput): Promise<User> => {
    const { password, ...newUser } = user;
    // hash password with 10 salt rounds
    const hashedPass = await bcrypt.hash(password, 10);
    // remove the password property from item
    const createdUser = await UserModel.create({ ...newUser, hashedPass });
    const savedUser = await createdUser.save();

    return savedUser.toJSON();
  }
}
