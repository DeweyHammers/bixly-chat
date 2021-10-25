const NavBar = ({ handleLogout, handleShow }) => {
  return (
    <div>
      <h1>
        Bixly Chat <button onClick={() => handleShow("Inbox")}>Inbox</button>{" "}
        <button onClick={() => handleShow("Sent")}>Sent</button>{" "}
        <button onClick={() => handleShow("Compose")}>Compose</button>{" "}
        <button onClick={() => handleLogout()}>Logout</button>
      </h1>
    </div>
  );
};

export default NavBar;
