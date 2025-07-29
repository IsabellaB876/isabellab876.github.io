import { Container, Row, Col, Stack } from "react-bootstrap";
import Project from "./Project";
import medvaultThumbnail from "../assets/Medvault.png";
import radienThumbnail from "../assets/Radien.png";
import hbpThumbnail from "../assets/HBPS&O.png";
import wayfairThumbnail from "../assets/AAR.png";
import siteThumbnail from "../assets/Site.png";
import zineThumbnail from "../assets/Zines.png";
import DesignValue from "./DesignValue";
import IllustrationValue from "./IllustrationValue";
import DevelopmentValue from "./DevelopmentValue";

function ProjectsSection() {
  const medvault = {
    title: "MEDVAULT",
    photo: medvaultThumbnail,
    route: "Medvault",
    values: ["Design", "Development"],
  };

  const radien = {
    title: "RADIEN TASK TRACKER",
    photo: radienThumbnail,
    route: "RadienTaskTracker",
    values: ["Design"],
  };

  const hbp = {
    title: "HACKBEANPOT DESIGN TEAM",
    photo: hbpThumbnail,
    route: "HackBeanpot",
    values: ["Design", "Illustration"],
  };

  const wayfair = {
    title: "WAYFAIR ADDRESS ATTRIBUTE REPOSITORY",
    photo: wayfairThumbnail,
    route: "AAR",
    values: ["Design", "Development"],
  };

  const site = {
    title: "PERSONAL SITE",
    photo: siteThumbnail,
    route: "PersonalSite",
    values: ["Design", "Development", "Illustration"],
  };

  const zines = {
    title: "ZINE WORK",
    photo: zineThumbnail,
    route: "ZineWork",
    values: ["Illustration"],
  };

  const projects = [medvault, radien, hbp, wayfair, site, zines];

  return (
    <Container>
      <Stack gap={4}>
        <h2>PROJECTS</h2>
        <div className="d-flex align-items-center gap-4 flex-wrap">
          <div>
            <p>Filter</p>
          </div>
          <div>
            <DesignValue mode="mono" />
          </div>
          <div>
            <DevelopmentValue mode="mono" />
          </div>
          <div>
            <IllustrationValue mode="mono" />
          </div>
        </div>

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
