import 'regenerator-runtime/runtime';
import { AuthService } from './';
import { UserInput } from './../../types/graphql-types.d';
import bcrypt from 'bcrypt';
import faker from 'faker';
import { initializeDb } from '../../db';

describe('AuthService', () => {
  let mockedUserInput: UserInput;
  let hashedPass: string;

  beforeAll(() => initializeDb());

  beforeEach(async (done) => {
    mockedUserInput = {
      email: faker.internet.email(),
      firstName: faker.name.firstName(),
      lastName: faker.name.lastName(),
      password: faker.internet.password(),
      phone: faker.phone.phoneNumber(),
      username: faker.internet.userName(),
    };

    hashedPass =  await bcrypt.hash(mockedUserInput.password, 10);
    done();
  });

  describe('create property', () => {
    it('should exist', () => {
      expect(AuthService).toHaveProperty('create');
      expect(AuthService.create).toBeDefined();
    });

    it('should return a new User', async () => {
      const newUser = await AuthService.create(mockedUserInput);
      return expect(newUser).toEqual({ ...mockedUserInput, hashedPass });
    });
  });
});
