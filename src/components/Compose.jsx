import React, { Component } from "react";
import { Form, Button, Col } from "react-bootstrap";

class Compose extends Component {
  state = {
    title: "",
    body: "",
    receiver: "",
  };

  handleChange = (event) => {
    this.setState({ [event.target.name]: event.target.value });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSendMessage(this.state);
    this.setState({ title: "", body: "", receiver: "" });
  };

  render() {
    return (
      <Col md={{ span: 8, offset: 2 }}>
        <Form onSubmit={this.handleSubmit}>
          <h2 className="mt-3" style={{ textAlign: "center" }}>
            Compose new Message
          </h2>
          <Form.Control
            className="mb-3"
            type="text"
            name="title"
            placeholder="Title"
            value={this.state.title}
            onChange={this.handleChange}
            required
          />
          <Form.Control
            className="mb-3"
            as="textarea"
            rows={3}
            type="text"
            name="body"
            placeholder="Body"
            value={this.state.body}
            onChange={this.handleChange}
            required
          />
          <Form.Control
            className="mb-3"
            type="text"
            name="receiver"
            placeholder="Receiver"
            value={this.state.receiver}
            onChange={this.handleChange}
            required
          />
          <div className="d-grid gap-2">
            <Button variant="primary" type="submit" size="lg">
              Send
            </Button>
          </div>
        </Form>
      </Col>
    );
  }
}

export default Compose;
