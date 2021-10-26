import React, { Component } from "react";
import Inbox from "../components/Inbox";
import Message from "../components/Message";
import { getMessages, deleteMessage } from "../api";

export default class InboxContainer extends Component {
  state = {
    messages: [],
    message: {},
  };

  componentDidMount() {
    this.getMessages();
    this.setState({ message: {} });
  }

  getMessages = () => {
    // Get the inbox messages from the api and store them in state
    getMessages(this.props.token)
      .then((response) => this.setState({ messages: response.data }))
      .catch(() =>
        this.setState({
          error: "There was an error with getting your messages",
        })
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
        this.getMessages();
        this.props.handleShow("Inbox");
      })
      .catch(() =>
        this.setState({
          error: "There was an error with your request please try again",
        })
      );
  };

  render() {
    return (
      // If there is no message to show then render the inbox, if there is one then render the message
      <div>
        {!this.props.showMessage ? (
          <Inbox
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
