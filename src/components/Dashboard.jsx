import React, { Component } from "react";
import NavBar from "./NavBar";
import InboxContainer from "../containers/InboxContainer";
import SentContainer from "../containers/SentContainer";
import Compose from "./Compose";
import Error from "./Error";
import { sendNewMessage } from "../api";
import { Container } from "react-bootstrap";

export default class Dashboard extends Component {
  state = {
    show: "Inbox",
    showMessage: false,
    error: false,
  };

  handleShow = (string) => {
    // Set which components to render to the screen ['Inbox', 'Sent', 'Compose']
    // Stop rendering message
    this.setState({ show: string, showMessage: false });
  };

  handleShowMessage = () => {
    // Set the message to be rendered to the screen
    this.setState({ showMessage: true });
  };

  handleSendMessage = (message) => {
    // Create a new Message
    sendNewMessage(message, this.props.token)
      .then(() => {
        this.setState({ show: "Sent" });
      })
      .catch(() =>
        this.setState({
          error: "There was an error with your request please try again",
        })
      );
  };

  handleError = (error) => {
    this.setState({ error: error });
  };

  handleCloseError = () => {
    this.setState({ error: false });
  };

  display = () => {
    // Handle which Component should be rendered to the screen
    switch (this.state.show) {
      case "Inbox":
        return (
          <InboxContainer
            token={this.props.token}
            showMessage={this.state.showMessage}
            handleShow={this.handleShow}
            handleShowMessage={this.handleShowMessage}
            handleError={this.handleError}
          />
        );
      case "Sent":
        return (
          <SentContainer
            token={this.props.token}
            showMessage={this.state.showMessage}
            handleShow={this.handleShow}
            handleShowMessage={this.handleShowMessage}
            handleError={this.handleError}
          />
        );
      case "Compose":
        return <Compose handleSendMessage={this.handleSendMessage} />;
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
