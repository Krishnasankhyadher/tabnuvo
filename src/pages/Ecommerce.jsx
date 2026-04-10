import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';



const EcommerceFaqs = [
  {
    "question": "What does e-commerce management include?",
    "answer": "It includes product listing, inventory management, order processing, performance tracking, and marketing."
  },
  {
    "question": "Which platforms do you support?",
    "answer": "We work with Amazon, Flipkart, Myntra, BlinkIt, Swiggy Instamart, Zepto and many other ecommerce and Quick Commerce platforms."
  },
  {
    "question": "How can e-commerce management improve sales?",
    "answer": "By optimizing listings, managing operations efficiently, and running targeted campaigns to increase conversions."
  },
  {
    "question": "Do you handle customer support for e-commerce?",
    "answer": "Yes, we can assist with customer queries, returns, and overall experience management."
  }
];

const items = [
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Understanding the Marketplace & Buyer Behaviour.png",
    title: "Understanding the Marketplace & Buyer Behaviour",
    description:
      "Selling on marketplaces without understanding how people shop there is like setting up a store inside a mall and expecting footfall to find you on its own. We start by understanding how buyers search, compare, and decide."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Listings That Win the Click.png",
    title: "Listings That Win the Click",
    description:
      "On marketplaces, visibility decides everything. A strong product with weak listings is like a product placed on the lowest shelf. We optimise titles, descriptions, images, A+ content, and keywords."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Organic Ranking & Paid Visibility.png",
    title: "Organic Ranking & Paid Visibility",
    description:
      "Relying only on ads or only on organic ranking is like waiting for reviews before showing up. We manage both organic ranking and paid marketplace ads, planning growth across 6-month, 1-year, and 2-year timelines."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Managing Marketplace Operations.png",
    title: "Managing Marketplace Operations",
    description:
      "Marketplaces come with their own rules, dashboards, and moving parts. We manage operations like inventory health, pricing consistency, and platform compliance so the store runs smoothly."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Performance Tracking & Long-Term Growth.png",
    title: "Performance Tracking & Long-Term Growth",
    description:
      "Marketplace success is not built overnight. We closely track performance metrics and refine our strategies over time to achieve steady growth and long-term stability on the platform."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Managing Marketplace Operations2.png",
    title: "Being online is not the same as being visible",
    description:
      "E-commerce management is about being present where decisions are made. From listings and visibility to ads and operations, every piece needs to work together to drive sales."
  }
];

const Ecommerce = () => {
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
                        overlayImage="/assets1/Overlay/E commerce.png"
                    />
        <PostingSection
          images={[
            "/assets1/IMAGES1/E COMMERCE1.jpg",
            "/assets1/IMAGES1/E COMMERCE2.jpg",
            "/assets1/IMAGES1/E COMMERCE3.jpg",
            "/assets1/IMAGES1/E COMMERCE4.jpg",
          ]}
          heading="BEING ONLINE IS NOT THE SAME AS BEING VISIBLE"
          text="In today's digitally driven world, where Google registers over 8.5 billion searches daily, the shift towards online commerce is undeniable. Whether it's groceries or automobiles, consumers can now conveniently order anything from the comfort of their homes. As a business owner, it's natural to wonder how to thrive in this digital landscape.
At The Ad-ults, we offer a team of seasoned industry professionals who specialize in guiding our clients towards the top spot strategically. From devising content strategies to building high-quality backlinks, our SEO experts demonstrate unparalleled proficiency in both On-page and Off-page SEO techniques."/>
        <SocialMediaMagic
          sectionTitle="E-Commerce Management Services"
          items={items}
        />
        <Contact />
        <FAQSection
          eyebrow="FAQs"
          title="E-commerce"
          titleSecondLine="Management FAQs"
          faqs={EcommerceFaqs}
        />

      </div>
    </motion.div>
  )
}

export default Ecommerce
