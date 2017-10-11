/* eslint import/prefer-default-export: 0 */
export function loginUser() {
  console.log('loginUser');

  return new Promise((resolve, fail) => {
    /* eslint no-undef: 0 */
    FB.login((res) => {
      if (res.authResponse) {
       console.info('FB - Welcome!  Fetching your information.... ');

       FB.api('/me', function(userResponse) {
         resolve(userResponse);
       });
      } else {
        fail(res);
        console.error('FB - User cancelled login or did not fully authorize.');
      }
    });
  });
}
