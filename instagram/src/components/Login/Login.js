import React, { Component } from "react";
import "./login.css";
import logo from "./logo.png";
import logo0 from "./logo0.png";
import bottom from "./bottom-info.png";
import styled from "styled-components";

// styled components
const LoginDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

const LoginData = styled.div`
  margin-left: 3rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 1px solid #fffafa;
  height: 100%;

  @media screen and (max-width: 500px) {
    margin-left: 0;
  }
`;

const Button = styled.button`
  height: 30px;
  background-color: #3897f0;
  border: 1px solid #3897f0;
  border-radius: 4px;
  color: #fff;
  position: relative;
`;

const MainP = styled.p`
  padding-left: 3rem;
  margin: 30px 0;
  text-align: center;
  color: #696969;
`;

const Form = styled.form`
  display: flex;
  flex-flow: column;
`;

const Logo = styled.img`
  padding-left: 5.8rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 4rem;
  width: 10rem;
  @media screen and (max-width: 500px) {
    padding-left: 6.3rem;
  }
`;

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
      <LoginDiv>
        <img className="side-image" src={logo} />
        <LoginData className="login-data">
          <Form>
            <Logo src={logo0} />
            <MainP className=" top-info">
              Sign up to see photos and videos from your friends.
            </MainP>
            <Button onClick={this.signIn}>Log in with Facebook</Button>
            <MainP className="or">OR</MainP>
            <input
              className="login-input"
              placeholder="Mobile Number or Email"
            />
            <input className="login-input" placeholder="Full Name" />
            <input
              className="login-input"
              value={this.state.username}
              onChange={this.handleChanges}
              name="username"
              placeholder="username"
            />
            <input
              className="login-input"
              type="password"
              placeholder="password"
            />
            <Button onClick={this.signIn}>login</Button>
            <MainP className=" top-info">
              By signing up, you agree to our Terms , Data Policy and Cookies
              Policy .
            </MainP>
            <img src={bottom} />
          </Form>
        </LoginData>
      </LoginDiv>
    );
  }
}

export default Login;
