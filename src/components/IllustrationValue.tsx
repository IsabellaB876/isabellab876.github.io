import { Image, Stack } from "react-bootstrap";
import star from "../assets/star.svg";

interface ValueProps {
  mode: string;
}

function IllustrationValue({ mode }: ValueProps) {
  return (
    <Stack direction="horizontal" gap={3} className="illustration-value">
      <Image
        src={star}
        alt="illustration of the value"
        fluid
        className="align-self-center"
      />
      <p className="white-p mb-0 align-self-center">Illustration</p>
    </Stack>
  );
}

export default IllustrationValue;
