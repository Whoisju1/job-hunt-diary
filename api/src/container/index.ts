import { Container } from 'inversify';
import { UserService } from '../services/userService';

const container = new Container();

container.bind<UserService>(UserService).toSelf();

export const userService = container.get(UserService);
