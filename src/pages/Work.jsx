import React from 'react'
import Hero from '../components/Hero'
import GallerySection from '../components/Works'

const Work = () => {
  return (
    <div>
        <Hero
        bgImage="/assets/contact.png"
        overlayImage="/assets/work.png"/>
        <GallerySection/>
      
      
    </div>
  )
}

export default Work
