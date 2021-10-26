import { Alert } from "react-bootstrap";

const Error = ({ error, closeError }) => {
  return (
    <Alert
      className="mt-3"
      variant="danger"
      onClose={() => closeError()}
      dismissible
    >
      <Alert.Heading>Oh snap! You got an error!</Alert.Heading>
      <p>{error}</p>
    </Alert>
  );
};

export default Error;
