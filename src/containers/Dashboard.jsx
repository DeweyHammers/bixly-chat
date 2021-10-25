import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Inbox from "../components/Inbox";
import Sent from "../components/Sent";
import Compose from "../components/Compose";
import Message from "../components/Message";
import SentMessage from "../components/SentMessage";
import {
  getMessages,
  getSentMessages,
  sendNewMessage,
  deleteMessage,
} from "../api";

class Dashboard extends Component {
  state = {
    show: "Inbox",
    messages: [],
    sent_messages: [],
    message: {},
    sent_message: {},
  };

  componentDidMount() {
    getMessages();
    getSentMessages();
  }

  handleShow = (string) => {
    this.setState({ show: string });
  };

  handleSendMessage = (message) => {
    sendNewMessage(message);
    this.setState({
      sent_messages: [...this.state.sent_messages, message],
      show: "Sent",
    });
  };

  handleSetMessage = (message) => {
    this.setState({ message, show: "Message" });
  };

  handleSetSentMessage = (sent_message) => {
    this.setState({ sent_message, show: "Sent Message" });
  };

  handleDeleteMessage = (id) => {
    deleteMessage(id);
    this.setState({
      messages: [...this.state.messages.filter((message) => message.id !== id)],
      show: "Sent",
    });
  };

  handleDeletesSentMessage = (id) => {
    deleteMessage(id);
    this.setState({
      sent_messages: [
        ...this.state.sent_messages.filter((message) => message.id !== id),
      ],
      show: "Sent",
    });
  };

  display = () => {
    switch (this.state.show) {
      case "Inbox":
        return (
          <Inbox
            messages={this.state.messages}
            handleSetMessage={this.handleSetMessage}
          />
        );
      case "Sent":
        return (
          <Sent
            sent_messages={this.state.sent_messages}
            handleSetSentMessage={this.handleSetSentMessage}
          />
        );
      case "Compose":
        return <Compose handleSendMessage={this.handleSendMessage} />;
      case "Message":
        return (
          <Message
            message={this.state.message}
            handleDeleteMessage={this.handleDeleteMessage}
          />
        );
      case "Sent Message":
        return (
          <SentMessage
            message={this.state.sent_message}
            handleDeletesSentMessage={this.handleDeletesSentMessage}
          />
        );
    }
  };

  render() {
    return (
      <div>
        <NavBar
          handleLogout={this.props.handleLogout}
          handleShow={this.handleShow}
        />
        {this.display()}
      </div>
    );
  }
}

export default Dashboard;
