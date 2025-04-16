import { Container, Button, Image } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.svg";
import { useState } from "react";

function NavBar() {
  const [display, setDisplay] = useState<boolean>(false);

  const toggleDisplay = () => setDisplay(!display);
  return (
    <>
      <Navbar bg="transparent" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Nav className="justify-content-end">
            <Nav.Link href="#home">Values</Nav.Link>
            <Nav.Link href="#home">Projects</Nav.Link>
            <Nav.Link href="#features">Tools</Nav.Link>
            <Nav.Link href="#pricing">Contact</Nav.Link>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
