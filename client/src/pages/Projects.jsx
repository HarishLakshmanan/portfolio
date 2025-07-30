import React from 'react'
import logo from '../assets/logo.svg'
import pre from '../assets/pre.svg'
import jb from '../assets/jb.svg'
import main from '../assets/main.png'
import kee from '../assets/kee.png'

const projects = [
  {
    title: 'IMAGIFY',
    description: 'This is a MERN stack application that transforms text into high-quality images using AI algorithms. It features secure payments with Razorpay and robust user authentication. The application is deployed on Render.',
    tech: 'React.Js,Node.Js,Express.Js,MongoDB',
    image: logo,
    liveLink: 'https://imagify-j6sm.onrender.com',
    codeLink: 'https://github.com/HarishLakshmanan',
  }, {
    title: 'MAIN BLOG',
    description: 'This is blog site. Features have admin login,jwt authentication,google Auth for security purpose. we can write blogs and post in that site.It deployed on render.',
    tech: 'React.Js,Node.Js,Express.Js,MongoDB',
    image: main,
    liveLink: 'https://mern-blog-1-yffy.onrender.com',
    codeLink: 'https://github.com/HarishLakshmanan',
  }, {
    title: 'PRESCRIPTO',
    description: 'This is doctor appointment booking application. Which features secure payments with Razorpay and robust user authentication.It deployed on render',
    tech: 'React.Js,Node.Js,Express.Js,MongoDB',
    image: pre,
    liveLink: 'https://prescripto-client-nb6b.onrender.com',
    codeLink: 'https://github.com/HarishLakshmanan',
  }, {
    title: 'PRESCRIPTO ADMIN',
    description: 'This is doctor appointment managing application for admin and doctors use. Which features secure payments with Razorpay and robust user authentication.It deployed on render.',
    tech: 'React.Js,Node.Js,Express.Js,MongoDB',
    image: pre,
    liveLink: 'https://prescripto-admin-ec0b.onrender.com',
    codeLink: 'https://github.com/HarishLakshmanan',
  },
   {
    title: 'KEEPER',
    description: 'Thia is a note-taking app inspired by Google Keep, featuring efficient note management with archiving and deletion. Built with React.js, it offers a user-friendly and intuitive interface.',
    tech: 'HTML,CSS,Javascript,React.Js',
    image: kee,
    liveLink: 'https://keeper-eeux.onrender.com',
    codeLink: 'https://github.com/HarishLakshmanan',
  },
   {
    title: 'Job Management UI',
    description: 'This is sample project for job management.Which is the design of that home page',
    tech: 'React.Js,TailwindCSS,Bootstrap',
    image: jb,
    liveLink: 'https://assesment-cybermind-1.onrender.com',
    codeLink: 'https://github.com/HarishLakshmanan',
  },
];

export default function Projects() {
    return (
        <div className=''>

            <p className=' flex justify-center font-bold text-4xl'>Projects</p>
            <p className='mt-10 flex justify-center text-4xl text-gray-500'>Things I’ve built so far</p>

            <div className=" w-250 l-70 grid gap-5 md:grid-cols-3 lg:grid-cols-3 mx-auto mt-10 ">
        {projects.map((project, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-md overflow-hidden flex flex-col"
          >
            <img
              src={project.image}
              alt="Project"
              className="h-48 w-full object-cover"
            />
            <div className="p-5 flex flex-col flex-grow">
              <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
              <p className="text-sm text-gray-600 flex-grow">{project.description}</p>
              <p className="text-sm text-gray-500 mt-2">Tech stack: {project.tech}</p>
              <div className="flex items-center gap-4 mt-4">
                <a
                  href={project.liveLink}
                  className="text-sm font-medium text-blue-600 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  🔗 Live Preview
                </a>
                <a
                  href={project.codeLink}
                  className="text-sm font-medium text-gray-700 hover:underline"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  💻 View Code
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>


        </div>
    )
}
