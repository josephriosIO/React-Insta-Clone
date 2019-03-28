import React from "react";

// HOC takes in two components the app and the login page
const withAuthenticate = App => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        // setting the log in state to false
        loggedIn: false
      };
    }

    componentDidMount() {
      // if local localStorage has a value for the key username set the state
      // of loggedIn to true
      if (localStorage.getItem("username")) {
        this.setState({
          loggedIn: true
        });
      }
    }
    render() {
      // if logged in is === to false to show LoginPage
      if (!this.state.loggedIn) {
        return <LoginPage />;
      }
      // else if loggedIn is true show app
      return <App />;
    }
  };

export default withAuthenticate;
