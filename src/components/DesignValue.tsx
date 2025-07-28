import { Image, Stack } from "react-bootstrap";
import star from "../assets/star.svg";

interface ValueProps {
  mode: string;
}

function DesignValue({ mode }: ValueProps) {
  return (
    <div
      style={{ maxWidth: "160px" }}
      className="inline-flex gap-3 design-value"
    >
      <Image
        src={star}
        alt="illustration of the value"
        fluid
        className="align-self-center"
      />
      <p className="white-p mb-0 align-self-center">Design</p>
    </div>
  );
}

export default DesignValue;
