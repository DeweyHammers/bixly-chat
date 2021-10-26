import { Col, Button } from "react-bootstrap";

const Message = ({ message, handleDeleteMessage }) => {
  return (
    <Col style={{ textAlign: "center" }} md={{ span: 6, offset: 2 }}>
      <h1>{message.title}</h1>
      <p>Sender: {message.sender}</p>
      <p>{message.body}</p>
      <Button variant="danger" onClick={() => handleDeleteMessage(message.id)}>
        Delete
      </Button>
    </Col>
  );
};

export default Message;
