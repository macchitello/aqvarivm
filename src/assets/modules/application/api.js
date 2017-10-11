import { Settings } from '../../utils/settings';
/* eslint no-undef: 0 */
export function getLoginStatus() {
  console.log('initialiseFB');

  return new Promise( (resolve, fail) => {
    FB.getLoginStatus((res)=>resolve(res));
  });
}

/* eslint import/prefer-default-export: 0 */
export function fetchUsers() {
  const URL = `${Settings.HOST}/userService/getAll`;
  const OPTIONS = { method: 'GET' };

  return fetch(URL, OPTIONS)
    .then(response => Promise.all([response, response.json()]))
    .then(([response, json]) => {
      if (response.ok) {
        if (json instanceof Array) {
          return json;
        }
        return [];
      }
      const errorMessage = json.errorMessage ? json.errorMessage : 'Unexpected error';
      Promise.reject(errorMessage);
    })
    .catch(err => Promise.reject(err));
}

export function fetchPosts() {
  const URL = `${Settings.HOST}/postService/getAll`;
  const OPTIONS = { method: 'GET' };
  return fetch(URL, OPTIONS)
    .then(response => Promise.all([response, response.json()]))
    .then(([response, json]) => {
      if (response.ok) {
        if (json instanceof Array) {
          return json;
        }
        return [];
      }
      const errorMessage = json.errorMessage ? json.errorMessage : 'Unexpected error';
      Promise.reject(errorMessage);
    })
    .catch(err => Promise.reject(err));
}
