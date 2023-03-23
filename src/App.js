
import './App.css';
import NavBar from './components/NavBar';
import LandingSection from './components/LandingSection';
import ProjectSection from './components/ProjectSection';
import Footer from './components/Footer';
import ContactMeBS from './components/ContactMeBS';

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
        <LandingSection/>
        <ProjectSection/>
        <ContactMeBS/>
        <Footer/>
      </nav>
    </div>
  );
}

export default App;
