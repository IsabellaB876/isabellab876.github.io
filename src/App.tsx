import { Stack } from "react-bootstrap";
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
import AboutMe from "./components/AboutMe";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

function App() {
  return (
    <HashRouter>
      <div className="wd-main-content-offset">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/RadienTaskTracker" element={<Radien />} />
          <Route path="/ZineWork" element={<Radien />} />
          <Route path="/PersonalSite" element={<Radien />} />
          <Route path="/AAR" element={<Radien />} />
          <Route path="/Medvault" element={<Radien />} />
          <Route path="/HackBeanpot" element={<Radien />} />
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
        // Slight timeout ensures the section is mounted
        setTimeout(() => {
          section.scrollIntoView({ behavior: "smooth" });
        }, 100);
      }
    }
  }, [location]);

  return (
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
  );
}

export default App;
