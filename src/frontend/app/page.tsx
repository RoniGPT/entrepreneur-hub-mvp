import React from 'react';
import './globals.css';
import Navbar from './Navbar';
import Home from './home';
import AboutUs from './AboutUs';
import ProjectForm from './ProjectForm';

function App() {
  return (
    <div className="app">
      <Navbar />
      <main>
        <Home />
        <AboutUs />
        <ProjectForm />
      </main>
    </div>
  );
}

export default App;
