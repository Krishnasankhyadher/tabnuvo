import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import GallerySection from '../components/Works'
 // Make sure path is correct

const Work = () => {
  return (
    <div className="min-h-screen bg-gray-50 font-sans text-gray-900">
      <Navbar />
      
      {/* Reusing the Hero component */}
      <Hero
        bgImage="/assets/contact.png"
        overlayImage="/assets/work.png"
      />
      
      {/* The new Grid Section */}
      <GallerySection />
      
    </div>
  )
}

export default Work