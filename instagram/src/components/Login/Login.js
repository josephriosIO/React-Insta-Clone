import React, { Component } from "react";

class Login extends Component {
  render() {
    return (
      <div>
        <input placeholder="username" />
        <input placeholder="password" />
        <button>login</button>
      </div>
    );
  }
}

export default Login;
