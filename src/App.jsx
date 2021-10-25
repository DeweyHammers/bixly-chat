import React, { Component } from "react";
import Login from "./components/auth/Login";
import Dashboard from "./containers/Dashboard";
import { checkIfLoggedin } from "./api";

class App extends Component {
  state = {
    loggedIn: false,
  };

  componentDidMount() {
    checkIfLoggedin();
  }

  handleLogin = () => {
    this.setState({ loggedIn: true });
  };

  handleLogout = () => {
    this.setState({ loggedIn: false });
  };

  render() {
    return (
      <div>
        {!this.state.loggedIn ? (
          <Login handleLogin={this.handleLogin} />
        ) : (
          <Dashboard handleLogout={this.handleLogout} />
        )}
      </div>
    );
  }
}

export default App;
