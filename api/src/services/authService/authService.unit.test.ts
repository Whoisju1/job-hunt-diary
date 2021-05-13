/* eslint-disable max-lines-per-function */
import 'regenerator-runtime/runtime';
import { User, UserInput } from './../../types/graphql-types.d';
import { AuthService } from './';
import { User as UserModel } from '../../sequelizeModels/User.model';
import faker from 'faker';
import { initializeDb } from '../../db';

describe('AuthService', () => {
  const mockedUserInput: UserInput = {
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    password: faker.internet.password(),
    phone: faker.phone.phoneNumber(),
    username: faker.internet.userName(),
  };
  
  describe('create method', () => {
    let newUser: User;
  
    beforeAll(() => initializeDb());
    beforeEach(async done => {
      newUser = await AuthService.create(mockedUserInput);
      done();
    });

    it('should return a new User', () => {
      const expectedReturnValue = {
        ...mockedUserInput,
      };
      Reflect.deleteProperty(expectedReturnValue, 'password');

      expect(newUser.id).toBeNumber;
      expect(newUser.updatedAt).toBeDate;
      expect(newUser.createdAt).toBeDate;
      expect(newUser).toMatchObject({ ...expectedReturnValue });
    });

    afterAll(() => UserModel.destroy({ where: { id: newUser.id }}));
  });

  describe('delete method', () => {
    let createdUser: User; 
    beforeAll(async done => {
      createdUser = await AuthService.create(mockedUserInput);
      done();
    });

    it('should be defined', () => {
      expect(AuthService).toHaveProperty('delete');
      expect(AuthService.delete).toBeDefined();
    });

    it('should deleteUser', async () => {
      const numberOfDeletedItems = await AuthService.delete(createdUser.id);
      expect(numberOfDeletedItems).toBe(1);
    });
  });
});
