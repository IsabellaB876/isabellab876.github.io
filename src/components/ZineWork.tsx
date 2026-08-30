import { Stack, Container, Image, Row, Col } from "react-bootstrap";
import IllustrationValue from "./IllustrationValue";
import NavBar from "./NavBar";
import aarThumbnail from "../assets/Zines.png";
import zines1 from "../assets/zines/IMG_0706.png";
import zines2 from "../assets/zines/anarchy.png";
import zines3 from "../assets/zines/HunterxStellar.png";
import zines4 from "../assets/zines/p4d.png";
import zines5 from "../assets/zines/Screenshot 2026-08-30 170454.png";

function ZineWork() {
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
            <h1>ZINE WORK</h1>
            <p style={{ fontStyle: "italic", color: "#8888AC" }}>
              Multiple Dates
            </p>
            <p>
              Collaborative passion projects, bringing communities together
              through digital art and storytelling.
            </p>
            <div className="flex">
              <IllustrationValue mode="color" />
            </div>
          </Col>
          <Col xs={12} md={6}>
            <Image src={aarThumbnail} alt="AAR prototype screen" fluid />
          </Col>
        </Row>
        <Row className="g-4">
          <Col xs={12}>
            <Row className="project-detail-item g-3 align-items-center">
              <Col xs={12} md={5} className="project-detail-media">
                <div className="ratio ratio-16x9 w-100">
                  <Image
                    src={zines5}
                    alt="Snowed In & Sunny Days zines"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={7} className="project-detail-copy">
                <h2>SNOWED IN & SUNNY DAYS (2026)</h2>
                <p className="m-0">
                  I independently managed 25 artists to create and publish two
                  collaborative art booklets, Snowed In and Sunny Days, in under
                  3 months, overseeing recruitment, communication, deadlines,
                  formatting, printing, and distributing 100+ copies to
                  Northeastern Digital Illustration Association club members.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <Row className="project-detail-item g-3 align-items-center">
              <Col xs={12} md={5} className="project-detail-media">
                <div className="ratio ratio-16x9 w-100">
                  <Image
                    src={zines1}
                    alt="illustration of the value"
                    className="w-100 h-100"
                    style={{ objectFit: "cover", objectPosition: "center 30%" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={7} className="project-detail-copy">
                <h2>WHAT'S YOUR STYLE? (2025)</h2>
                <p className="m-0">
                  “What’s Your Style?” is a multimedia digital and physical zine
                  celebrating Splatoon promotional characters. I am currently
                  contributing as a page artist and the zine is scheduled to
                  release in Fall 2025.
                </p>
                <a
                  href="https://whatsyourstyle.carrd.co/"
                  style={{ textDecoration: "underline" }}
                >
                  Site
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <Row className="project-detail-item g-3 align-items-center">
              <Col xs={12} md={5} className="project-detail-media">
                <div className="ratio ratio-16x9 w-100">
                  <Image
                    src={zines2}
                    alt="illustration of the value"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={7} className="project-detail-copy">
                <h2>ANARCHY ZINE (2024)</h2>
                <p className="m-0">
                  “Anarchy Zine” focuses on depicting the idol group of Splatoon
                  3, Deep Cut. This was a digital, free zine I contributed to as
                  a spread artist.
                </p>
                <a
                  href="https://drive.google.com/file/d/1LXciBJLIwuhrRBKc8LTunKRjJDlrlp1R/view"
                  style={{ textDecoration: "underline" }}
                >
                  Zine
                </a>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <Row className="project-detail-item g-3 align-items-center">
              <Col xs={12} md={5} className="project-detail-media">
                <div className="ratio ratio-16x9 w-100">
                  <Image
                    src={zines3}
                    alt="illustration of the value"
                    fluid
                    className="align-self-center"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={7} className="project-detail-copy">
                <h2>HUNTER X STELLAR (2023)</h2>
                <p className="m-0">
                  Contributed an original illustration to Hunter x Stellar, an
                  unreleased space themed Hunter x Hunter fan zine. Completed my
                  piece in collaboration with fellow artists and engaged with
                  the fandom community.
                </p>
              </Col>
            </Row>
          </Col>
          <Col xs={12}>
            <Row className="project-detail-item g-3 align-items-center">
              <Col xs={12} md={5} className="project-detail-media">
                <div className="ratio ratio-16x9 w-100">
                  <Image
                    src={zines4}
                    alt="illustration of the value"
                    className="w-100 h-100"
                    style={{ objectFit: "cover" }}
                  />
                </div>
              </Col>
              <Col xs={12} md={7} className="project-detail-copy">
                <h2>PANCAKES 4 DINNER (2021)</h2>
                <p className="m-0">
                  “Pancakes 4 Dinner” is a digital non-profit zine exploring
                  everyday moments within the story of Hunter x Hunter. As my
                  first exposure to collaborative art, I created two pieces, one
                  page and one spread. The zine raised $350+ for three
                  charities.
                </p>
              </Col>
            </Row>
          </Col>
        </Row>
        <Row className="d-flex align-items-bottom">
          <Col xs={12} md={4}>
            <h2>LEARNINGS</h2>
            <p>
              Contributing to and managing collaborative zine projects has
              taught me the importance of community, leadership, and
              coordination at scale. From recruitment to distribution, I've
              learned how to motivate diverse teams and execute ambitious
              timelines. These skills have become essential for my work and
              growth.
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
              I am planning to continue hosting collaborative zines and explore
              new themes and formats. I would also like to create digital tools
              for discovering, organizing, and collaborating on zine projects to
              make the process more accessible for others.
            </p>
          </Col>
        </Row>
        <div className="d-flex justify-content-end">
          <a href="#/Medvault">
            Next project <i className="bi bi-chevron-right"></i>
          </a>
        </div>
      </Stack>
    </Container>
  );
}

export default ZineWork;
