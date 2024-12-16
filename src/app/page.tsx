import React from 'react'
import Footer from './components/Footer' 
import Content from './components/Content'
import Hero from './components/Hero'
import Navbar from './components/Navbar'
import About from './components/About'
import Feedback from './components/Feedback'

const page = () => {
  return (
    <div> 
      <Navbar/>
      <Hero/>
      <About/>
      <Content/>
      <Feedback/>
      <Footer/>
    </div>
  )
}
export default page