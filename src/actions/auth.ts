import { AUTH } from './types';
import api from '../api/apiProvider';

export default (login: string, password: string): any => (
  dispatch: any
): void => {
  api.signIn(login, password).then(user => {
    dispatch({
      type: AUTH,
      payload: user,
    });
  });
};
