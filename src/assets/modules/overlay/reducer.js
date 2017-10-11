import { Record } from 'immutable';
import {
  OVERLAY_SET_DISPLAY,
  CLOSE_OVERLAY
} from './actions';

const InitialState = new Record({
  visible: false
});

export default (state = new InitialState(), { type, payload }) => {
  switch (type) {
    case CLOSE_OVERLAY: {
      return state.set('visible', false);
    }
    case OVERLAY_SET_DISPLAY: {
      return state.set('visible', payload);
    }
    default: {
      return state;
    }
  }
};
