import { Container } from "react-bootstrap";
import NavBar from "./components/NavBar";
import Banner from "./components/Banner";
import ValuesSection from "./components/ValuesSection";
import "./App.css";

function App() {
  return (
    <Container>
      <NavBar />
      <Banner />
      <ValuesSection />
    </Container>
  );
}

export default App;
