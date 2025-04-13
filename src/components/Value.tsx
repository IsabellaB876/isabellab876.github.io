import { Badge, Image, Stack } from "react-bootstrap";

interface ValueProps {
  text: string;
  pic: string;
}

function Value({ text, pic }: ValueProps) {
  return (
    <Badge bg="dark" pill>
      <Stack direction="horizontal" gap={3}>
        <Image src={pic} alt="illustration of the value" fluid />
        <p>{text}</p>
      </Stack>
    </Badge>
  );
}

export default Value;
