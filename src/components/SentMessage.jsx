import { Col, Button } from "react-bootstrap";

const Message = ({ message, handleDeletesSentMessage }) => {
  return (
    <Col style={{ textAlign: "center" }} md={{ span: 6, offset: 2 }}>
      <h1>{message.title}</h1>
      <p>Receiver: {message.receiver}</p>
      <p>{message.body}</p>
      <Button
        variant="danger"
        onClick={() => handleDeletesSentMessage(message.id)}
      >
        Delete
      </Button>
    </Col>
  );
};

export default Message;
