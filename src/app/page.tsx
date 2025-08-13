import React from 'react'
import Hero from './components/Hero'
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
    </div>
  )
}
export default page