/* eslint-disable max-lines-per-function */
import 'regenerator-runtime/runtime';
import {
  JobApplicationInput,
} from '../../types/graphql-types';
import faker from 'faker';
import { jobAppService } from '#container';
import { initializeDb } from 'src/db';
import {
  User as UserModel,
  Status as StatusModel,
  JobApplication,
} from '../../models';
import {
  createStatus,
  createUser,
  createJobAppInput,
} from 'src/helpers/testHelpers';
import { IJobApplication } from 'src/interfaces/modelInterfaces';


describe('jobAppService', () => {
  let userId: string;
  let statusId: string;

  beforeAll(async () => {
    // make sure database is initialized before all database actions
    await initializeDb();
    // create user
    const { id } = await createUser();
    userId = id;

    const status = await createStatus(faker.lorem.words(1), faker.lorem.words(3));
    statusId = status.id;
  });
  it('should exist', () => {
    expect(jobAppService).toBeDefined();
  });

  afterAll(async () => {
    // delete created user
    if(userId) {
      await UserModel.destroy({
        where: { id: userId },
      });
    }

    // remove created status
    if (statusId) {
      await StatusModel.destroy({ where: { id: statusId }});
    }
  });

  let jobApplicationInput: JobApplicationInput;

  beforeEach(() => {
    jobApplicationInput = createJobAppInput();
  });

  describe('jobAppService.create', () => {
    let application: IJobApplication;

    beforeEach(async () => {
      application = await jobAppService.create({ userId, statusId, ...jobApplicationInput});
    });

    afterEach(async () => {
      await JobApplication.destroy({ where: { id: application.id }});
    });

    it('should be defined', () => {
      expect(jobAppService.create).toBeDefined;
      expect(jobAppService.create).not.toBe(null);
    });
    it('should create job application', async () => {
      expect(application).toBeDefined;
    });
  });

  describe('jobAppService.getOne', () => {
    let createdJobApp: IJobApplication;
    let foundJobApp: IJobApplication;
    beforeEach(async () => {
      const jobAppInput = createJobAppInput();
      const input = { userId, statusId, ...jobAppInput };
      createdJobApp = (await new JobApplication(input).save()).toJSON();
      const result = await jobAppService.getOne(createdJobApp.id);
      if(result) {
        foundJobApp = result;
      }
    });

    afterEach(async () => {
      if (createdJobApp.id) {
        await JobApplication.destroy({ where: { id: createdJobApp.id }});
      }
    });

    it('should be a function', () => {
      expect(jobAppService.getOne).toBeFunction;
    });

    it('should return a jobApplication', () => {
      expect(foundJobApp.id).toBe(createdJobApp.id);
    });
  });
});
