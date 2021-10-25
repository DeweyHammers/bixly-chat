import React, { Component } from "react";

class Compose extends Component {
  state = {
    id: Math.random(),
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
    this.setState({ id: "", title: "", body: "", receiver: "" });
  };

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <h2>Compose</h2>
        <input
          type="text"
          name="title"
          placeholder="Title"
          value={this.state.title}
          onChange={this.handleChange}
        />
        <textarea
          type="text"
          name="body"
          placeholder="Body"
          value={this.state.body}
          onChange={this.handleChange}
          rows="4"
          cols="50"
        />
        <input
          type="text"
          name="receiver"
          placeholder="Receiver"
          value={this.state.receiver}
          onChange={this.handleChange}
        />
        <input type="submit" value="Send" />
      </form>
    );
  }
}

export default Compose;
