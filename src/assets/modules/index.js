import application from './application/reducer';
import applicationSagas from './application/sagas';

export const reducers = {
  application
};

export const sagas = [
  applicationSagas
];
