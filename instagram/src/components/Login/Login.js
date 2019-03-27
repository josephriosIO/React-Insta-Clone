import React, { Component } from "react";

class Login extends Component {
  state = {
    username: ""
  };

  handleChanges = e => {
    this.setState({ [e.target.name]: e.target.value });
  };

  signIn = () => {
    const username = {
      username: this.state.username
    };
    this.setState({
      username,
      username: ""
    });
    localStorage.setItem("username", this.state.username);
  };

  render() {
    return (
      <div>
        <form>
          <input
            value={this.state.username}
            onChange={this.handleChanges}
            name="username"
            placeholder="username"
          />
          <input placeholder="password" />
          <button onClick={this.signIn}>login</button>
        </form>
      </div>
    );
  }
}

export default Login;
