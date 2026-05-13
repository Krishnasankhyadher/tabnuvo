import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';
import Navbar from '../components/Navbar';
import { motion } from 'framer-motion';
const PaidadsFaqs = [
  {
    "question": "Where Can You Advertise With PPC Ads?",
    "answer": "Also known as Pay-Per-Click, PPC is offered by the social networks like Facebook and Twitter in the form of Facebook and Twitter ads, search engines like Google as Google ads."
  },
  {
    "question": "Do People Really Click On Online PPC Ads?",
    "answer": "People do click on paid ads if the product or service interests them. For each ad clicked, the marketer ought to pay the search engine."
  },
  {
    "question": "What businesses can/ should advertise online?",
    "answer": "Irrespective of domains, both SMEs and MNCs can run PPC campaigns to drive traffic and generate potential leads to reach out to real-time audiences and flourish their ROI."
  },
  {
    "question": "Why Advertise With Pay-per-click Ads?",
    "answer": "The PPC model has had a record of generating huge traffic and potential lead conversions by advertising products and/or services to a targeted group of people who are searching them with certain keywords."
  }
];

const items = [
  {
    icon: "/assets1/Tabnuvo Icons (2)/Tracking, Learning & Optimising(paid add).png",
    title: "Starting with the Right Objective",
    description:
      "Running ads without a clear goal is like shouting into a crowd without knowing who you are calling out to. Before launching anything, we define what success looks like, so every ad has a purpose, not just a budget behind it."
  },
  {
    icon: "/assets1/Tabnuvo Icons (2)/Discipline your ad account with(paid ads).png",
    title: "Targeting That Actually Makes Sense",
    description:
      "Showing the right ad to the wrong person is like offering dessert before the meal. We focus on precise audience targeting based on behaviour, intent, and relevance."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Creatives That Don't Feel Like Ads.png",
    title: "Creatives That Don't Feel Like Ads",
    description:
      "Most people scroll past ads the way they ignore billboards. We design ad creatives that blend naturally into feeds with clear visuals, strong hooks, and messaging that feels relevant."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Using Trends with Strategy.png",
    title: "Using Trends with Strategy",
    description:
      "Jumping on every ad trend is like changing lanes without checking traffic. We use trends thoughtfully, testing what works while keeping the brand and objective intact."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Starting with the Right Objective.png",
    title: "Tracking, Learning & Optimising",
    description:
      "Running ads and not tracking performance is like driving with your eyes closed. We monitor results closely, learn from real data, and optimise continuously."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Targeting That Actually Makes Sense.png",
    title: "Discipline your ad account with us",
    description:
      "Ad accounts are like children. Give them money without telling them what it is for and they will buy anything at any price. If you tell them what to do, they will do the right thing."
  }
];

const Paidads = () => {
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
                        bgImage="/assets1/Compressed Banner/Paid Ads (1).png"
                        overlayImage="/assets1/Overlay/paid ads.png"
                    />
        <PostingSection
          images={[
            "/assets1/Compressed images/PAID AD1.jpg",
            "/assets1/Compressed images/PAID AD2.jpg",
            "/assets1/Compressed images/PAID AD3.jpg",
            "/assets1/Compressed images/Paid Ads 4.jpg",
          ]}
          heading="MAKE YOUR AD BUDGET AN INVESTMENT, NOT SPEND!"
          text="In today's digitally driven world, where Google registers over 8.5 billion searches daily, the shift towards online commerce is undeniable. Whether it's groceries or automobiles, consumers can now conveniently order anything from the comfort of their homes. As a business owner, it's natural to wonder how to thrive in this digital landscape.
At The Ad-ults, we offer a team of seasoned industry professionals who specialize in guiding our clients towards the top spot strategically. From devising content strategies to building high-quality backlinks, our SEO experts demonstrate unparalleled proficiency in both On-page and Off-page SEO techniques."/>
        <SocialMediaMagic
          sectionTitle="Paid Ads Services"
          items={items}
        />
        <Contact />
        <FAQSection
          eyebrow="FAQs"
          title="Paid Ads"
          titleSecondLine="FAQs"
          faqs={PaidadsFaqs}
        />

      </div>
    </motion.div>
  )
}

export default Paidads
