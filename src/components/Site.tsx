import { Stack, Container, Image, Row, Col } from "react-bootstrap";
import DesignValue from "./DesignValue";
import DevelopmentValue from "./DevelopmentValue";
import IllustrationValue from "./IllustrationValue";
import NavBar from "./NavBar";
import siteThumbnail from "../assets/Site.png";
import site1 from "../assets/site/website0.png";
import site2 from "../assets/site/Website_Rough.png";
import site3 from "../assets/site/website2.png";
import site4 from "../assets/site/website3.png";

function Site() {
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
            <h1>PERSONAL SITE</h1>
            <p style={{ fontStyle: "italic", color: "#8888AC" }}>
              Multiple Dates
            </p>
            <p>
              A reflection on my growth in web development, design, and self
              expression.
            </p>
            <div className="flex">
              <DesignValue mode="color" />
              <DevelopmentValue mode="color" />
              <IllustrationValue mode="color" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image
              src={siteThumbnail}
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
                  src={site1}
                  alt="illustration of the value"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>MY START (2022)</h2>
              <p className="text-center m-0">
                My first exposure to web development was through Girl Who Code’s
                Summer Immersion Program. An assignment during this course was
                to create a personal site using HTML and CSS.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={site2}
                  alt="illustration of the value"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>VERSION 1 (2023)</h2>
              <p className="text-center m-0">
                Created for college admissions, I applied my learning from GWC
                SIP to this site hosted on Replit. I tried to focus more on
                design and showcase my impact within my community.
                <br></br>
                (The actual site was unfortunately removed from Replit, shown is
                an original thumbnail sketch)
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={site3}
                  alt="illustration of the value"
                  fluid
                  className="align-self-center"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>VERSION 2 (2024)</h2>
              <p className="text-center m-0">
                After I finished my first year of college, my personal website
                did not reflect my improved design and technical skills, as well
                as my personal style. I chose a color palette reflecting my love
                for color theory as well as my Colombian heritage, and I
                included illustrations to show my creative side. I created this
                site using HTML, CSS, and Javascript and hosted it using GitHub
                pages.
              </p>
            </div>
          </Col>
          <Col>
            <div className="align-items-center text-center w-auto">
              <div className="ratio ratio-16x9">
                <Image
                  src={site4}
                  alt="illustration of the value"
                  className="w-100 h-100"
                  style={{ objectFit: "cover" }}
                />
              </div>
              <h2>VERSION 3: CURRENT (2025)</h2>
              <p className="text-center m-0">
                After my first internship, I had again learned so much that my
                site felt outdated. In this iteration I chose to continue with
                the same basic color palette and fonts as Version 2, but
                enhanced the layout to be more professional and informative and
                focused on my interdisciplinary studies. This website was
                created using React.js and hosted on GitHub pages.
              </p>
            </div>
          </Col>
        </Row>
        <Row className="d-flex align-items-bottom">
          <Col xs={12} md={4}>
            <h2>LEARNINGS</h2>
            <p>
              I view my personal site as an extension of me. It reflects every
              aspect of me, and thus has reflected my growth over the years. It
              keeps me motivated to constantly learn and improve.
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
              As I evolve, so will my site! Soon, I plan to add a dedicated
              skills section and integrate email functionality for direct
              contact.
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

export default Site;
