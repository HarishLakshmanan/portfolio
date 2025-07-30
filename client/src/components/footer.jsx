import React from 'react'
import { FaGithub, FaLinkedin, FaCode } from 'react-icons/fa'

export default function Footer() {
  return (
    <footer className="w-full py-6 bg-gray-100 dark:bg-gray-900 text-center text-gray-700 dark:text-gray-300">
      <p className="text-lg font-medium mb-4">Connect with me:</p>

      <div className="flex justify-center gap-8 text-2xl">
        <a
          href="https://www.linkedin.com/in/harish-lakshmanan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/HarishLakshmanan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="hover:text-gray-900 dark:hover:text-white transition"
        >
          <FaGithub />
        </a>
        <a
          href="https://leetcode.com/HarishLakshmanan"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LeetCode"
          className="hover:text-yellow-500 transition"
        >
          <FaCode />
        </a>
      </div>

      <p className="text-sm mt-6 text-gray-500 dark:text-gray-400">
        © {new Date().getFullYear()} Harish Lakshmanan. All rights reserved.
      </p>
    </footer>
  )
}

