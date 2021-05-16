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

  const createUser = async (user = mockedUserInput) => await AuthService.create(user);
  
  describe('create method', () => {
    let newUser: User;
  
    beforeAll(() => initializeDb());
    beforeEach(async done => {
      newUser = await createUser();
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

  describe('edit method', () => {
    let existingUser: User;
    beforeEach(async (done: () => void) => {
      // create user for editing
      existingUser = await createUser();
      done();
    });
    it('should exist', () => {
      expect(AuthService).toHaveProperty('edit');
    });

    it('should modify existing user', async () => {
      const modifications = { username: 'edided username' };
      const editedUser = await AuthService.edit(existingUser.id, modifications);
      expect(editedUser.username).toBe(modifications.username);
    });

    afterEach(async () => {
      const { id } = existingUser;
      return await UserModel.destroy({ where: { id }});
    });
  });
});
