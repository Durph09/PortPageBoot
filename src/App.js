import "./App.css";
import NavBar from "./components/navbar/NavBar";
import Footer from "./components/footer/Footer";

import { createBrowserRouter, createRoutesFromElements, Route, Link, Outlet, RouterProvider } from 'react-router-dom';

import HomePage from "./components/homePage/HomePage";
import AboutMePage from "./components/aboutMePage/aboutMePage";
import LandingFrame from "./components/AltLandingPage/LandingFrame";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<Root />}>
        <Route index  element={<HomePage />} />
        <Route path='/aboutmepage' element={<AboutMePage />} />
        <Route path="/landingframe" element={<LandingFrame />} />
        
        
  
  
      </Route>
    )
  )
  
    return (
      <div className="App">
        
       <RouterProvider router={router} />
      </div>
    );
  }
  
  export default App;
  
  const Root = () => {
    return <>
    <NavBar />
    <Outlet />
    <Footer />
  
    </>
  }
  