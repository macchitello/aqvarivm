import { Record, Map } from 'immutable';

import {
  SET_POSTS,
  SET_USERS
} from './actions';

export const Post = new Record({
  id: '',
  idUser: '',
  dtIns: '',
  body: '',
  title: '',
  pic: ''
}, 'Post');

export const User = new Record({
  id: '',
  firstName: '',
  lastName: '',
  email: 'a@a.it'
}, 'User');

const InitialState = new Record({
  users: new Map(),
  posts: new Map()
});

export default (state = new InitialState(), { type, payload }) => {
  switch (type) {
    case SET_POSTS: {
      const posts = payload;
      const updatedState = state.withMutations((mutableState) => {
        posts.forEach(({ ...post }) => {
          mutableState.setIn(['posts', post.id], new Post({
            ...post
          }));
        });
        return mutableState;
      });
      return updatedState;
    }
    case SET_USERS: {
      const users = payload;
      const updatedState = state.withMutations((mutableState) => {
        users.forEach(({ ...user }) => {
          mutableState.setIn(['users', user.idUser], new User({
            ...user,
            id: user.idUser
          }));
        });
        return mutableState;
      });
      return updatedState;
    }
    default: {
      return state;
    }
  }
};
