import { Container } from "react-bootstrap";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "../assets/logo.svg";
import { useNavigate, useLocation } from "react-router-dom";

function NavBar() {
  const navigate = useNavigate();
  const location = useLocation();

  const handleScrollToSection = (sectionId: string) => {
    if (location.pathname === "/") {
      // Already on homepage, just scroll
      const section = document.getElementById(sectionId);
      if (section) {
        section.scrollIntoView({ behavior: "smooth" });
      }
    } else {
      // Navigate to homepage with hash
      navigate(`/#${sectionId}`);
    }
  };

  return (
    <>
      <Navbar bg="transparent" data-bs-theme="light" fixed="top">
        <Container>
          <Navbar.Brand href="/">
            <img src={logo} alt="Logo" />
          </Navbar.Brand>
          <Nav className="justify-content-end gap-4">
            <a
              href="#values-section"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("values-section");
              }}
            >
              Values
            </a>
            <a
              href="#projects-section"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("projects-section");
              }}
            >
              Projects
            </a>
            <a
              href="#about-section"
              onClick={(e) => {
                e.preventDefault();
                handleScrollToSection("about-section");
              }}
            >
              About
            </a>
          </Nav>
        </Container>
      </Navbar>
    </>
  );
}

export default NavBar;
