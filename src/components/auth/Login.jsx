import React, { Component } from "react";
import Error from "../Error";
import { login } from "../../api";
import { Form, Button, Container, Col } from "react-bootstrap";

class Login extends Component {
  state = {
    username: "",
    password: "",
    error: false,
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    const { username, password } = this.state;
    login({ username, password })
      .then((response) => this.props.handleLogin(response.data.token))
      .catch(() =>
        this.setState({
          error: "Either Password or Username was wrong or did not match",
        })
      );
    this.setState({ username: "", password: "" });
  };

  handleCloseError = () => {
    this.setState({ error: false });
  };

  render() {
    return (
      <Container>
        <Col md={{ span: 6, offset: 3 }}>
          <Form onSubmit={this.handleSubmit}>
            <h1 className="mt-3" style={{ textAlign: "center" }}>
              Welcome to Bixly Chat
            </h1>
            <h2 className="mt-3" style={{ textAlign: "center" }}>
              Please Login
            </h2>
            <Form.Control
              className="mb-3"
              type="text"
              name="username"
              placeholder="Username"
              onChange={this.handleChange}
              value={this.state.username}
              required
            />
            <Form.Control
              className="mb-3"
              type="password"
              name="password"
              placeholder="Password"
              onChange={this.handleChange}
              value={this.state.password}
              required
            />
            <div className="d-grid gap-2">
              <Button variant="primary" type="submit" size="lg">
                Login
              </Button>
            </div>
          </Form>
          {this.state.error && (
            <Error
              error={this.state.error}
              closeError={this.handleCloseError}
            />
          )}
        </Col>
      </Container>
    );
  }
}

export default Login;
