import React from "react";

const withAuthenticate = App => LoginPage =>
  class extends React.Component {
    constructor() {
      super();
      this.state = {
        loggedIn: false
      };
    }

    componentDidMount() {
      if (localStorage.getItem("username")) {
        this.setState({
          loggedIn: true
        });
      }
    }
    render() {
      if (!this.state.loggedIn) {
        return <LoginPage />;
      }
      return <App />;
    }
  };

export default withAuthenticate;
