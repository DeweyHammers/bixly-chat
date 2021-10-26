import React, { Component } from "react";
import Login from "./components/auth/Login";
import Dashboard from "./components/Dashboard";

class App extends Component {
  state = {
    loggedIn: false,
    token: "",
  };

  componentDidMount() {
    // Check to see if there is a token stored in the browser to skip login
    const token = window.localStorage.getItem("token");
    token && this.setState({ loggedIn: true, token: token });
  }

  handleLogin = (token) => {
    // Login user and store the token in the browser
    window.localStorage.setItem("token", token);
    this.setState({ loggedIn: true, token: token });
  };

  handleLogout = () => {
    // Loggout the user and remove the token from the brower
    window.localStorage.removeItem("token");
    this.setState({ loggedIn: false, token: "" });
  };

  render() {
    return (
      // If user is not logged in, return the login form and if the user is logged return the dashboard
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
