import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();
    this.state = {
      username: '',
      password: ''
    };
  }

  LoginFormState = (event) => {
    this.setState({
      [event.target.name]: event.target.value
    })
  }

  Login = (event) => {
    event.preventDefault()
    // debugger;

    // const username = this.state.username
    // const password = this.state.password

    {(this.state.username !== '' || this.state.password !== '') ?  this.props.handleLogin(this.state) : console.log("Please enter Username and Password") }
    // this.props.handleLogin({username, password})

  }

  render() {
    return (
      <form onSubmit={(event) => {this.Login(event)}}>
        <div>
          <label>
            Username
            <input id="username" name="username" type="text" value={this.state.username} onChange={(event) => this.LoginFormState(event)}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password" name="password" type="password" value={this.state.password} onChange={(event) => this.LoginFormState(event)} />
          </label>
        </div>
        <div>
          <button type="submit">Log in</button>
        </div>
      </form>
    );
  }
}

export default LoginForm;
