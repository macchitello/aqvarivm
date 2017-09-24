import { Record } from 'immutable';
import { LOCATION_CHANGE } from 'react-router-redux';
import {

} from './actions';

const InitialState = new Record({
  section: 'gallery'
});

export default (state = new InitialState(), { type, payload }) => {
  switch (type) {
    case LOCATION_CHANGE: {
      return state.merge({
        section: payload.pathname.replace('/', '')
      });
    }
    default: {
      return state;
    }
  }
};
