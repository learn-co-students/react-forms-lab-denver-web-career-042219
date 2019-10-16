import React from "react";

class LoginForm extends React.Component {
  constructor() {
    super();

    this.state = {
      username: '',
      password: ''
    };
  }

  handleChange = event => {
    const key = event.target.name
    const value = event.target.value
    this.setState(prevState => {
      prevState[key] = value
      return prevState
    })
  }

  handleSubmit = event => {
    event.preventDefault()
    if(!this.state.username || !this.state.password) {
      alert("Enter a Username and/or Password")
    }
    else {
      return this.props.handleLogin(this.state)
    }
  }



  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>
            Username
            <input id="username"
              name="username"
              type="text"
              value={this.state.username} 
              onChange={this.handleChange}/>
          </label>
        </div>
        <div>
          <label>
            Password
            <input id="password"
              name="password"
              type="password"
              value={this.state.password}
              onChange={this.handleChange} />
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
