import { AUTH } from '../actions/types.ts';

const initialState = {};

export default (state = initialState, { type, payload }) => {
  switch (type) {
    case AUTH:
      return payload;
    default:
      return state;
  }
};