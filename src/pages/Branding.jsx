import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const smmFaqs = [
  {
    question: "Does social media marketing work?",
    answer:
      "Yes. When done strategically, social media marketing helps build brand awareness, drive traffic, and generate leads by engaging the right audience consistently.",
  },
  {
    question: "Can you guarantee results?",
    answer:
      "No one can guarantee exact numbers, but we use data-driven strategies, A/B testing, and constant optimization to maximize performance.",
  },
  {
    question: "How long before I see results?",
    answer:
      "You usually start seeing early signals within a few weeks, while strong, consistent results typically come in 3–6 months.",
  },
  {
    question: "Do I need to be on every platform?",
    answer:
      "Not at all. We identify where your audience actually spends time and focus your efforts there for better ROI.",
  },
  {
    question: "Can you handle content creation too?",
    answer:
      "Yes, we can handle creatives, copy, calendars, and publishing so your brand stays consistent and active.",
  },
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
    icon: "/assets1/Icons/Branding/Making Brands Easy to Remember.png",
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
                        bgImage="/assets1/background.png"
                        overlayImage="/assets1/Overlay/branding.png"
                    />
        <PostingSection
          images={[
            "/assets1/IMAGES1/Branding page1.jpg",
            "/assets1/IMAGES1/Branding page 2.jpg",
            "/assets1/IMAGES1/Branding page3.jpg",
            "/assets1/IMAGES1/Branding page Image 3.jpg",
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
          title="Social Media"
          titleSecondLine="Marketing FAQs"
          faqs={smmFaqs}
        />

      </div>
    </motion.div>
  )
}

export default Branding
