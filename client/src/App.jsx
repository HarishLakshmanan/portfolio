import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import TechStack from './pages/TechStack'
import Projects from './pages/Projects'
import Contact from './pages/contact';

function App() {
  return (
    <>
      <Navbar />
      <div id="home" className="pt-24"><Home /></div>
      <div id="about" className="pt-24"><About /></div>
      <div id="tech" className="pt-24"><TechStack /></div>
      <div id="projects" className="pt-24"><Projects /></div>
      <div id="contact" className="pt-24"><Contact/></div>
      <Footer/>
    </>
  )
}

export default App
