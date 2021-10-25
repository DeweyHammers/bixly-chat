const Message = ({ message, handleDeleteMessage }) => {
  return (
    <div>
      <h1>{message.title}</h1>
      <p>{message.body}</p>
      <button onClick={() => handleDeleteMessage(message.id)}>Delete</button>
    </div>
  );
};

export default Message;
