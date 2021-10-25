const InboxComponent = ({ messages }) => {
  const renderMessages = () => {
    return messages.map((message) => <li>{message}</li>);
  };

  return (
    <div>
      <h2>Inbox</h2>
      <ul>{renderMessages()}</ul>
    </div>
  );
};

export default InboxComponent;
