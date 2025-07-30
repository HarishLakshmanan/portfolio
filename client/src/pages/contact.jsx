import React from 'react'
import { MdEmail, MdPhone } from 'react-icons/md'

export default function Contact() {
    return (
        <div className="p-10 text-center">
            <h2 className="text-3xl font-bold mb-6">Contact Me</h2>
            <p className="flex justify-center items-center gap-2 text-lg">
                <MdEmail /> <a href="mailto:your.email@example.com">harish.lakshmanan@outlook.com</a>
            </p>
            <p className="flex justify-center items-center gap-2 text-lg mt-2">
                <MdPhone /> <a href="tel:+911234567890">+91 79041 12855</a>
            </p>
        </div>
    )
}
