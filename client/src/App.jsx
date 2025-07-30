import React from 'react'
import Navbar from './components/navbar'
import Footer from './components/footer'
import Home from './pages/Home'
import About from './pages/About'
import TechStack from './pages/TechStack'
import Projects from './pages/Projects'
import Contact from './pages/contact'

function App() {
  return (
    <>
      <Navbar />
      <main className="bg-white dark:bg-gray-950 text-gray-800 dark:text-gray-100">
        <section id="home" className=" scroll-mt-24"><Home /></section>
        <section id="about" className="scroll-mt-24"><About /></section>
        <section id="tech" className="pt-24 scroll-mt-24"><TechStack /></section>
        <section id="projects" className="pt-24 scroll-mt-24"><Projects /></section>
        <section id="contact" className="pt-24 scroll-mt-24"><Contact /></section>
      </main>
      <Footer />
    </>
  )
}

export default App
