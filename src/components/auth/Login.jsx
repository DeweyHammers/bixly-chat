import React, { Component } from "react";
import { login } from "../../api";

class Login extends Component {
  state = {
    username: "",
    password: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    //Post request https://messaging-test.bixly.com/api-token-auth to login user
    login(this.state);
    this.props.handleLogin();
    this.setState({ username: "", password: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h1>Please Login</h1>
        <input
          type="text"
          name="username"
          placeholder="Username"
          onChange={this.handleChange}
          value={this.state.username}
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          onChange={this.handleChange}
          value={this.state.password}
        />
        <input type="submit" value="Login" />
      </form>
    );
  }
}

export default Login;
