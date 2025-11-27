import React from 'react';
import './App.css';
import Profile from './components/Profile/Profile';
import Projects from './components/Projects/Projects';
import Experience from './components/Experience/Experience';
import Certifications from './components/Certifications/Certifications';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="app">
      <Profile />
      <Projects />
      <Experience />
      <Certifications />
      <Footer />
    </div>
  );
}

export default App;