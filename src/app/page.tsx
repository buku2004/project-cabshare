import React from 'react'
import Content from './components/Content'
import Hero from './components/Hero'
import About from './components/About'
import Feedback from './components/Feedback'

const page = () => {
  return (
    <div> 
      <Hero/>
      <About/>
      <Content/>
      <Feedback/>
    </div>
  )
}
export default page