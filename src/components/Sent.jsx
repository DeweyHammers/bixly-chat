const Sent = ({ sent_messages, handleSetSentMessage }) => {
  const renderSentMessage = () => {
    return sent_messages.map((message) => (
      <li key={message.id} onClick={() => handleSetSentMessage(message)}>
        <h3>{message.title}</h3>
      </li>
    ));
  };

  return (
    <div>
      <h2>Sent</h2>
      <ul>{renderSentMessage()}</ul>
    </div>
  );
};

export default Sent;
