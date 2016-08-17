import React from 'react';
import { Link } from 'react-router';
import CurrentUserInfo from './current_user_info';

export default class NavBar extends React.Component {
  render() {
    return(
      <div>
        <h1><Link to="/">Javascript Tutor</Link></h1>
        <CurrentUserInfo currentUser={this.props.currentUser}/>
      </div>
    );
  }
}
