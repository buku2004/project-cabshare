import React from 'react'
import Footer from './components/Footer' 
import Content from './components/Content'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'

const page = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <About/>
      <Content/>
      <Footer/> 
    </div>
  )
}
export default page