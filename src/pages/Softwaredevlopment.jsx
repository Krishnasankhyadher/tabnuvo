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
    icon: "/assets1/Icons/TABNUVO ICONS/Understanding the Problem First.png",
    title: "Understanding the Problem First",
    description:
      "Building software without understanding the problem is like installing an elevator where stairs would have worked better. Before writing a single line of code, we focus on what the software is meant to solve and who it is meant for."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Functionality That Feels Natural.png",
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
          title="Social Media"
          titleSecondLine="Marketing FAQs"
          faqs={smmFaqs}
        />

      </div>
    </motion.div>
  )
}

export default Softwaredevlopment
