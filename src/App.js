import "./App.css";
import Navbar from "./Components/navbar/Navbar";
import Intro from "./Components/Intro/Intro";
import Footer from "./Components/Footer/Footer";
import About from "./Components/About/About";
import ProfessionalSkills from "./Components/skills/ProfessionalSkills";
import Project from "./Components/Project/Project";
import Particles from "./Particle/Particle";

function App() {
  return (
    <>
    <div>
      <Particles />
    </div>
      <div className="color">
        <Navbar />
        <Intro />
        <About />
        <ProfessionalSkills />
        <Project />
        <Footer />
      </div>
    </>
  );
}

export default App;
