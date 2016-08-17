import React from 'react';
import SignInForm from './sign_in_form';
import UserStore from '../stores/user_store';
import NavBar from './nav/nav_bar';

export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = { currentUser: UserStore.currentUser() };
    this.state = { currentUser: UserStore.currentUser() };
  }

  componentDidMount() {
    UserStore.addListener(this.handleUserChange.bind(this));
  }

  handleUserChange() {
    this.setState({ currentUser: UserStore.currentUser() });
  }

  render() {
    if (this.state.currentUser) {
      return(
        <div>
          <NavBar currentUser={this.state.currentUser}/>
          {this.props.children}
        </div>
      );
    } else {
      return (
        <SignInForm />
      );
    }
  }
}
