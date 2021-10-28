import React, { Component } from "react";
import Sent from "../components/Sent";
import Message from "../components/Message";
import { getSentMessages, deleteMessage } from "../api";

export default class SentContainer extends Component {
  state = {
    messages: [],
    message: {},
  };

  componentDidMount() {
    this.handleGetMessages();
  }

  handleGetMessages = () => {
    // Get the sent messages from the api and store them in state
    getSentMessages(this.props.token)
      .then((response) => this.setState({ messages: response.data }))
      .catch(() =>
        this.props.handleError("There was an error with getting your messages")
      );
  };

  handleSetMessage = (message) => {
    // When clicking on a message, that messege will be render to the screen
    this.props.handleShowMessage();
    this.setState({ message });
  };

  handleDeleteMessage = (id) => {
    // Delete a message from the api
    deleteMessage(id, this.props.token)
      .then(() => {
        this.setState({
          messages: this.state.messages.filter((message) => message.id !== id),
        });
        this.props.handleShow("Sent");
      })
      .catch(() =>
        this.props.handleError(
          "There was an error with deleting your message please try again"
        )
      );
  };

  render() {
    return (
      // If there is no message to show then render the sent, if there is one then render the message
      <div>
        {!this.props.showMessage ? (
          <Sent
            messages={this.state.messages}
            setMessage={this.handleSetMessage}
          />
        ) : (
          <Message
            message={this.state.message}
            handleDeleteMessage={this.handleDeleteMessage}
          />
        )}
      </div>
    );
  }
}
