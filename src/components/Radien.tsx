import { Stack, Container, Image, Row, Col } from "react-bootstrap";
import DesignValue from "./DesignValue";
import NavBar from "./NavBar";
import medvaultImage from "../assets/medvault-home.svg";
import radienThumbnail from "../assets/Radien.png";

function Radien() {
  return (
    <Container>
      <Stack gap={5} style={{ paddingTop: "30px" }}>
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
            <h1>RADIEN TASK TRACKER</h1>
            <p>June - August 2024</p>
            <p>
              A project manager emphasizing transparency and efficiency built
              specifically for front-end developers.
            </p>
            <DesignValue mode="color" />
          </Col>
          <Col xs={12} md={6}>
            <Image
              src={radienThumbnail}
              alt="Radien Task Tracker protoype screens"
              fluid
              className="project-image"
            />
          </Col>
        </Row>
        <Row className="d-flex align-items-bottom">
          <Col xs={12} md={4}>
            <h2>THE PROBLEM</h2>
            <p>lorem ipsum dolor</p>
          </Col>
          <Col>
            <i
              className="d-flex flex-column justify-content-center align-items-center bi bi-lightbulb"
              style={{ fontSize: "4rem", color: "#8888AC" }}
            ></i>
          </Col>
          <Col className="justify-content-center">
            <h2>THE SOLUTION</h2>
            <p>lorem ipsum dolor</p>
          </Col>
        </Row>
        <Row xs={1} sm={2} lg={2} xl={2} className="g-4">
          <Col>
            <div className="align-items-center text-center w-auto">
              <Image
                src={medvaultImage}
                alt="illustration of the value"
                fluid
                className="align-self-center"
              />
              <h2>RESEARCH</h2>
              <p className="text-center m-0">
                Pushing boundaries with thoughtful, user-first designs that
                balance beauty and function.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <Image
                src={medvaultImage}
                alt="illustration of the value"
                fluid
                className="align-self-center"
              />
              <h2>IDEATION</h2>
              <p className="text-center m-0">
                Pushing boundaries with thoughtful, user-first designs that
                balance beauty and function.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <Image
                src={medvaultImage}
                alt="illustration of the value"
                fluid
                className="align-self-center"
              />
              <h2>PROTOTYPE</h2>
              <p className="text-center m-0">
                Pushing boundaries with thoughtful, user-first designs that
                balance beauty and function.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <Image
                src={medvaultImage}
                alt="illustration of the value"
                fluid
                className="align-self-center"
              />
              <h2>FINAL</h2>
              <p className="text-center m-0">
                Pushing boundaries with thoughtful, user-first designs that
                balance beauty and function.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-bottom">
          <Col xs={12} md={4}>
            <h2>WHAT I LEARNED</h2>
            <p>lorem ipsum dolor</p>
          </Col>
          <Col>
            <i
              className="d-flex flex-column justify-content-center align-items-center bi bi-chat-dots"
              style={{ fontSize: "4rem", color: "#8888AC" }}
            ></i>
          </Col>
          <Col className="justify-content-center">
            <h2>WITH MORE TIME</h2>
            <p>lorem ipsum dolor</p>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <a href="/ZineWork">
            Next project <i className="bi bi-chevron-right"></i>
          </a>
        </div>
      </Stack>
    </Container>
  );
}

export default Radien;
