import { Stack, Container, Image, Row, Col } from "react-bootstrap";
import DesignValue from "./DesignValue";
import NavBar from "./NavBar";
import aarThumbnail from "../assets/AAR.png";
import wayfair1 from "../assets/aar/aarBefore.mp4";
import wayfair2 from "../assets/aar/Wayfairdesign.png";
import wayfair3 from "../assets/aar/Wayfairdev.png";
import wayfair4 from "../assets/aar/aarAfter.mp4";
import DevelopmentValue from "./DevelopmentValue";

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
              January - June 2025
            </p>
            <p>
              An internal Wayfair tool used for adding and viewing delivery
              specifications to customer’s addresses developed over the course
              of my SWE co-op.
            </p>
            <div className="flex">
              <DesignValue mode="color" />
              <DevelopmentValue mode="color" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={aarThumbnail} alt="AAR prototype screen" fluid />
          </Col>
        </Row>
        <Row className="d-flex align-items-bottom">
          <Col xs={12} md={4}>
            <h2>THE PROBLEM</h2>
            <p>
              The existing AAR site has low adoption due to unfriendly UI and
              disconnect from other delivery tools.
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
              Improve UI to match Wayfair Design System, consolidate fields,
              move to internal delivery platform.
            </p>
          </Col>
        </Row>
        <Row xs={1} sm={2} lg={2} xl={2} className="g-4">
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={wayfair1}
                  className="align-self-center ratio ratio-16x9"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>RESEARCH</h2>
              <p className="text-center m-0">
                I held multiple feedback sessions with the users, delivery
                managers, on the previous site. With their help I identified
                that the site was tedious to use because of the abundance of
                questions, manual address input, and unappealing UI.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={wayfair2}
                  alt="illustration of the value"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>DESIGN</h2>
              <p className="text-center m-0">
                Getting critique from the Wayfair Delivery Network design and
                operations team, I created a high fidelity mockup. I presented
                this to the Scheduling and Routing tech team to begin planning
                the systems design.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={wayfair3}
                  alt="illustration of the value"
                  fluid
                  className="align-self-center"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>DEVELOPMENT</h2>
              <p className="text-center m-0">
                Created a V2 backend in Java, transitioning the site to use a
                more flexible object for address data. On the front end I worked
                with React.js, creating a flexible search bar to autocomplete
                addresses and PO numbers, a drawer for easier time range input,
                and updating the UI library.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <video
                  autoPlay
                  loop
                  muted
                  playsInline
                  src={wayfair4}
                  className="align-self-center"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>FINAL</h2>
              <p className="text-center m-0">
                Once the standalone site was developed, I integrated it as a
                microfrontend on 4sight, Wayfair’s internal delivery management
                platform. I presented this to my tech team and operations,
                receiving positive feedback.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-bottom">
          <Col xs={12} md={4}>
            <h2>LEARNINGS</h2>
            <p>
              In my time at Wayfair I had to constantly learn and adapt. With
              the entire tech stack being new to me, I used strategies like
              keeping a dictionary, taking notes, and writing my own
              documentation to keep up with the fast pace.
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
              If I could continue to work on this project I would like to do
              more AB testing. The user research was extremely insightful, but I
              did not get the chance to present the final product with the
              actual users.
            </p>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <a href="#/PersonalSite">
            Next project <i className="bi bi-chevron-right"></i>
          </a>
        </div>
      </Stack>
    </Container>
  );
}

export default AAR;
