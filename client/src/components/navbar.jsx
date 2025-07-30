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
        <div className='fixed top-0 left-0 w-full bg-white z-50 shadow-md'>
            <div className='flex justify-between items-center p-4 px-8'>
                {/* Navigation Links */}
                <div className='flex gap-8'>
                    <p className='cursor-pointer' onClick={() => scrollToSection('home')}>Home</p>
                    <p className='cursor-pointer' onClick={() => scrollToSection('about')}>About</p>
                    <p className='cursor-pointer' onClick={() => scrollToSection('tech')}>Tech Stack</p>
                    <p className='cursor-pointer' onClick={() => scrollToSection('projects')}>Projects</p>
                    <p className='cursor-pointer' onClick={() => scrollToSection('contact')}>Contact</p>
                </div>

                {/* Profile Links */}
                <div className='flex gap-6 text-xl'>
                    <a href="https://www.linkedin.com/in/harish-lakshmanan" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                    <a href="https://github.com/HarishLakshmanan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                    <a href="https://leetcode.com/HarishLakshmanan" target="_blank" rel="noopener noreferrer"><FaCode /></a>
                </div>

            </div>
        </div>
    )
}
