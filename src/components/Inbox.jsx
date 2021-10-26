import { Table, Col } from "react-bootstrap";

const InboxComponent = ({ messages, handleSetMessage }) => {
  const renderMessages = () => {
    return messages.map((message) => (
      <tr key={message.id} onClick={() => handleSetMessage(message)}>
        <td>{message.title}</td>
        <td>{message.sender}</td>
      </tr>
    ));
  };

  return (
    <Col md={{ span: 7, offset: 2 }}>
      <h2 className="mt-3" style={{ textAlign: "center" }}>
        Inbox
      </h2>
      <Table striped bordered hover variant="dark">
        <thead>
          <tr>
            <th>Title</th>
            <th>Sender</th>
          </tr>
        </thead>
        <tbody>{renderMessages()}</tbody>
      </Table>
    </Col>
  );
};

export default InboxComponent;
