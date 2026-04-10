import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';

import { motion } from 'framer-motion';

const SoftwaredevlopmentFaqs = [
  {
    "question": "What kind of software solutions do you offer?",
    "answer": "We develop custom software, SaaS platforms, automation tools, and enterprise solutions."
  },
  {
    "question": "Can you build software tailored to my business needs?",
    "answer": "Absolutely. We specialize in custom-built solutions aligned with your specific requirements."
  },
  {
    "question": "How do you ensure software quality?",
    "answer": "We follow rigorous testing, quality checks, and performance optimization throughout the development process."
  },
  {
    "question": "Do you provide post-launch support?",
    "answer": "Yes, we offer maintenance, updates, and technical support after deployment."
  }
];

const items = [
  {
    icon: "/assets1/Tabnuvo Icons (2)/Tested, Secure & Ready to Use(software development).png",
    title: "Understanding the Problem First",
    description:
      "Building software without understanding the problem is like installing an elevator where stairs would have worked better. Before writing a single line of code, we focus on what the software is meant to solve and who it is meant for."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Make your software worthy of your business!(software development).png",
    title: "Functionality That Feels Natural",
    description:
      "Good software should not need a manual. If users have to figure it out, something is off. We design and develop software that feels intuitive, where flows make sense and actions feel obvious."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Scalable & Thoughtful Development.png",
    title: "Scalable & Thoughtful Development",
    description:
      "Building software without planning for growth is like buying shoes two sizes too small. We develop systems that are flexible and scalable, allowing your software to grow, adapt, and evolve as your business does."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Clean Code & Reliable Performance.png",
    title: "Clean Code & Reliable Performance",
    description:
      "Behind every smooth experience is solid, well-structured code. We focus on clean development practices that ensure stability, speed, and reliability, so the software performs well even under pressure."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Understanding the Problem First.png",
    title: "Tested, Secure & Ready to Use",
    description:
      "Launching untested software is like opening a shop without checking the locks. We thoroughly test for performance, usability, and security before release. We help you launch your app on Google and Apple platforms."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Functionality That Feels Natural.png",
    title: "Make your software worthy of your business!",
    description:
      "Good software should not just function, it should move your business forward. We develop software that is stable, scalable, and built to perform."
  }
];
const Softwaredevlopment = () => {
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
                        overlayImage="/assets1/Overlay/software devlopment.png"
                    />
        <PostingSection
          images={[
            "/assets1/IMAGES1/Software Developmement1.jpg",
            "/assets1/IMAGES1/software development2.jpg",
            "/assets1/IMAGES1/Software Development3.jpg",
            "/assets1/IMAGES1/Software Development4.jpg",
          ]}
          heading="WE BUILD WITH INTENT, DELIVER ON TIMELINE"
          text="In today's digitally driven world, where Google registers over 8.5 billion searches daily, the shift towards online commerce is undeniable. Whether it's groceries or automobiles, consumers can now conveniently order anything from the comfort of their homes. As a business owner, it's natural to wonder how to thrive in this digital landscape.
      At The Ad-ults, we offer a team of seasoned industry professionals who specialize in guiding our clients towards the top spot strategically. From devising content strategies to building high-quality backlinks, our SEO experts demonstrate unparalleled proficiency in both On-page and Off-page SEO techniques."/>
        <SocialMediaMagic
          sectionTitle="Software Development Services"
          items={items}
        />
        <Contact />
        <FAQSection
          eyebrow="FAQs"
          title="Software"
          titleSecondLine="Development FAQs"
          faqs={SoftwaredevlopmentFaqs}
        />

      </div>
    </motion.div>
  )
}

export default Softwaredevlopment
