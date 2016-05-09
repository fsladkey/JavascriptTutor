import React from 'react';

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
  }

  render() {
    return(
      <form onSubmit={this.handleSubmit}>
        <label>Email
          <input type="email" value={this.state.email} onChange={this.handleEmail}/>
        </label>
        <label>Password
          <input type="password" value={this.state.password} onChange={this.handlePassword}/>
        </label>
        <input type="submit" value="Sign In"/>
      </form>
    );
  }
}
