import { combineReducers } from 'redux';

import { CLEAR_STORE } from '../actions/types';

import userReducer from './userReducer';

const appReducer = combineReducers({
  user: userReducer
});

const rootReducer = (state, action) => {
  if (action.type === CLEAR_STORE) {
    state = undefined;
  }

  return appReducer(state, action)
}

export default rootReducer;