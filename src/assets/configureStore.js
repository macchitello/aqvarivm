import { createStore, applyMiddleware } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import { combineReducers } from 'redux-immutable';
import createHistory from 'history/createBrowserHistory';
import { fromJS } from 'immutable';
import createSagaMiddleware from 'redux-saga';
import { fork } from 'redux-saga/effects';
import { reducers, sagas } from './modules';

const history = createHistory();

const routerMiddleware = createRouterMiddleware(history);
const initialState = fromJS({});
const reducer = combineReducers({ ...reducers });
const sagaMiddleware = createSagaMiddleware();

let store;

function* rootSaga() {
  yield sagas.map(saga => fork(saga));
}

export default function configureStore() {
  store = createStore(reducer, initialState, applyMiddleware(routerMiddleware, sagaMiddleware));
  sagaMiddleware.run(rootSaga);
  return store;
}

export { history };
