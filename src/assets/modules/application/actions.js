export const FETCH_USERS = 'application/FETCH_USERS';
export const SET_USERS = 'application/SET_USERS';
export const FETCH_POSTS = 'application/FETCH_POSTS';
export const SET_POSTS = 'application/SET_POSTS';

export const fetchUsers = () => ({ type: FETCH_USERS });

export const setUsers = payload => ({
  type: SET_USERS,
  payload
});

export const fetchPosts = () => ({ type: FETCH_POSTS });

export const setPosts = payload => ({
  type: SET_POSTS,
  payload
});
