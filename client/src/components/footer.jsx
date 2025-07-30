import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'

import React from 'react'

export default function footer() {
  return (
        <footer className="w-full mt-10 py-4 bg-gray-100 text-center">
            <p>Connect with me:</p>
            <div className='flex gap-6 text-xl justify-around'>
                <a href="https://www.linkedin.com/in/harish-lakshmanan" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://github.com/HarishLakshmanan" target="_blank" rel="noopener noreferrer"><FaGithub /></a>
                <a href="https://leetcode.com/HarishLakshmanan" target="_blank" rel="noopener noreferrer"><FaCode /></a>
            </div>

        </footer>
  )
}

