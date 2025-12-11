import React from 'react'
import Hero from '../components/Hero'
import GallerySection from '../components/Works'
import Navbar from '../components/Navbar'

const Work = () => {
  return (
    <div>
      <Navbar />
        <Hero
        bgImage="/assets/contact.png"
        overlayImage="/assets/work.png"/>
        <GallerySection/>
      
      
    </div>
  )
}

export default Work
