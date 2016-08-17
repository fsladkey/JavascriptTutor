import React from 'react';
import UserApiUtil from '../util/user_api_util';

export default class SignInForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  }

  handleEmail(e) {
    this.setState({email: e.currentTarget.value});
  }

  handlePassword(e) {
    this.setState({password: e.currentTarget.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    UserApiUtil.signIn(this.state);
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit.bind(this)}>
        <label>Email
          <input
            type="email"
            value={this.state.email}
            onChange={this.handleEmail.bind(this)}
            />
        </label>
        <label>Password
          <input
            type="password"
            value={this.state.password}
            onChange={this.handlePassword.bind(this)}
            />
        </label>
        <input type="submit" value="Sign In"/>
      </form>
    );
  }
}
