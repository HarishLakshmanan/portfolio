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

export default function TechStack() {
  return (
    <div className='mt-30 mb-20'>
      <div className=''>
        <p className=' flex justify-center text-4xl font-bold mb-10'>My Tech Stack</p>
        <p className='flex justify-center text-4xl font- text-gray-500'>Technologies I’ve been working with recently</p>
      </div>

      <div className='grid grid-cols-5 gap-4 ms-20 mt-20 '>
        <img src={html} alt="" className='w-25 h-25 mt-5'/>
        <img src={css} alt="" className='w-25 h-25  mt-5'/>
        <img src={js} alt="" className='w-25 h-25 mt-5'/>
        <img src={node} alt="" className='w-25 h-25 mt-5'/>
        <img src={express} alt="" className='w-25 h-25 mt-5'/>
        <img src={react} alt="" className='w-25 h-25 mt-5'/>
        <img src={tailwind} alt="" className='w-25 h-25 mt-5' />
        <img src={bootstrap} alt=""className=' mt-5' />
        <img src={mongo} alt="" className='w-25 h-25 mt-5'/>
        <img src={postg} alt="" className='w-25 h-25 mt-5'/>
        <img src={vscode} alt="" className='w-25 h-25 mt-5'/>
        <img src={git} alt="" className='w-25 h-25 mt-5'/>
        <img src={github} alt="" className='w-25 h-25 mt-5'/>
      </div>
    </div>
  )
}
