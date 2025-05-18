import { Image, Stack } from "react-bootstrap";
import donut from "../assets/donut-colored.svg";
import circle from "../assets/circle-colored.svg";
import star from "../assets/star-colored.svg";
import { ProjectProps } from "../interfaces/Project";

function Project({ title, photo, route, values }: ProjectProps) {
  return (
    <Stack className="project-card">
      <div className="image-wrapper">
        <Image
          src={photo}
          alt="project image"
          fluid
          className="project-image"
        />
        <div className="icon-overlay">
          {values.map((item, index) => {
            if (item.toLowerCase().includes("design")) {
              return <Image key={index} src={star} className="overlay-icon" />;
            } else if (item.toLowerCase().includes("development")) {
              return <Image key={index} src={donut} className="overlay-icon" />;
            } else if (item.toLowerCase().includes("illustration")) {
              return (
                <Image key={index} src={circle} className="overlay-icon" />
              );
            } else {
              return null;
            }
          })}
        </div>
      </div>
      <h2 className="project-title">{title}</h2>
    </Stack>
  );
}

export default Project;
