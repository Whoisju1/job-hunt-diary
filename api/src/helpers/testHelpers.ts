import faker from 'faker';
import {
  CompanyInput,
  ContactInput,
  InputMaybe,
  JobApplicationInput,
  NoteInput,
  PositionInput,
} from 'src/types/graphql-types';

import {
  Status as StatusModel,
  User as UserModel,
} from '#models';
import { IStatus, IUser, IUserInput } from 'src/interfaces/modelInterfaces';

export function createPosition(): InputMaybe<PositionInput> | undefined {
  return {
    name: faker.random.word(),
    notes: [createNote(), createNote()],
    requirements: [faker.lorem.words(2), faker.lorem.words(2)],
    stage: faker.random.word(),
  };
}

export function createCompany(): InputMaybe<CompanyInput> | undefined {
  return {
    email: faker.internet.email(),
    insideContacts: [createContact()],
    location: faker.address.streetAddress(),
    name: faker.company.companyName(),
    notes: [createNote(), createNote()],
    phone: faker.phone.phoneNumber(),
  };
}

export function createContact(): ContactInput {
  return {
    alias: faker.lorem.word(),
    email: faker.internet.email(),
    firstName: faker.name.firstName(),
    lastName: faker.name.lastName(),
    note: createNote(),
    phone: faker.phone.phoneNumber(),
  };
}

export function createNote(): NoteInput {
  return {
    body: faker.lorem.sentences(3),
    title: faker.lorem.words(5),
  };
}

export async function createUser(): Promise<IUser> {
  const fakeUserInput: IUserInput = {
    email: faker.internet.email(),
    firstName: faker.name.findName(),
    lastName: faker.name.lastName(),
    hashedPass: faker.internet.password(),
    username: faker.internet.userName(),
    phone: faker.phone.phoneNumber(),
  };

  const createdUser = (await new UserModel(fakeUserInput).save()).toJSON();
  return createdUser;
}

export async function createStatus(name: string, displayName: string): Promise<IStatus> {
  const status = (await new StatusModel({ name, displayName }).save()).toJSON();
  return status;
}

export const createJobAppInput = (): JobApplicationInput => ({
  company: createCompany(),
  contacts: [createContact()],
  notes: [createNote(), createNote()],
  position: createPosition(),
  status: faker.lorem.words(4),
});
