import axios from "axios";

const URL = "https://messaging-test.bixly.com";

export const login = (data) => {
  // Send post to api-token-auth/
  console.log("Login", data);
};

export const checkIfLoggedin = () => {
  // Send post to api-token-auth/
  console.log("Check for login");
};

export const getMessages = () => {
  // Send get to messages
  console.log("Get messages");
};

export const getSentMessages = () => {
  // Send get to messages/sent
  console.log("Get Sent Messages");
};

export const sendNewMessage = (data) => {
  // Send post to messages
  console.log("Send new message", data);
};

export const deleteMessage = (id) => {
  // Send delete to messages/1/
  console.log("Delete message", id);
};
