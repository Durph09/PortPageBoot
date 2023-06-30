import NavBar from "./components/navbar/NavBar";
import Tech from "./components/AltLandingPage/Shared/Tech";
import AboutMe from "./components/AltLandingPage/aboutMePage/AboutMe";
import Services from "./components/AltLandingPage/Services/Services";
import CoolStuff from "./components/AltLandingPage/CoolStuff/CoolStuff";
import FloatingProjects from "./components/AltLandingPage/Portfolio/FloatingProjects";
import ContactMeBS from "./components/AltLandingPage/ContanctMe/ContactMeBS";
import StarsBg from "./components/AltLandingPage/Shared/StarsBg";
import "./components/AltLandingPage/Shared/LandingFrame.css";
import SwiperPort from "./components/AltLandingPage/Portfolio/Swiper";
import "./App.css";

const App = () => {
  return (
    <div className="app">
      <NavBar />
      {/* <TabNav /> */}
      <Tech />

      <AboutMe />
      <SwiperPort />

      {/* <CoolStuff />*/}

      <ContactMeBS />
    </div>
  );
};

export default App;
