import { Container, Row, Col, Stack } from "react-bootstrap";
import { useState } from "react";
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
import { motion } from "framer-motion";

function ProjectsSection() {
  const [designStatus, setDesignStatus] = useState("mono");
  const [devStatus, setDevStatus] = useState("mono");
  const [illuStatus, setIlluStatus] = useState("mono");
  const [values, setValues] = useState<string[]>([]);

  const handleDesignToggle = () => {
    if (designStatus === "color") {
      setDesignStatus("mono");
    } else {
      setDesignStatus("color");
    }

    setValues((prev) =>
      prev.includes("Design")
        ? prev.filter((v) => v !== "Design")
        : [...prev, "Design"]
    );
  };

  const handleDevToggle = () => {
    if (devStatus === "color") {
      setDevStatus("mono");
    } else {
      setDevStatus("color");
    }

    setValues((prev) =>
      prev.includes("Development")
        ? prev.filter((v) => v !== "Development")
        : [...prev, "Development"]
    );
  };

  const handleIlluToggle = () => {
    if (illuStatus === "color") {
      setIlluStatus("mono");
    } else {
      setIlluStatus("color");
    }

    setValues((prev) =>
      prev.includes("Illustration")
        ? prev.filter((v) => v !== "Illustration")
        : [...prev, "Illustration"]
    );
  };

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
    <Container id="projects-section">
      <Stack gap={4}>
        <h2>PROJECTS</h2>
        <div className="d-flex align-items-center gap-4 flex-wrap">
          <div>
            <p>Filter</p>
          </div>
          <div onClick={handleDesignToggle} style={{ cursor: "pointer" }}>
            <DesignValue mode={designStatus} />
          </div>
          <div onClick={handleDevToggle} style={{ cursor: "pointer" }}>
            <DevelopmentValue mode={devStatus} />
          </div>
          <div onClick={handleIlluToggle} style={{ cursor: "pointer" }}>
            <IllustrationValue mode={illuStatus} />
          </div>
        </div>

        <Row xs={1} sm={2} lg={2} xl={2} className="g-4">
          {projects
            .filter(
              (project) =>
                values.length === 0 ||
                project.values.some((v) => values.includes(v))
            )
            .map((project, index) => (
              <motion.div
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, ease: "easeOut" }}
                viewport={{ once: true }}
              >
                <Col key={index} style={{ cursor: "pointer" }}>
                  <Project {...project} />
                </Col>
              </motion.div>
            ))}
        </Row>
      </Stack>
    </Container>
  );
}

export default ProjectsSection;
