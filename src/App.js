import NavBar from "./components/navbar/NavBar";
import Tech from "./components/AltLandingPage/Shared/Tech";
import AboutMe from "./components/AltLandingPage/aboutMePage/AboutMe";
import ContactMeBS from "./components/AltLandingPage/ContanctMe/ContactMeBS";
import "./components/AltLandingPage/Shared/LandingFrame.css";
import Swiper from "./components/AltLandingPage/Portfolio/Swiper";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      <Tech />
      <div className="aboutMeMain">
      <AboutMe />
      <Swiper />
      <ContactMeBS />
      </div>
    </div>
  );
};

export default App;
