import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'

export default function Contact() {
  return (
    <section id="contact" className="py-16 px-6 md:px-20 text-center bg-white dark:bg-gray-950">
      <h2 className="text-4xl font-bold text-gray-900 dark:text-gray-100 mb-6">Contact Me</h2>

      <div className="space-y-4 text-gray-700 dark:text-gray-300 text-lg">
        <div className="flex justify-center items-center gap-3">
          <MdEmail className="text-2xl" />
          <a
            href="mailto:harish.lakshmanan@outlook.com"
            className="hover:text-blue-600 transition font-medium"
          >
            harish.lakshmanan@outlook.com
          </a>
        </div>

        <div className="flex justify-center items-center gap-3">
          <MdPhone className="text-2xl" />
          <a
            href="tel:+917904112855"
            className="hover:text-blue-600 transition font-medium"
          >
            +91 79041 12855
          </a>
        </div>
      </div>
    </section>
  )
}
