import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import HomePage from "./Pages/Home";
import ResumePage from './Pages/Resume';
import ProjectsPage from './Pages/ProjectsPage'
import { NavBar, ScrollTop} from './Components';
import { Footer } from './Containers'
import { ScrollProvider } from './Context/ScrollContext';
import './App.css';

const App = () => {
  return (
    <Router>
      <ScrollProvider>
      <ScrollTop/>
      <div>
        <NavBar/>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/ResumePage" element={<ResumePage />} />
          <Route path="*" element={<HomePage />} />
        </Routes>
        <Footer/>
      </div>
      </ScrollProvider>
    </Router>
  );
};

export default App;