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
    icon: "/assets1/Icons/TABNUVO ICONS/Starting with the Right Objective.png",
    title: "Starting with the Right Objective",
    description:
      "Running ads without a clear goal is like shouting into a crowd without knowing who you are calling out to. Before launching anything, we define what success looks like, so every ad has a purpose, not just a budget behind it."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Targeting That Actually Makes Sense.png",
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
                        bgImage="/assets1/background.png"
                        overlayImage="/assets1/Overlay/paid ads.png"
                    />
        <PostingSection
          images={[
            "/assets1/IMAGES1/PAID AD1.jpg",
            "/assets1/IMAGES1/PAID AD2.jpg",
            "/assets1/IMAGES1/PAID AD3.jpg",
            "/assets1/IMAGES1/PAID AD4.jpg",
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
          title="Social Media"
          titleSecondLine="Marketing FAQs"
          faqs={smmFaqs}
        />

      </div>
    </motion.div>
  )
}

export default Paidads
