const Message = ({ message, handleDeletesSentMessage }) => {
  return (
    <div>
      <h1>{message.title}</h1>
      <p>Receiver: {message.receiver}</p>
      <p>{message.body}</p>
      <button onClick={() => handleDeletesSentMessage(message.id)}>
        Delete
      </button>
    </div>
  );
};

export default Message;
