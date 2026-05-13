import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const UIuxFaqs = [
  {
    "question": "What is the difference between UI and UX?",
    "answer": "UI (User Interface) focuses on visual design, while UX (User Experience) ensures the product is easy and enjoyable to use."
  },
  {
    "question": "Why is UI/UX important for my website or app?",
    "answer": "It improves usability, reduces bounce rates, and increases conversions by delivering a smooth user journey."
  },
  {
    "question": "How do you ensure a user-friendly design?",
    "answer": "We conduct user research, create wireframes, test prototypes, and continuously optimize based on feedback."
  },
  {
    "question": "Do you redesign existing websites/apps?",
    "answer": "Yes, we analyze current performance and redesign interfaces to improve engagement and usability."
  }
];

const items = [
  {
    icon: "/assets1/Tabnuvo Icons (2)/Tested, Refined & Ready icon (UIUX Design).png",
    title: "Understanding Users Before Screens",
    description:
      "Designing screens without understanding users is like arranging furniture without knowing the room size. We start by studying user behaviour, needs, and expectations, so every interface decision is grounded in how people actually think and move through a product."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Make your website worthy of your business!icon (UIUX Design).png",
    title: "Clear & Intuitive User Flows",
    description:
      "A confusing journey can make even the best product feel broken. We focus on creating logical, seamless flows that guide users naturally from one step to the next, making interactions feel smooth and effortless."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Interfaces That Feel Familiar.png",
    title: "Interfaces That Feel Familiar",
    description:
      "An interface should feel like something users already know, not something they have to learn. Through layout, spacing, and visual hierarchy, we design interfaces that feel comfortable and easy to use."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Visual Design with Purpose.png",
    title: "Visual Design with Purpose",
    description:
      "Pretty screens alone don't solve problems. Every colour, button, and interaction is designed with intent to guide attention, reduce friction, and improve usability. The goal is not decoration, but clarity that supports the overall experience."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Understanding Users Before Screens.png",
    title: "Tested, Refined & Ready",
    description:
      "Launching without testing is like opening a restaurant without tasting the food. We test designs, gather feedback, and refine experiences to remove confusion and friction."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Clear & Intuitive User Flows.png",
    title: "CRM Web Softwares do this",
    description:
      "Your Website/app is your Showroom! If your homepage is your front desk, every line, paragraph and button is your employee, every picture is your product/service."
  }
];


const UIux = () => {
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
                        bgImage="/assets1/Compressed Banner/UIUX Design.png"
                        overlayImage="/assets1/Overlay/ui ux design.png"
                    />
        <PostingSection
          images={[
            "/assets1/Compressed images/UIUX Design1.jpg",
            "/assets1/Compressed images/UIUX Design2.jpg",
            "/assets1/Compressed images/UIUX Design3.jpg",
            "/assets1/Compressed images/UIUX Design4.jpg",
          ]}
          heading="YOUR WEBSITE/APP IS YOUR SHOWROOM!"
          text="In today's digitally driven world, where Google registers over 8.5 billion searches daily, the shift towards online commerce is undeniable. Whether it's groceries or automobiles, consumers can now conveniently order anything from the comfort of their homes. As a business owner, it's natural to wonder how to thrive in this digital landscape.
      At The Ad-ults, we offer a team of seasoned industry professionals who specialize in guiding our clients towards the top spot strategically. From devising content strategies to building high-quality backlinks, our SEO experts demonstrate unparalleled proficiency in both On-page and Off-page SEO techniques."/>
        <SocialMediaMagic
          sectionTitle="UI/UX Design Services"
          items={items}
        />
        <Contact />
        <FAQSection
          eyebrow="FAQs"
          title="UI/UX Design"
          titleSecondLine="FAQs"
          faqs={UIuxFaqs}
        />

      </div>
    </motion.div>
  )
}

export default UIux
