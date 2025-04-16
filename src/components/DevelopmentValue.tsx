import { Image, Stack } from "react-bootstrap";
import donut from "../assets/donut.svg";

interface ValueProps {
  mode: string;
}

function DevelopmentValue({ mode }: ValueProps) {
  return (
    <Stack direction="horizontal" gap={3} className="development-value">
      <Image
        src={donut}
        alt="illustration of the value"
        fluid
        className="align-self-center"
      />
      <p className="white-p mb-0 align-self-center">Development</p>
    </Stack>
  );
}

export default DevelopmentValue;
