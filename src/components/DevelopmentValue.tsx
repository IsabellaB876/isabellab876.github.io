import { Image, Stack } from "react-bootstrap";
import donut from "../assets/donut.svg";
import donutMono from "../assets/donut-mono.svg";

interface ValueProps {
  mode: string;
}

function DevelopmentValue({ mode }: ValueProps) {
  return mode === "color" ? (
    <Stack
      direction="horizontal"
      gap={3}
      className="development-value value-icon"
    >
      <Image
        src={donut}
        alt="illustration of the value"
        fluid
        className="align-self-center"
      />
      <p className="white-p mb-0 align-self-center">Development</p>
    </Stack>
  ) : (
    <div className="inline-flex gap-3 mono value-icon">
      <Image
        src={donutMono}
        alt="illustration of the value"
        fluid
        className="align-self-center"
      />
      <p className="mb-0 align-self-center">Development</p>
    </div>
  );
}

export default DevelopmentValue;
