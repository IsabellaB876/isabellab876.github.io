import { Container, Row, Col, Image } from "react-bootstrap";
import bannerImg from "../assets/banner-image.svg";

function Banner() {
  return (
    <>
      <Container>
        <Row className="d-flex align-items-bottom">
          <Col
            xs={12}
            md={6}
            className="d-flex flex-column justify-content-end"
          >
            <p>Hi I'm</p>
            <h1>ISABELLA BORDA</h1>
            <p>
              I’m a Computer Science & Design student at Northeastern University
              and interdisciplinary creator!
            </p>
          </Col>
          <Col xs={12} md={6}>
            <Image
              src={bannerImg}
              alt="illustration of isabella on her laptop"
              fluid
            />
          </Col>
        </Row>
      </Container>
    </>
  );
}

export default Banner;
