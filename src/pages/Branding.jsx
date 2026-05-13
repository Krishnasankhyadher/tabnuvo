import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const BrandingFaqs = [
  {
    "question": "Why is branding important for my business?",
    "answer": "Branding defines how your business is perceived. It builds trust, creates recognition, and helps you stand out in a competitive market."
  },
  {
    "question": "What does a complete branding package include?",
    "answer": "It typically includes logo design, color palette, typography, brand guidelines, and communication tone to ensure consistency across all platforms."
  },
  {
    "question": "How long does the branding process take?",
    "answer": "Depending on complexity, branding can take anywhere from 2 to 6 weeks, ensuring every element aligns with your vision."
  },
  {
    "question": "Can you rebrand an existing business?",
    "answer": "Yes, we specialize in rebranding strategies that modernize your identity while retaining your brand’s core essence."
  }
];

const items = [
  {
    icon: "/assets1/Icons/Branding/Brand Discovery & Direction.png",
    title: "Brand Discovery & Direction",
    description:
      "Building a brand without clarity is like setting off on a road trip without a destination. We start by understanding your brand's purpose, values, and audience. This direction becomes the foundation for every decision that follows."
  },
  {
    icon: "/assets1/Icons/Branding/Visual Identity with Intent.png",
    title: "Visual Identity with Intent",
    description:
      "A logo, colour palette, or font is not just about looking nice, it is about being recognised. We design brand elements that feel cohesive, intentional, and aligned with the brand's desired perception."
  },
  {
    icon: "/assets1/Icons/Branding/Brand Voice & Personality.png",
    title: "Brand Voice & Personality",
    description:
      "If your brand were a person, how would it speak? We help shape a brand voice that feels natural, consistent, and relatable, so the brand sounds like itself everywhere it shows up."
  },
  {
    icon: "/assets1/Icons/Branding/Consistency Across Touchpoints.png",
    title: "Consistency Across Touchpoints",
    description:
      "A brand that keeps changing its look and message feels unreliable. From packaging to digital platforms, we ensure the brand shows up consistently. This repetition builds familiarity, and familiarity builds trust."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Tell your story with us  icon(Branding).png",
    title: "Making Brands Easy to Remember",
    description:
      "Great brands don't shout but they stay with you. We focus on making brands memorable in a crowded space, whether it is through a strong idea, a distinct look, or a clear message."
  },
  {
    icon: "/assets1/Icons/Branding/Making Brands Easy to Remember.png",
    title: "Tell your story with us",
    description:
      "From your logo to the colour and font of letters, every stroke, every curve has a meaning. Your design should tell your story."
  }
];

const Branding = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.35, ease: "easeOut" }}
    >

      <div>
        <Navbar />
        <Hero
                        bgImage="/assets1/Compressed Banner/Branding.png"
                        overlayImage="/assets1/Overlay/branding.png"
                    />
        <PostingSection
          images={[
            "/assets1/Compressed images/Branding page1.jpg",
            "/assets1/Compressed images/Branding page 2.jpg",
            "/assets1/Compressed images/Branding page3.jpg",
            "/assets1/Compressed images/Branding page Image 3.jpg",
          ]}
          heading="TELL YOUR STORY, YOUR WAY!"
          text="In today's era of Social Media prevalence, platforms like Instagram boast approximately 2 billion active mobile users, constituting about 28% of the global population, with its primary user base being young adults aged 18-34. Twitter emerges as one of the most vibrant social media platforms, witnessing active engagement from brands, leaders, and celebrities. Meanwhile, LinkedIn remains unrivaled as the leading professional networking platform.
      However, these observations merely scratch the surface.
In the current landscape, a sporadic post here and there won't suffice to make an impact. It's essential to dig deeper to truly stand out in the modern world of Social Media."/>
        <SocialMediaMagic
          sectionTitle="BRANDING DESIGN"
          items={items}
        />
        <Contact />
        <FAQSection
          eyebrow="FAQs"
          title="Branding"
          titleSecondLine="FAQs"
          faqs={BrandingFaqs}
        />

      </div>
    </motion.div>
  )
}

export default Branding
