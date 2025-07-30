import React from 'react'
import bootstrap from '../assets/bootstrap.svg'
import express from '../assets/express-js.svg'
import git from '../assets/git.svg'
import github from '../assets/github.svg'
import html from '../assets/html.svg'
import js from '../assets/js.svg'
import node from '../assets/node.svg'
import css from '../assets/css.svg'
import react from '../assets/reac.svg'
import tailwind from '../assets/tailwind.svg'
import vscode from '../assets/vscode.svg'
import postg from '../assets/post.png'
import mongo from '../assets/Mongo DB.svg'

const techStack = [
  { name: 'HTML5', icon: html },
  { name: 'CSS3', icon: css },
  { name: 'JavaScript', icon: js },
  { name: 'Node.js', icon: node },
  { name: 'Express.js', icon: express },
  { name: 'React.js', icon: react },
  { name: 'Tailwind CSS', icon: tailwind },
  { name: 'Bootstrap', icon: bootstrap },
  { name: 'MongoDB', icon: mongo },
  { name: 'PostgreSQL', icon: postg },
  { name: 'VS Code', icon: vscode },
  { name: 'Git', icon: git },
  { name: 'GitHub', icon: github },
]

export default function TechStack() {
  return (
    <section id="tech" className="py-16 px-6 md:px-20 bg-white dark:bg-gray-950 text-center">
      <h2 className="text-4xl font-bold mb-4 text-gray-900 dark:text-gray-100">My Tech Stack</h2>
      <p className="text-gray-500 dark:text-gray-400 text-lg">
        Technologies I’ve been working with recently
      </p>

      <div className="grid grid-cols-3 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-5 gap-8 mt-14 place-items-center">
        {techStack.map((tech, index) => (
          <div
            key={index}
            className="flex flex-col items-center group hover:scale-105 transition-transform duration-300"
            title={tech.name}
          >
            <img
              src={tech.icon}
              alt={tech.name}
              className="w-16 h-16 object-contain dark:invert"
            />
            <span className="text-sm mt-2 text-gray-700 dark:text-gray-300 group-hover:text-blue-600 transition">
              {tech.name}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
