import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const ServicedesignFaqs = [
  {
    "question": "What is service design?",
    "answer": "Service design focuses on improving the overall customer journey by aligning your business processes with user needs."
  },
  {
    "question": "Why is service design important?",
    "answer": "It enhances customer satisfaction, improves efficiency, and creates seamless experiences that build long-term loyalty."
  },
  {
    "question": "What industries benefit from service design?",
    "answer": "Hospitality, healthcare, retail, SaaS, and almost every service-based business can benefit from it."
  },
  {
    "question": "How do you approach service design?",
    "answer": "We analyze user behavior, map journeys, identify gaps, and design solutions that improve both user experience and business performance."
  }
];

const items = [
  {
    icon: "/assets1/Icons/Service Design/Seeing the Service End-to-End.png",
    title: "Seeing the Service End-to-End",
    description:
      "Designing a service by looking at only one touchpoint is like judging a movie by a single scene. We map the entire service journey to understand how people actually experience your brand."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Creating Consistent Service Experiences icon (2)(Service Design).png",
    title: "Designing Clear & Thoughtful Journeys",
    description:
      "A service that feels confusing often has good intentions but poor flow. We design service journeys that feel logical and predictable, so customers always know what is happening."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/expand freely(Service Design).png",
    title: "Aligning People, Process & Systems",
    description:
      "Even the best teams struggle when processes are unclear. We align internal teams, workflows, and systems so everyone works together smoothly, creating a better experience for both customers and employees."
  },
  {
    icon: "/assets1/Icons/Service Design/Seeing the Service End-to-End.png",
    title: "Human Touch Where It Matters",
    description:
      "Automating everything is like replacing a helpful person with a machine that cannot listen. We design services that balance efficiency with empathy, ensuring human interaction is present where it is needed most."
  },
  {
    icon: "/assets1/Icons/Service Design/Designing Clear & Thoughtful Journeys.png",
    title: "Creating Consistent Service Experiences",
    description:
      "When a service feels different every time, trust breaks. We ensure the service experience remains consistent across channels and interactions, making it easy to trust, remember, and return to."
  },
  {
    icon: "/assets1/Icons/Service Design/Aligning People, Process & Systems.png",
    title: "Expand freely!",
    description:
      "We ensure that you make every move with awareness and expand without headache. Finding errors before they become a problem."
  }
];

const Servicedesign = () => {
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
                        overlayImage="/assets1/Overlay/service design.png"
                    />
        <PostingSection
          images={[
            "/assets1/IMAGES1/Service Design1.jpg",
            "/assets1/IMAGES1/Service Design2.jpg",
            "/assets1/IMAGES1/Service Design3.jpg",
            "/assets1/IMAGES1/brand and experience.jpg",
          ]}
          heading="PLAN AHEAD AND OPERATE SMOOTHLY!"
          text="In today's era of Social Media prevalence, platforms like Instagram boast approximately 2 billion active mobile users, constituting about 28% of the global population, with its primary user base being young adults aged 18-34. Twitter emerges as one of the most vibrant social media platforms, witnessing active engagement from brands, leaders, and celebrities. Meanwhile, LinkedIn remains unrivaled as the leading professional networking platform.
      However, these observations merely scratch the surface.
In the current landscape, a sporadic post here and there won't suffice to make an impact. It's essential to dig deeper to truly stand out in the modern world of Social Media."/>
        <SocialMediaMagic
          sectionTitle="SERVICES DESIGN"
          items={items}
        />
        <Contact />
        <FAQSection
          eyebrow="FAQs"
          title="Service Design"
          titleSecondLine="FAQs"
          faqs={ServicedesignFaqs}
        />
      </div>
    </motion.div>
  )
}

export default Servicedesign
