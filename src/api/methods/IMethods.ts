import User from '../models/User';

interface IMethods {
  signIn(login: string, password: string): Promise<User>;

  //signOut(token: string, id: number): Promise<void>;
}

export default IMethods;
