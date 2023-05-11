import "../../App.css";

import ContactMeBS from "./contact-section/ContactMeBS";
import LandingSection2 from "./landing-section/LandingSection2";

import ProjectSection3 from "./project-section/ProjectSection3"

function HomePage() {
  return (
    <div>
      <LandingSection2 />

      <ProjectSection3 />
      <ContactMeBS />
    </div>
  );
}

export default HomePage;
