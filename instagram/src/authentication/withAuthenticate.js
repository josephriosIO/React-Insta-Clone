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
      this.setState({
        loggedIn: !this.state.loggedIn
      });
    }
    render() {
      if (this.state.loggedIn) {
        return <LoginPage />;
      }
      return <App />;
    }
  };

export default withAuthenticate;
