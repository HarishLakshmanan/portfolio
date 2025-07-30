import React from 'react'
import logo from '../assets/logo.svg'
import pre from '../assets/pre.svg'
import jb from '../assets/jb.svg'
import main from '../assets/main.png'
import kee from '../assets/kee.png'


const projects = [
  {
    title: 'IMAGIFY',
    description: 'A MERN stack app that transforms text into high-quality images using AI. It includes Razorpay payments and user authentication. Deployed on Render.',
    tech: 'React.Js, Node.Js, Express.Js, MongoDB',
    image: logo,
    liveLink: 'https://imagify-j6sm.onrender.com',
    codeLink: 'https://github.com/HarishLakshmanan',
  },
  {
    title: 'MAIN BLOG',
    description: 'A blog platform with admin login, JWT and Google Auth. Allows posting blogs. Deployed on Render.',
    tech: 'React.Js, Node.Js, Express.Js, MongoDB',
    image: main,
    liveLink: 'https://mern-blog-1-yffy.onrender.com',
    codeLink: 'https://github.com/HarishLakshmanan',
  },
  {
    title: 'PRESCRIPTO',
    description: 'Doctor appointment booking app with Razorpay integration and authentication. Deployed on Render.',
    tech: 'React.Js, Node.Js, Express.Js, MongoDB',
    image: pre,
    liveLink: 'https://prescripto-client-nb6b.onrender.com',
    codeLink: 'https://github.com/HarishLakshmanan',
  },
  {
    title: 'PRESCRIPTO ADMIN',
    description: 'Admin panel to manage appointments for admin and doctors. Includes secure auth and payment. Deployed on Render.',
    tech: 'React.Js, Node.Js, Express.Js, MongoDB',
    image: pre,
    liveLink: 'https://prescripto-admin-ec0b.onrender.com',
    codeLink: 'https://github.com/HarishLakshmanan',
  },
  {
    title: 'KEEPER',
    description: 'Note-taking app inspired by Google Keep with intuitive UX. Built with React.',
    tech: 'HTML, CSS, Javascript, React.Js',
    image: kee,
    liveLink: 'https://keeper-eeux.onrender.com',
    codeLink: 'https://github.com/HarishLakshmanan',
  },
  {
    title: 'Job Management UI',
    description: 'A job management homepage UI design sample.',
    tech: 'React.Js, TailwindCSS, Bootstrap',
    image: jb,
    liveLink: 'https://assesment-cybermind-1.onrender.com',
    codeLink: 'https://github.com/HarishLakshmanan',
  },
];

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-20 py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Projects</h2>
        <p className="mt-4 text-lg text-gray-500 dark:text-gray-400">Things I’ve built so far</p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white dark:bg-gray-800 rounded-xl shadow-md hover:shadow-xl transition-shadow duration-300 overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt={project.title}
              className="h-42 w-full "
            />
            <div className="p-6 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-300 flex-grow">{project.description}</p>
              <p className="text-sm text-gray-500 mt-3"><span className="font-medium">Tech stack:</span> {project.tech}</p>
              <div className="flex gap-5 mt-4">
                <a
                  href={project.liveLink}
                  className="text-sm font-semibold text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗Live Preview
                </a>
                <a
                  href={project.codeLink}
                  className="text-sm font-semibold text-gray-700 dark:text-gray-300 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💻View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
