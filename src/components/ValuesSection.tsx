import { Container, Stack, Image } from "react-bootstrap";
import design from "../assets/design-graphic.svg";
import dev from "../assets/dev-graphic.svg";
import illustration from "../assets/illustration-graphic.svg";
import DesignValue from "./DesignValue";
import DevelopmentValue from "./DevelopmentValue";
import IllustrationValue from "./IllustrationValue";

function ValuesSection() {
  return (
    <Stack gap={4}>
      <h2>MY VALUES</h2>
      <Stack gap={5} direction="horizontal">
        <Stack gap={3} className="align-items-center">
          <DesignValue mode="color" />
          <Image
            src={design}
            alt="illustration of the value"
            fluid
            className="align-self-center"
            style={{ width: "300px", height: "220px", objectFit: "fill" }}
          />
          <h2>INNOVATION</h2>
        </Stack>
        <Stack gap={3} className="align-items-center">
          <DevelopmentValue mode="color" />
          <Image
            src={dev}
            alt="illustration of the value"
            fluid
            className="align-self-center"
            style={{ width: "300px", height: "220px", objectFit: "fill" }}
          />
          <h2>PROBLEM SOLVING</h2>
        </Stack>
        <Stack gap={3} className="align-items-center">
          <IllustrationValue mode="color" />
          <Image
            src={illustration}
            alt="illustration of the value"
            fluid
            className="align-self-center"
            style={{ width: "300px", height: "220px", objectFit: "fill" }}
          />
          <h2>CREATIVITY</h2>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default ValuesSection;
