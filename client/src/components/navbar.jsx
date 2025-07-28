import React from 'react'

export default function navbar() {
    return (
        <div className='flex flex-col'>
            <div className='flex justify-end gap-10 me-5 mt-5'>
                <p className='cursor-pointer'>Home</p>
                <p className='cursor-pointer'>About</p>
                <p className='cursor-pointer'>Tech Stack</p>
                <p className='cursor-pointer'>Projects</p>
                <p className='cursor-pointer'>Contact</p>
            </div>
        </div>
    )
}
git