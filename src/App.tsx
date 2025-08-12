import { Stack, Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ValuesSection from "./components/ValuesSection";
import ProjectsSection from "./components/ProjectsSection";
import "./App.css";
import { motion } from "framer-motion";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Routes, Route } from "react-router";
import { HashRouter } from "react-router-dom";
import Radien from "./components/Radien";
import AAR from "./components/AAR";
import ZineWork from "./components/ZineWork";
import AboutMe from "./components/AboutMe";
import Medvault from "./components/Medvault";
import HackBeanpot from "./components/HackBeanpot";
import Site from "./components/Site";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";

function App() {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="wd-main-content-offset">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RadienTaskTracker" element={<Radien />} />
          <Route path="/ZineWork" element={<ZineWork />} />
          <Route path="/PersonalSite" element={<Site />} />
          <Route path="/AAR" element={<AAR />} />
          <Route path="/Medvault" element={<Medvault />} />
          <Route path="/HackBeanpot" element={<HackBeanpot />} />
        </Routes>
      </div>
    </HashRouter>
  );
}

function Home() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const id = location.hash.replace("#", "");
      const section = document.getElementById(id);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: "auto" });
        }, 100);
      }
    }
  }, [location]);

  return (
    <Container>
      <Stack
        className="align-items-center"
        style={{ gap: "4rem", marginBottom: "4rem" }}
      >
        <NavBar />
        <Banner />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ValuesSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <ProjectsSection />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: true }}
        >
          <AboutMe />
        </motion.div>
      </Stack>
    </Container>
  );
}

export default App;
