import { Stack, Container, Image, Row, Col } from "react-bootstrap";
import DesignValue from "./DesignValue";
import NavBar from "./NavBar";
import hackbeanpotThumbnail from "../assets/HBPS&O.png";
import hbp1 from "../assets/hbp/hbpInsta.png";
import hbp2 from "../assets/hbp/hbpSite.png";
import hbp3 from "../assets/hbp/hbpDesign.png";
import hbp4 from "../assets/hbp/hackbeanpotTeam.jpg";

function HackBeanpot() {
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
            <h1>
              HACK <br></br>BEANPOT
            </h1>
            <p style={{ fontStyle: "italic", color: "#8888AC" }}>
              April 2024 - Present
            </p>
            <p>
              HackBeanpot is one of Boston’s largest independently run,
              non-profit hackathons.
            </p>
            <div className="flex">
              <DesignValue mode="color" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image
              src={hackbeanpotThumbnail}
              alt="hackbeanpot instagram posts"
              fluid
            />
          </Col>
        </Row>
        <Row xs={1} sm={2} lg={2} xl={2} className="g-4">
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={hbp1}
                  alt="illustration of the value"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>DESIGN X S&O</h2>
              <p className="text-center m-0">
                Collaborated with the Social and Outreach team to design 20+
                social media posts using Figma. Created slide deck and hackathon
                signage.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={hbp2}
                  alt="illustration of the value"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>DESIGN X TECH</h2>
              <p className="text-center m-0">
                My current role on the design team. Designed the first
                HackBeanpot placeholder site, and am collaborating on the main
                site. Engage on weekly meetings receiving and giving feedback on
                our work.
              </p>
              <a
                href="https://www.hackbeanpot.com/"
                style={{ textDecoration: "underline" }}
              >
                Site
              </a>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={hbp3}
                  alt="illustration of the value"
                  fluid
                  className="align-self-center"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>DESIGN SYSTEM</h2>
              <p className="text-center m-0">
                 Built expansive design system to reflect annual theme,
                including deciding color palette, creating vectors, and
                selecting fonts.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={hbp4}
                  alt="illustration of the value"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>EVENT</h2>
              <p className="text-center m-0">
                What I love most about HackBeanpot are the people! This shines
                most in the day of event, as we host and manage activities with
                my fellow core members to contribute to a successful hackathon.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-bottom">
          <Col xs={12} md={4}>
            <h2>LEARNINGS</h2>
            <p>
              HackBeanpot has taught me how to collaborate within a team and how
              to give and receive feedback. As a part of the design process, we
              constantly critique each others work, which allows us to get new
              perspectives and grow as designers.
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
              I plan to continue as a design team member, as I become more and
              more involved with the organization.
            </p>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <a href="#/AAR">
            Next project <i className="bi bi-chevron-right"></i>
          </a>
        </div>
      </Stack>
    </Container>
  );
}

export default HackBeanpot;
