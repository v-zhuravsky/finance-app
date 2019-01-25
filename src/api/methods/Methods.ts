import IMethods from './IMethods';
import User from '../models/User';
import { user as userMock } from '../../__mocks__/user';

class Methods implements IMethods {
  public signIn(login: string, password: string): Promise<User> {
    return Promise.resolve(userMock);
  }
}

export default Methods;
