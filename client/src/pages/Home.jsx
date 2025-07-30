import React from 'react'
import img from '../assets/img.png'


export default function Home() {
  return (
    <div>
      <div className='flex justify-around mt-20 mb-20 '>
        <h1 className='text-5xl mt-25'>Hi 👋,<br/>
          My name is<br/>
          Harish Lakshmanan<br/>
          I build things for web</h1>
          <div>
            <img className='w-70 rounded-full' src={img}/>
          </div>
      </div>
    </div>
  );
};
