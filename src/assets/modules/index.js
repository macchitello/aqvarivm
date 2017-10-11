import application from './application/reducer';
import applicationSagas from './application/sagas';

import user from './user/reducer';
import userSagas from './user/sagas';

import modal from './modal/reducer';
import modalSagas from './modal/sagas';

import overlay from './overlay/reducer';

export const reducers = {
  application,
  user,
  modal,
  overlay
};

export const sagas = [
  applicationSagas,
  userSagas,
  modalSagas
];
