import "./App.css";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";
import ContactMeBS from "./components/ContactMeBS";
import LandingSection2 from "./components/LandingPage2";
import ProjectSection2 from "./components/ProjectSection2";



function App() {
  return (
    <div>
      <nav>
        <NavBar />
        <LandingSection2 />
       <ProjectSection2/>
        <ContactMeBS />
        <Footer />
      </nav>
    </div>
  );
}

export default App;
