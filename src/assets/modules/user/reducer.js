import { Record } from 'immutable';
import {
  LOGIN_USER
} from './actions';

const InitialState = new Record({
  isLoggedIn: false
});

export default (state = new InitialState(), { type, payload }) => {
  switch (type) {
    case LOGIN_USER: {
      if (payload.status === 'connected') {
        return state.merge({ isLoggedIn: true });
      }

      return state.merge({ isLoggedIn: false });
    }
    default: {
      return state;
    }
  }
};
