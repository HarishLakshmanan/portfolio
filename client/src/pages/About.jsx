import React from 'react'
import bu from '../assets/bu.svg'
import ca from '../assets/ca.svg'
import lo from '../assets/lo.svg'

export default function About() {
  return (
    <div className='px-6 md:px-50 py-16 bg-gray-50 dark:bg-gray-900 text-gray-800 dark:text-gray-200'>
      <div className=''>
        <h1 className='font-bold text-4xl'>About Me</h1>
        <p className='text-4sm  mt-5  text-gray-500'>Driven and adaptable full-stack web developer with a strong foundation in both front-end and backend technology.
          Proficient in JavaScript, data structures, and algorithms, with a proven ability to solve programming challenges
          efficiently. Seeking a position to leverage technical skills and recent learning to contribute high-quality, performant
          web applications. Experienced in developing and maintaining robust, scalable, and user-friendly applications
          across the entire stack. </p>
      </div>
      <div className='justify-center '>
        <h1 className='font-bold text-4xl mt-5'>Work Experience</h1>
        <div className='mt-5'>
          <div className='flex justify-between mb-2'>
            <p className=' text-gray-500'>FullStack Developer Intern</p>
            <span className='text-green-700 text-xs font-medium bg-green-100 px-2 py-1 rounded-full inline-block'>Internship</span>
          </div>
          <div className='flex justify-between'>
            <div className='flex items-center'>
              <img src={bu} className='w-4 h-4 mt-0.5'/> <span className='ms-1  text-gray-500 text-sm'>Lentera Technologies Pvt Ltd</span>
            </div>
            <div className='flex items-center'>
              <img src={lo} className='w-4 h-4 mt-0.5'/> <span className='ms-1  text-gray-500 text-sm'>Chennai</span>
            </div>
            <div className='flex items-center'>
              <img src={ca} className='w-4 h-4 mt-0.5'/> <span className='ms-1  text-gray-500 text-sm'>Mar 2025 - Apr 2025</span>
            </div>
          </div>
          <hr className='mt-4 text-gray-500' />

        </div>
      </div>
      <div className='justify-center  mt-5'>
        <h1 className='text-4xl font-bold mb-5'>Education</h1>
        <div className='text-gray-500'>
          <div className='flex justify-between'>
            <p>Bachelors in Electronics & Communication</p>
            <span className='text-green-700 text-xs font-medium bg-green-100 px-2 py-1 rounded-full inline-block'>Full Time</span>
          </div>
          <div className='flex justify-between mt-2'>
            <div className='flex '>
              <img src={bu}  className='w-4 h-4 mt-0.5'/> <p className='ms-1 text-sm'>Saveetha Engineering College</p>
            </div>
            <div className='flex items-center'>
              <img src={lo} className='w-4 h-4 mt-0.5'/> <span className='ms-1  text-gray-500 text-sm'>Chennai</span>
            </div>
            <div className='flex'>
              <img src={ca} className='w-4 h-4 mt-0.5'/> <p className='ms-1 text-sm'>Sep 2020 - May 2024</p>
            </div>
          </div><hr className='mt-4 text-gray-500'/>
        </div>
      </div>
    </div>
  )
}
