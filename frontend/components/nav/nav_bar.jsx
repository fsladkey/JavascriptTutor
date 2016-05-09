import React from 'react';
import UserInfo from './user_info';

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
        <h1>Javascript Tutor</h1>
        <UserInfo/>
      </div>
    );
  }
}
