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
    icon: "/assets1/Icons/Service Design/Seeing the Service End-to-End.png",
    title: "Seeing the Service End-to-End",
    description:
      "Designing a service by looking at only one touchpoint is like judging a movie by a single scene. We map the entire service journey to understand how people actually experience your brand."
  },
  {
    icon: "/assets1/Icons/Service Design/Designing Clear & Thoughtful Journeys.png",
    title: "Designing Clear & Thoughtful Journeys",
    description:
      "A service that feels confusing often has good intentions but poor flow. We design service journeys that feel logical and predictable, so customers always know what is happening."
  },
  {
    icon: "/assets1/Icons/Service Design/Aligning People, Process & Systems.png",
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
          title="Social Media"
          titleSecondLine="Marketing FAQs"
          faqs={smmFaqs}
        />
      </div>
    </motion.div>
  )
}

export default Servicedesign
