import React from 'react';
import SignInForm from './sign_in_form';

export default class UserInfo extends React.Component {
  render() {
    if (false) {
      return(
        <CurrentUserInfo/>
      );
    } else {
      return(
        <div>
          <SignInForm/>
        </div>
      );
    }
  }
}
