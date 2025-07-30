import React from 'react'
import img from '../assets/img.png'

export default function Home() {
  return (
    <section className="min-h-screen flex items-center justify-center px-6 md:px-20 bg-white dark:bg-gray-900">
      <div className="flex flex-col md:flex-row items-center gap-12 max-w-6xl w-full py-20">

        {/* Text Section */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 dark:text-white leading-snug">
            Hi 👋,<br />
            My name is <span className="text-blue-600 dark:text-blue-400">Harish Lakshmanan</span><br />
            I build <span className="text-purple-600 dark:text-purple-400">web applications</span>
          </h1>
          <p className="mt-6 text-gray-600 dark:text-gray-400 text-lg max-w-xl">
            I’m a passionate full-stack developer focused on building fast, accessible, and scalable applications using modern web technologies.
          </p>
          <div className="mt-6 flex gap-4 justify-center md:justify-start">
            <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg shadow-md transition">
              View Projects
            </a>
            <a href="#contact" className="border border-blue-600 text-blue-600 hover:bg-blue-50 dark:hover:bg-blue-900 px-6 py-2 rounded-lg transition">
              Contact Me
            </a>
          </div>
        </div>

        {/* Image Section */}
        <div className="flex-1 flex justify-center">
          <div className="p-[4px] rounded-full bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 shadow-lg">
            <img
              src={img}
              alt="Harish Lakshmanan"
              className="w-80 h-80 md:w-90 md:h-90 object-cover rounded-full bg-white"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

