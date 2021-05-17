/* eslint-disable max-lines-per-function */
import 'regenerator-runtime/runtime';
import { User, UserInput } from '../../types/graphql-types';
import { User as UserModel } from '../../sequelizeModels/User.model';
import { UserService } from '.';
import faker from 'faker';
import { initializeDb } from '../../db';

describe('UserService', () => {
  const createMockUser = (): UserInput => ({
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    password: faker.internet.password(),
    phone: faker.phone.phoneNumber(),
    username: faker.internet.userName(),
  });

  const createUser = async (user = createMockUser()) => await UserService.create(user);
  
  describe('create method', () => {
    let newUser: User;
  
    beforeAll(() => initializeDb());
    beforeEach(async done => {
      newUser = await createUser();
      done();
    });

    it('should return a new User', () => {
      const expectedReturnValue = {
        ...newUser,
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
      createdUser = await UserService.create(createMockUser());
      done();
    });

    it('should be defined', () => {
      expect(UserService).toHaveProperty('delete');
      expect(UserService.delete).toBeDefined();
    });

    it('should deleteUser', async () => {
      const numberOfDeletedItems = await UserService.delete(createdUser.id);
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
      expect(UserService).toHaveProperty('edit');
    });

    it('should modify existing user', async () => {
      const modifications = { username: 'edided username' };
      const editedUser = await UserService.edit(existingUser.id, modifications);
      expect(editedUser.username).toBe(modifications.username);
    });

    afterEach(async () => {
      const { id } = existingUser;
      return await UserModel.destroy({ where: { id }});
    });
  });

  describe('getOne method', () => {
    let existingUser: User;
    beforeEach(async () => {
      existingUser = await createUser();
    });

    afterEach(async () => {
      const { id } = existingUser;
      await UserModel.destroy({ where: { id }});
    });

    it('should be defined', () => {
      expect(UserService).toHaveProperty('getOne');
      expect(UserService.getOne).toBeDefined;  
    });

    it('should get one user', async () => {
      const foundUser = await UserService.getOne(existingUser.id);
      Reflect.deleteProperty(existingUser, 'password');
      expect(foundUser).toMatchObject({ ...existingUser, createdAt: expect.any(Date), updatedAt: expect.any(Date) });
      expect(foundUser).toHaveProperty('hashedPass');
    });
  });
});
