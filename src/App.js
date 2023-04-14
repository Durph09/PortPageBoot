import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";
import ContactMeBS from "./components/contact-section/ContactMeBS";
import LandingSection2 from "./components/landing-section/LandingSection2";

import ProjectSection3 from "./components/project-section/ProjectSection3";

function App() {
  return (
    <div>
      <nav>
        <NavBar />
        <LandingSection2 />
        
        <ProjectSection3 />
        <ContactMeBS />
        <Footer />
      </nav>
    </div>
  );
}

export default App;
