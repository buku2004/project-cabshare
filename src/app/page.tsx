import React from 'react'
// import Content from './components/Content'
import Hero from './components/Hero'
// import About from './components/About'
// import Feedback from './components/Feedback'
// import BarChartPage from './components/Chart'
import FeaturesGrid from './components/FeatureGrid'
import LogosMarquee from './components/LogosMarquee'
import HowItWorks from './components/Howitworks'

const page = () => {
  return (
    <div> 
      <Hero/>
      <LogosMarquee/>
      <FeaturesGrid/>
      <HowItWorks/>
      {/* <About/> */}
      {/* <Content/> */}
      {/* <BarChartPage/> */}
      {/* <Feedback/> */}
     
    </div>
  )
}
export default page