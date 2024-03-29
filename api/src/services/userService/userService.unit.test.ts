/* eslint-disable max-lines-per-function */
import 'regenerator-runtime/runtime';
import { User, UserInput } from '../../types/graphql-types';
import { User as UserModel } from '../../models';
import faker from 'faker';
import { initializeDb } from '../../db';
import { userService } from 'src/container';

describe('UserService', () => {
  const createMockUser = (): UserInput => ({
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    password: faker.internet.password(),
    phone: faker.phone.phoneNumber(),
    username: faker.internet.userName(),
  });

  const createUser = async (user = createMockUser()) => await userService.create(user);

  describe('create method', () => {
    let newUser: User;

    beforeAll(() => initializeDb());
    beforeEach(async () => {
      newUser = await createUser();
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

    afterEach(async () => {
      await UserModel.destroy({ where: { id: newUser.id }});
    });
  });

  describe('delete method', () => {
    let createdUser: User;
    beforeAll(async () => {
      createdUser = await userService.create(createMockUser());
    });

    it('should be defined', () => {
      expect(userService).toHaveProperty('delete');
      expect(userService.delete).toBeDefined();
    });

    it('should deleteUser', async () => {
      const numberOfDeletedItems = await userService.delete(createdUser.id);
      expect(numberOfDeletedItems).toBe(1);
    });
  });

  describe('edit method', () => {
    let existingUser: User;
    beforeEach(async () => {
      // create user for editing
      existingUser = await createUser();
    });
    it('should exist', () => {
      expect(userService).toHaveProperty('edit');
    });

    it('should modify existing user', async () => {
      const modifications = { username: 'edited username' };
      const editedUser = await userService.edit(existingUser.id, modifications);
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
      expect(userService).toHaveProperty('getOne');
      expect(userService.getOne).toBeDefined;
    });

    it('should get one user', async () => {
      const foundUser = await userService.getOne(existingUser.id);
      Reflect.deleteProperty(existingUser, 'password');
      expect(foundUser).toMatchObject({ ...existingUser, createdAt: expect.any(Date), updatedAt: expect.any(Date) });
      expect(foundUser).toHaveProperty('hashedPass');
    });
  });
});
