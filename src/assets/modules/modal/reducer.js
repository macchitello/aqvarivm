import { Record } from 'immutable';
import {
  DISPLAY_MODAL
} from './actions';

const InitialState = new Record({
  section: 'default',
  show: false
});

export default (state = new InitialState(), action) => {
  switch (action.type) {
    case DISPLAY_MODAL: {
      const { section, show } = action.payload;
      return state.merge({
        show,
        section
      });
    }
    default:
      return state;
  }
};
