import React, { Component } from "react";
import Login from "./components/auth/Login";
import Dashboard from "./containers/Dashboard";

class App extends Component {
  state = {
    loggedIn: false,
    token: "",
  };

  componentDidMount() {
    const token = window.sessionStorage.getItem("token");
    token && this.setState({ loggedIn: true, token: token });
  }

  handleLogin = (token) => {
    window.sessionStorage.setItem("token", token);
    this.setState({ loggedIn: true, token: token });
  };

  handleLogout = () => {
    window.sessionStorage.removeItem("token");
    this.setState({ loggedIn: false, token: "" });
  };

  render() {
    return (
      <div>
        {!this.state.loggedIn ? (
          <Login
            setToken={this.handleSetToken}
            handleLogin={this.handleLogin}
          />
        ) : (
          <Dashboard
            token={this.state.token}
            handleLogout={this.handleLogout}
          />
        )}
      </div>
    );
  }
}

export default App;
