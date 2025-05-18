import { Container, Row, Col, Stack } from "react-bootstrap";
import Project from "./Project";
import medvaultImage from "../assets/medvault-home.svg";

function ProjectsSection() {
  const medvault = {
    title: "MEDVAULT",
    photo: medvaultImage,
    route: "",
    values: ["Design", "Development"],
  };

  const radien = {
    title: "RADIEN TASK TRACKER",
    photo: medvaultImage,
    route: "",
    values: ["Design"],
  };

  const hbp = {
    title: "HACKBEANPOT DESIGN TEAM",
    photo: medvaultImage,
    route: "",
    values: ["Design", "Illustration"],
  };

  const wayfair = {
    title: "WAYFAIR ADDRESS ATTRIBUTE REPOSITORY",
    photo: medvaultImage,
    route: "",
    values: ["Design", "Development"],
  };

  const site = {
    title: "PERSONAL SITE",
    photo: medvaultImage,
    route: "",
    values: ["Design", "Development", "Illustration"],
  };

  const projects = [medvault, radien, hbp, wayfair, site];

  return (
    <Container>
      <Stack gap={4}>
        <h2>PROJECTS</h2>
        <Row xs={1} sm={2} lg={2} xl={2} className="g-4">
          {projects.map((project, index) => (
            <Col key={index}>
              <Project {...project} />
            </Col>
          ))}
        </Row>
      </Stack>
    </Container>
  );
}

export default ProjectsSection;
