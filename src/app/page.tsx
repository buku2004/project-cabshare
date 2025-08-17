import React from 'react'
import Hero from './components/Hero'
import FeaturesGrid from './components/FeatureGrid'
import LogosMarquee from './components/LogosMarquee'
import HowItWorks from './components/Howitworks'
import Map from './components/Map'

const page = () => {
  return (
    <div> 
      <Hero/>
      <LogosMarquee/>
      <FeaturesGrid/>
      <HowItWorks/>
      <Map/>
    </div>
  )
}
export default page