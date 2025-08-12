import { Image, Stack } from "react-bootstrap";
import star from "../assets/star.svg";
import starMono from "../assets/star-mono.svg";

interface ValueProps {
  mode: string;
}

function DesignValue({ mode }: ValueProps) {
  return mode === "color" ? (
    <div
      style={{ maxWidth: "160px" }}
      className="inline-flex gap-3 design-value value-icon"
    >
      <Image
        src={star}
        alt="illustration of the value"
        fluid
        className="align-self-center"
      />
      <p className="white-p mb-0 align-self-center">Design</p>
    </div>
  ) : (
    <div className="inline-flex gap-3 mono value-icon">
      <Image
        src={starMono}
        alt="illustration of the value"
        fluid
        className="align-self-center"
      />
      <p className="mb-0 align-self-center">Design</p>
    </div>
  );
}

export default DesignValue;
