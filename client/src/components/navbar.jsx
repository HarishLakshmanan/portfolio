import React from 'react'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'

export default function Navbar() {
  const scrollToSection = (id) => {
    const section = document.getElementById(id)
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <header className="fixed top-0 left-0 w-full bg-white dark:bg-gray-900 z-50 shadow-md transition-all">
      <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-12 py-6 max-w-7xl mx-auto text-gray-800 dark:text-gray-200">
        
        {/* Navigation Links */}
        <div className="flex flex-wrap gap-6 text-sm md:text-base font-medium mb-3 md:mb-0">
          <p className="cursor-pointer hover:text-blue-600 transition" onClick={() => scrollToSection('home')}>Home</p>
          <p className="cursor-pointer hover:text-blue-600 transition" onClick={() => scrollToSection('about')}>About</p>
          <p className="cursor-pointer hover:text-blue-600 transition" onClick={() => scrollToSection('tech')}>Tech Stack</p>
          <p className="cursor-pointer hover:text-blue-600 transition" onClick={() => scrollToSection('projects')}>Projects</p>
          <p className="cursor-pointer hover:text-blue-600 transition" onClick={() => scrollToSection('contact')}>Contact</p>
        </div>

        {/* Profile Links */}
        <div className="flex gap-5 text-xl">
          <a
            href="https://www.linkedin.com/in/harish-lakshmanan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="hover:text-blue-600 transition"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/HarishLakshmanan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="hover:text-gray-700 dark:hover:text-white transition"
          >
            <FaGithub />
          </a>
          <a
            href="https://leetcode.com/HarishLakshmanan"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LeetCode Profile"
            className="hover:text-yellow-500 transition"
          >
            <FaCode />
          </a>
        </div>
      </nav>
    </header>
  )
}
