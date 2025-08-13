import React from 'react'
const apiKey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY;

const Gmap = () => {
  return (
    <div className="lg:flex-row">
      <div className="flex-1 flex justify-center">
      <iframe width="400" height="350" 
      className='rounded-md shadow-md border border-bg-white/90'
      loading="lazy" 
      allowFullScreen
      src={`https://www.google.com/maps/embed/v1/place?q=place_id:ChIJw2HVu3IfIDoRWntq53BcqwA&key=${apiKey}`}>
      </iframe>
      </div>
    </div>
  )
}

export default Gmap