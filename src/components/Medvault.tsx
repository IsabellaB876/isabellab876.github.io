import { Stack, Container, Image, Row, Col } from "react-bootstrap";
import DesignValue from "./DesignValue";
import DevelopmentValue from "./DevelopmentValue";
import NavBar from "./NavBar";
import medvaultThumbnail from "../assets/Medvault.png";
import medvault1 from "../assets/medvault/medvaultBrainstorm.png";
import medvault2 from "../assets/medvault/mevaultDesign.png";
import medvault3 from "../assets/medvault/medvaultDev.png";
import medvault4 from "../assets/comingSoon.png";

function Medvault() {
  return (
    <Container>
      <Stack style={{ gap: "4rem", marginBottom: "4rem" }}>
        <NavBar />
        <a href="/">
          {" "}
          <i className="bi bi-chevron-left"></i> Back
        </a>
        <Row className="d-flex align-items-bottom">
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-end"
          >
            <h1>MEDVAULT</h1>
            <p style={{ fontStyle: "italic", color: "#8888AC" }}>
              April - July 2025
            </p>
            <p>
              A secure and user friendly medical file requesting platform for
              both patients and doctors.
            </p>
            <div className="flex">
              <DesignValue mode="color" />
              <DevelopmentValue mode="color" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={medvaultThumbnail} alt="AAR prototype screen" fluid />
          </Col>
        </Row>
        <Row className="d-flex align-items-bottom">
          <Col xs={12} md={4}>
            <h2>THE PROBLEM</h2>
            <p>
              The lengthy and confusing process of requesting medical files.
              Current sites are outdated, and often visually unappealing.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <i
              className="d-flex flex-column justify-content-center align-items-center bi bi-lightbulb"
              style={{ fontSize: "4rem", color: "#8888AC" }}
            ></i>
          </Col>
          <Col xs={12} md={4} className="justify-content-center">
            <h2>THE SOLUTION</h2>
            <p>
              Medical file requesting platform that focuses on clear design and
              security.
            </p>
          </Col>
        </Row>
        <Row xs={1} sm={2} lg={2} xl={2} className="g-4">
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={medvault1}
                  alt="illustration of the value"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>RESEARCH</h2>
              <p className="text-center m-0">
                At the small, 8 hour hackathon, VitalHacks, I teamed up with a
                group of 3 other hackers to create a digital tool to help the
                medical space. We landed on Medvault, a secure file requesting
                platform.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={medvault2}
                  alt="illustration of the value"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>DESIGN</h2>
              <p className="text-center m-0">
                I created the design for Medvault using Figma, focusing on the
                patient user flow of requesting a document, as well as defining
                our design system. We decided to continue to develop this
                project past the duration of the hackathon.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={medvault3}
                  alt="illustration of the value"
                  fluid
                  className="align-self-center"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>DEVELOPMENT</h2>
              <p className="text-center m-0">
                As group leader, I managed our roles and tasks, as we split our
                focuses to front or backend dev. I created all frontend services
                and developed the login, signup, and profile pages.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={medvault4}
                  alt="illustration of the value"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>FINAL</h2>
              <p className="text-center m-0">
                Currently, we are on the final phase of development, cleaning up
                styling and optimizing endpoints. Check back later to see the
                final video demo, or see our progress on{" "}
                <a
                  href="https://github.com/IsabellaB876/vital-hacks"
                  style={{ textDecoration: "underline" }}
                >
                  GitHub
                </a>
              </p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-bottom">
          <Col xs={12} md={4}>
            <h2>LEARNINGS</h2>
            <p>
              This project applied the technical concepts I learned during my
              time at Wayfair, but required me to be diligent and self
              motivated. As group leader, I learned how to manage a team and
              stay organized.
            </p>
          </Col>
          <Col xs={12} md={4}>
            <i
              className="d-flex flex-column justify-content-center align-items-center bi bi-chat-dots"
              style={{ fontSize: "4rem", color: "#8888AC" }}
            ></i>
          </Col>
          <Col xs={12} md={4} className="justify-content-center">
            <h2>NEXT STEPS</h2>
            <p>
              In the future we would like to enhance the security of the site so
              it could be fully deployed. We would also like to add
              functionality for guardians of patients.
            </p>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <a href="#/RadienTaskTracker">
            Next project <i className="bi bi-chevron-right"></i>
          </a>
        </div>
      </Stack>
    </Container>
  );
}

export default Medvault;
