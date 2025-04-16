import { Image, Stack } from "react-bootstrap";
import star from "../assets/star.svg";

interface ValueProps {
  mode: string;
}

function DesignValue({ mode }: ValueProps) {
  return (
    <Stack direction="horizontal" gap={3} className="design-value">
      <Image
        src={star}
        alt="illustration of the value"
        fluid
        className="align-self-center"
      />
      <p className="white-p mb-0 align-self-center">Design</p>
    </Stack>
  );
}

export default DesignValue;
