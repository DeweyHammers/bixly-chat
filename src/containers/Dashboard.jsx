import React, { Component } from "react";
import NavBar from "../components/NavBar";
import Inbox from "../components/Inbox";
import Sent from "../components/Sent";
import Compose from "../components/Compose";
import Message from "../components/Message";
import Error from "../components/Error";
import SentMessage from "../components/SentMessage";
import {
  getMessages,
  getSentMessages,
  sendNewMessage,
  deleteMessage,
} from "../api";
import { Container } from "react-bootstrap";

class Dashboard extends Component {
  state = {
    show: "Inbox",
    messages: [],
    sent_messages: [],
    message: {},
    sent_message: {},
    error: false,
  };

  componentDidMount() {
    this.handleFetchData();
  }

  handleFetchData = () => {
    getMessages(this.props.token)
      .then((response) => this.setState({ messages: response.data }))
      .catch(() =>
        this.setState({
          error: "There was an error with getting your messages",
        })
      );
    getSentMessages(this.props.token)
      .then((response) => this.setState({ sent_messages: response.data }))
      .catch(() =>
        this.setState({
          error: "There was an error with getting your messages",
        })
      );
  };

  handleShow = (string) => {
    this.setState({ show: string });
  };

  handleSendMessage = (message) => {
    sendNewMessage(message, this.props.token)
      .then(() => {
        this.handleFetchData();
        this.setState({ show: "Sent" });
      })
      .catch(() =>
        this.setState({
          error: "There was an error with your request please try again",
        })
      );
  };

  handleSetMessage = (message) => {
    this.setState({ message, show: "Message" });
  };

  handleSetSentMessage = (sent_message) => {
    this.setState({ sent_message, show: "Sent Message" });
  };

  handleDeleteMessage = (id) => {
    deleteMessage(id, this.props.token)
      .then(() => {
        this.handleFetchData();
        this.setState({ show: "Inbox" });
      })
      .catch(() =>
        this.setState({
          error: "There was an error with your request please try again",
        })
      );
  };

  handleDeletesSentMessage = (id) => {
    deleteMessage(id, this.props.token)
      .then(() => {
        this.handleFetchData();
        this.setState({ show: "Sent" });
      })
      .catch(() =>
        this.setState({
          error: "There was an error with your request please try again",
        })
      );
  };

  handleCloseError = () => {
    this.setState({ error: false });
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
      default:
        return this.setState({
          error: "There was an error trying to load the page",
        });
    }
  };

  render() {
    return (
      <div>
        <NavBar
          handleLogout={this.props.handleLogout}
          handleShow={this.handleShow}
        />
        <Container>
          {this.state.error && (
            <Error
              error={this.state.error}
              closeError={this.handleCloseError}
            />
          )}
          {this.display()}
        </Container>
      </div>
    );
  }
}

export default Dashboard;
