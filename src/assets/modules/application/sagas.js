import { call, fork, put, takeEvery } from 'redux-saga/effects';

import {
  FETCH_USERS,
  FETCH_POSTS,
  setUsers,
  setPosts
} from '../application/actions';

import * as api from './api';

function* requestPosts() {
  try {
    const posts = yield call(api.fetchPosts);
    if (posts.length) {
      yield put(setPosts(posts));
    }
  } catch (e) {
    console.error(e);
  }

}

function* requestUsers() {
  try {
    const users = yield call(api.fetchUsers);

    if (users.length) {
      yield put(setUsers(users));
    }
  } catch (e) {
    console.error(e);
  }
}

function* watchForFetchPosts() {
  yield takeEvery(FETCH_POSTS, requestPosts);
}

function* watchForFetchUsers() {
  yield takeEvery(FETCH_USERS, requestUsers);
}

export default function* root() {
  yield [
    fork(watchForFetchPosts),
    fork(watchForFetchUsers)
  ];
}
