import React from 'react'
import Navbar from '../components/Navbar'
import Hero from '../components/Hero'
import GallerySection from '../components/Works'
import { motion } from 'framer-motion'
 // Make sure path is correct

const Work = () => {
  return (
        <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >

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
        </motion.div>
  )
}

export default Work