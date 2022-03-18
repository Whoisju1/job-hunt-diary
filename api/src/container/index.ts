import { Container } from 'inversify';
import { JobAppService } from '../services/jobAppService/jobAppService';
import { UserService } from '../services/userService';

const container = new Container();

container.bind<UserService>(UserService).toSelf();
container.bind<JobAppService>(JobAppService).toSelf();

export const userService = container.get(UserService);
export const jobAppService = container.get(JobAppService);
