import { Image, Stack } from "react-bootstrap";
import circle from "../assets/circle.svg";
import circleMono from "../assets/circleMono.svg";

interface ValueProps {
  mode: string;
}

function IllustrationValue({ mode }: ValueProps) {
  return mode === "color" ? (
    <Stack
      direction="horizontal"
      gap={3}
      className="illustration-value value-icon"
    >
      <Image
        src={circle}
        alt="illustration of the value"
        fluid
        className="align-self-center"
      />
      <p className="white-p mb-0 align-self-center">Illustration</p>
    </Stack>
  ) : (
    <div className="inline-flex gap-3 mono value-icon">
      <Image
        src={circleMono}
        alt="illustration of the value"
        fluid
        className="align-self-center"
      />
      <p className="mb-0 align-self-center">Illustration</p>
    </div>
  );
}

export default IllustrationValue;
