import { Navbar, Nav, Container } from "react-bootstrap";

const NavBar = ({ handleLogout, handleShow }) => {
  return (
    <Navbar bg="dark" variant="dark">
      <Container>
        <Navbar.Brand>Bixly Chat</Navbar.Brand>
        <Nav className="me-auto">
          <Nav.Link onClick={() => handleShow("Inbox")}>Inbox</Nav.Link>
          <Nav.Link onClick={() => handleShow("Sent")}>Sent</Nav.Link>
          <Nav.Link onClick={() => handleShow("Compose")}>Compose</Nav.Link>
          <Nav.Link onClick={() => handleLogout()}>Logout</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
};

export default NavBar;
