import { Stack, Container, Image, Row, Col } from "react-bootstrap";
import DesignValue from "./DesignValue";
import NavBar from "./NavBar";
import aarThumbnail from "../assets/AAR.png";
import radien1 from "../assets/radien1.png";
import radien2 from "../assets/radien2.png";
import radien3 from "../assets/radien3.png";

function AAR() {
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
            <h1>ADDRESS ATTRIBUTE REPOSITORY</h1>
            <p style={{ fontStyle: "italic", color: "#8888AC" }}>
              June - August 2024
            </p>
            <p>
              A project manager emphasizing transparency and efficiency built
              specifically for front-end developers. Developed for business,
              Radien in the UX Design class
            </p>
            <DesignValue mode="color" />
          </Col>
          <Col xs={12} md={6}>
            <Image src={aarThumbnail} alt="AAR prototype screen" fluid />
          </Col>
        </Row>
        <Row className="d-flex align-items-bottom">
          <Col xs={12} md={4}>
            <h2>THE PROBLEM</h2>
            <p>
              Front-end software development lacks clear communication, causing
              engineers and managers to be less efficient.
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
              An advanced ticketing platform enhancing transparency,
              communication, and efficiency
            </p>
          </Col>
        </Row>
        <Row xs={1} sm={2} lg={2} xl={2} className="g-4">
          <Col>
            <div className="align-items-center text-center w-auto">
              <Image
                src={radien1}
                alt="illustration of the value"
                fluid
                className="align-self-center"
              />
              <h2>RESEARCH</h2>
              <p className="text-center m-0">
                With a team of 3 other students, we interviewed 4 users of
                Radien’s existing product. We determined that many front-end
                developers and project managers struggle with communicating with
                different teams.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <Image
                src={radien2}
                alt="illustration of the value"
                fluid
                className="align-self-center"
              />
              <h2>IDEATION</h2>
              <p className="text-center m-0">
                We came up with 20 ideas for potential solutions, falling into
                the identified categories for improvement, communication,
                efficiency, and organization. We landed on an improved ticket
                tracking system.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <Image
                src={radien3}
                alt="illustration of the value"
                fluid
                className="align-self-center"
              />
              <h2>PROTOTYPE</h2>
              <p className="text-center m-0">
                Created a low fidelity prototype focusing on including as much
                relevant ticket information as possible while still following
                Radien’s minimalist existing design system. Developed user flow
                for a more all encompassing ticket creating experience.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <Image
                src={radien3}
                alt="illustration of the value"
                fluid
                className="align-self-center"
              />
              <h2>FINAL</h2>
              <p className="text-center m-0">
                Developed an interactive and high fidelity prototype on
                prototype. Focuses on the user flows of viewing your ticket,
                viewing other team’s tickets, creating tickets, and updating
                ticket progress.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-bottom">
          <Col xs={12} md={4}>
            <h2>LEARNINGS</h2>
            <p>
              Working with an established business was allowed us to fully
              immerse ourselves in user research. Our interviews defined our
              product, which taught me the importance of understanding your
              users well.
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
              Given the chance to develop this further I would like to refine
              the UI, particularly the home page’s drawers. I would also like to
              conduct UAT, so that I could see the impact of the product.
            </p>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <a href="#/ZineWork">
            Next project <i className="bi bi-chevron-right"></i>
          </a>
        </div>
      </Stack>
    </Container>
  );
}

export default AAR;
