import React from 'react';
import UserStore from '../../stores/user_store';

export default class UserInfo extends React.Component {
  render() {
    return(
      <div>{"Welcome " + this.props.currentUser.firstname + "!"}</div>
    );
  }
}
