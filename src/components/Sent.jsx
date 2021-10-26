import { Table, Col } from "react-bootstrap";

const Sent = ({ sent_messages, handleSetSentMessage }) => {
  const renderSentMessage = () => {
    return sent_messages.map((message) => (
      <tr key={message.id} onClick={() => handleSetSentMessage(message)}>
        <td>{message.title}</td>
        <td>{message.receiver}</td>
      </tr>
    ));
  };

  return (
    <Col md={{ span: 7, offset: 2 }}>
      <h2 className="mt-3" style={{ textAlign: "center" }}>
        Sent Messages
      </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Receiver</th>
          </tr>
        </thead>
        <tbody>{renderSentMessage()}</tbody>
      </Table>
    </Col>
  );
};

export default Sent;
