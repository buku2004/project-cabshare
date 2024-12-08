import React from 'react'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'

const page = () => {
  return (
    <div><Navbar/><Hero/><About/>
    </div>
  )
}

export default page