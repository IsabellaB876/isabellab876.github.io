import { Container, Row, Col, Image } from "react-bootstrap";
import Value from "./Value";
import starIcon from "../assets/star.svg";

function ValuesSection() {
  return (
    <Container>
      <Container>
        <Value text="Design" pic={starIcon} />
      </Container>
    </Container>
  );
}

export default ValuesSection;
