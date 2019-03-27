import React, { Component } from "react";
import "./login.css";
import logo from "./logo.png";
import logo0 from "./logo0.png";
import bottom from "./bottom-info.png";

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
      <div className="login">
        <img src={logo} />
        <div className="login-data">
          <form className="user-input">
            <img className="insta-logo" src={logo0} />
            <p className="top-info">
              Sign up to see photos and videos from your friends.
            </p>
            <button onClick={this.signIn}>Log in with Facebook</button>
            <p className="or">OR</p>
            <input placeholder="Mobile Number or Email" />
            <input placeholder="Full Name" />
            <input
              value={this.state.username}
              onChange={this.handleChanges}
              name="username"
              placeholder="username"
            />
            <input placeholder="password" />
            <button onClick={this.signIn}>login</button>
            <p className="top-info">
              By signing up, you agree to our Terms , Data Policy and Cookies
              Policy .
            </p>
            <img src={bottom} />
          </form>
        </div>
      </div>
    );
  }
}

export default Login;
