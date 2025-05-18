import { Container, Stack, Image, Row } from "react-bootstrap";
import design from "../assets/design-graphic.svg";
import dev from "../assets/dev-graphic.svg";
import illustration from "../assets/illustration-graphic.svg";
import DesignValue from "./DesignValue";
import DevelopmentValue from "./DevelopmentValue";
import IllustrationValue from "./IllustrationValue";

function ValuesSection() {
  return (
    <Container>
      <Stack gap={4} id="values-section">
        <h2>MY VALUES</h2>
        <Row xs={1} sm={1} lg={3} xl={3} className="g-4">
          <div
            className="align-items-center text-center w-auto"
            style={{ maxWidth: "370px" }}
          >
            <DesignValue mode="color" />
            <Image
              src={design}
              alt="illustration of the value"
              fluid
              className="align-self-center"
              style={{ width: "300px", height: "220px", objectFit: "fill" }}
            />
            <h2>INNOVATION</h2>
            <p className="text-center m-0">
              Pushing boundaries with thoughtful, user-first designs that
              balance beauty and function.
            </p>
          </div>
          <div
            className="align-items-center text-center w-auto"
            style={{ maxWidth: "370px" }}
          >
            <DevelopmentValue mode="color" />
            <Image
              src={dev}
              alt="illustration of the value"
              fluid
              className="align-self-center"
              style={{ width: "300px", height: "220px", objectFit: "fill" }}
            />
            <h2 className="text-nowrap text-center">PROBLEM SOLVING</h2>
            <p className="text-center m-0">
              Persevering through challenges to turn complex problems into
              clean, meaningful applications
            </p>
          </div>
          <div
            className="align-items-center text-center w-auto"
            style={{ maxWidth: "370px" }}
          >
            <IllustrationValue mode="color" />
            <Image
              src={illustration}
              alt="illustration of the value"
              fluid
              className="align-self-center"
              style={{ width: "300px", height: "220px", objectFit: "fill" }}
            />
            <h2>CREATIVITY</h2>
            <p className="text-center m-0">
              Embracing fun and storytelling to bring ideas to life through
              bold, expressive visuals.
            </p>
          </div>
        </Row>
      </Stack>
    </Container>
  );
}

export default ValuesSection;
