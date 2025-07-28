import React from 'react'
import Navbar from './components/navbar'
import Home from './pages/Home'
import About from './pages/About'
import TechStack from './pages/TechStack'

function App() {
  return (
    <div className=''>
      <Navbar/>
      <Home/>
      <About/>
      <TechStack/>
    </div>
  )
}

export default App
