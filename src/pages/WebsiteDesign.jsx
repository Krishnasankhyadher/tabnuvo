import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';

const WebsiteDesignFaqs = [
  {
    "question": "What types of websites do you develop?",
    "answer": "We create business websites, portfolios, landing pages, and custom web platforms tailored to your needs."
  },
  {
    "question": "How long does it take to develop a website?",
    "answer": "Typically, it takes 2–8 weeks depending on the complexity and features required."
  },
  {
    "question": "Will my website be mobile-friendly?",
    "answer": "Yes, all our websites are fully responsive and optimized for all devices."
  },
  {
    "question": "Do you provide website maintenance?",
    "answer": "Yes, we offer ongoing support, updates, and performance optimization services."
  }
];

const items = [
  {
    icon: "/assets1/Tabnuvo Icons (2)/Understanding the Purpose First(Website development).png",
    title: "Understanding the Purpose First",
    description:
      "Building a website without a clear goal is like opening a store without deciding what you want to sell. Before development begins, we understand what the website is meant to achieve, whether it's generating leads, telling a brand story, or driving sales."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Make your website worthy of your business!(website development).png",
    title: "Structure That Makes Sense",
    description:
      "A website with poor structure is like a maze with no exit. We focus on building clean, logical structures that help visitors find what they're looking for quickly, without unnecessary clicks or distractions."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Performance & Responsiveness(website development).png",
    title: "Performance & Responsiveness",
    description:
      "A slow or broken website is like a shop that takes forever to open its doors. We develop websites that load fast, work smoothly across devices, and perform reliably because patience online is limited and first impressions are short."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Seamless Integration & Functionality(Website development).png",
    title: "Seamless Integration & Functionality",
    description:
      "A website isn't just a collection of pages, it's a working system. We ensure all forms, integrations, and functionalities work together seamlessly to support your business goals."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Secure, Scalable & Easy to Manageicon (website design).png",
    title: "Secure, Scalable & Easy to Manage",
    description:
      "A website should grow with your business, not hold it back. We build websites that are secure, scalable, and easy to manage, so updates don't feel like a technical headache and growth doesn't require starting from scratch."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Structure That Makes Sense.png",
    title: "CRM Web Softwares do this",
    description:
      "Your website shouldn't just exist online, it should work for your business. We build websites that are clear, fast, and built to perform."
  }
];


const WebsiteDesign = () => {
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
                        overlayImage="/assets1/Overlay/website design and devlopment.png"
                    />
        <PostingSection
          images={[
            "/assets1/IMAGES1/Website Development1.jpg",
            "/assets1/IMAGES1/Website Development2.jpg",
            "/assets1/IMAGES1/Website Development3.jpg",
            "/assets1/IMAGES1/Website Development4.jpg",
          ]}
          heading="YOUR DIGITAL SHOP NEEDS TO STAND OUT"
          text="In the Modern era of Digitalisation, your web address is more important for your business than your physical address. Your business is analyzed, judged, and valued by your clients as well as your potential investors based on your website. Whether you work in B2B, B2C, or D2C. Your website can make or break your impression.
      Every website/app is judged on 2 parameters, how it looks and how it works. At The Ad-ults we believe in just 1 philosophy, “Your visitors should get what they are looking for within 2 minutes of pressing enter on your web address”. With 15+ years of experience in UI/UX and Development, our team is capable of making eye-."/>
        <SocialMediaMagic
          sectionTitle="Web Designing Services at TABNUVO PVT. LTD."
          items={items}
        />
        <Contact />
        <FAQSection
          eyebrow="FAQs"
          title="Website"
          titleSecondLine="Development FAQs"
          faqs={WebsiteDesignFaqs}
        />

      </div>
    </motion.div>
  )
}

export default WebsiteDesign
