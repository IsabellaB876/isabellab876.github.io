import { Container, Row, Col, Image, Stack } from "react-bootstrap";
import meIrl from "../assets/meirl.svg";

function AboutMe() {
  return (
    <>
      <Container id="about-section">
        <Row className="d-flex align-items-bottom">
          <Col xs={12} md={6} className="d-none d-md-block">
            <Image
              src={meIrl}
              alt="illustration of isabella on her laptop"
              fluid
            />
          </Col>
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-end"
          >
            <h2>ABOUT ME</h2>
            <br></br>
            <p>
              Hey, I’m Isabella! I’m a third year Honors CS and Design Student
              at Northeastern University. I’m particularly interested in
              software development and interaction design. In the future I hope
              to be a software developer or UI designer. I’m motivated by my
              passion for art and creative mediums, whether that be through
              creative tech or through traditional painting. <br></br>
              Feel free to reach out, I’d love to get to meet you!
            </p>
            <br></br>
            <Stack direction="horizontal" gap={4}>
              <a
                href="https://drive.google.com/file/d/1IqojyWHleuzRO6XMD5Wjgb3H7EgXvPTZ/view?usp=sharing"
                style={{ textDecoration: "underline" }}
              >
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/isabella-borda-03537b306/"
                style={{ textDecoration: "underline" }}
              >
                Linkedin
              </a>
              <a
                href="https://github.com/IsabellaB876?tab=overview&from=2025-07-01&to=2025-07-29"
                style={{ textDecoration: "underline" }}
              >
                Github
              </a>
            </Stack>
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default AboutMe;
