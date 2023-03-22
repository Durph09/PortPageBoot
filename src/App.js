
import './App.css';
import NavBar from './components/NavBar';
import LandingSection from './components/LandingSection';
import ProjectSection from './components/ProjectSection';
import ContactMe from './components/ContactMe';
import ContactMeBS from './components/ContactMeBS';

function App() {
  return (
    <div className="App">
      <nav>
        <NavBar />
        <LandingSection/>
        <ProjectSection/>
        {/*<ContactMe/>*/}
        <ContactMeBS/>
      </nav>
    </div>
  );
}

export default App;
