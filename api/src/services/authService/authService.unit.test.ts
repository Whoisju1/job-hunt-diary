import 'regenerator-runtime/runtime';
import { User, UserInput } from './../../types/graphql-types.d';
import { AuthService } from './';
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

  beforeAll(() => initializeDb());

  describe('create property', () => {
    let newUser: User;
    beforeAll(async done => {
      newUser = await AuthService.create(mockedUserInput);
      done();
    });

    it('should exist', () => {
      expect(AuthService).toHaveProperty('create');
      expect(AuthService.create).toBeDefined();
    });

    it('should return a new User', async () => {
      const expectedReturnValue = {
        ...mockedUserInput,
      };
      Reflect.deleteProperty(expectedReturnValue, 'password');

      expect(newUser.id).toBeNumber;
      expect(newUser.updatedAt).toBeDate;
      expect(newUser.createdAt).toBeDate;
      return expect(newUser).toMatchObject({ ...expectedReturnValue });
    });
  });
});
