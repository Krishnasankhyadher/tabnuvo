import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const ProductdesignFaqs = [
  {
    "question": "What does product design include?",
    "answer": "Product design covers ideation, prototyping, design aesthetics, usability, and functionality of a product."
  },
  {
    "question": "How does good product design impact sales?",
    "answer": "A well-designed product enhances usability and appeal, increasing customer satisfaction and driving higher conversions."
  },
  {
    "question": "Do you design physical or digital products?",
    "answer": "We work on both—ranging from packaging design to digital product interfaces."
  },
  {
    "question": "Can you help improve an existing product?",
    "answer": "Yes, we refine and optimize existing products to enhance performance, usability, and market appeal."
  }
];

const items = [
  {
    icon: "/assets1/Tabnuvo Icons (2)/Making the Product Market-Ready icon (product design).png",
    title: "Understanding the Product & Its Users",
    description:
      "Designing a product without understanding its users is like serving soup with a fork. Before we design anything, we dig into what the product is meant to solve and who it is meant for."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Outgrow your product! icon(Product Design).png",
    title: "Design That Works First",
    description:
      "A beautiful product that is hard to use is like a door that looks stunning but won't open properly. Function always comes first. We focus on making interactions simple, logical, and intuitive."
  },
  {
    icon: "/assets1/Icons/Product Design/Creating a Visual & Emotional Connect.png",
    title: "Creating a Visual & Emotional Connect",
    description:
      "First impressions matter. Through thoughtful shapes, colours, and visual balance, we design products that feel approachable and reliable, creating an instant emotional connection."
  },
  {
    icon: "/assets1/Icons/Product Design/Using Trends with Purpose.png",
    title: "Using Trends with Purpose",
    description:
      "Chasing every trend is like changing your outfit every hour. We study trends for insights and apply them only when they genuinely improve the product and keep it relevant."
  },
  {
    icon: "/assets1/Icons/Product Design/Understanding the Product & Its Users.png",
    title: "Making the Product Market-Ready",
    description:
      "A product that feels inconsistent across touchpoints is like a conversation that keeps changing topics. We ensure everything works together into a product that fits naturally into the market."
  },
  {
    icon: "/assets1/Icons/Product Design/Design That Works First.png",
    title: "Outgrow your product!",
    description:
      "We help transform products from hero to superhero by making them easier to use, easier to choose, and easier to remember. Because people don't just love features, they also love how products fit into their life."
  }
];


const Productdesign = () => {
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
                        overlayImage="/assets1/Overlay/product design.png"
                    />
        <PostingSection
          images={[
            "/assets1/IMAGES1/Product Design1.jpg",
            "/assets1/IMAGES1/Product Design2.jpg",
            "/assets1/IMAGES1/Product Design3.jpg",
            "/assets1/IMAGES1/Product Design4.jpg",
          ]}
          heading="OUTGROW YOUR PRODUCT FROM HERO TO SUPERHERO"
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
          title="Product Design"
          titleSecondLine="FAQs"
          faqs={ProductdesignFaqs}
        />


      </div>
    </motion.div>
  )
}

export default Productdesign
