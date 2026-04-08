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
    icon: "/assets1/Icons/TABNUVO ICONS/Knowing What to Say & When.png",
    title: "Knowing What to Say & When",
    description:
      "Posting content without a plan is like speaking in a meeting without knowing the agenda. We start by defining what needs to be said, when it should be said, and why it matters."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Planning for Consistency.png",
    title: "Planning for Consistency",
    description:
      "Random posting leads to random results. Like a TV show with no schedule, audiences lose interest. We plan content in advance to ensure consistency across platforms."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Managing Content with Brand Clarity.png",
    title: "Managing Content with Brand Clarity",
    description:
      "Every brand has a personality, and content should reflect that consistently. We manage content by strictly following brand guidelines and carefully choosing which trends to adopt."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Balancing Creativity & Relevance.png",
    title: "Balancing Creativity & Relevance",
    description:
      "Creative content is great, but only when it is relevant. Chasing every trend can dilute the message, while ignoring trends can make content feel dated. We strike a balance."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Reviewing, Refining & Improving.png",
    title: "Reviewing, Refining & Improving",
    description:
      "Content is not a one-time task, it is an ongoing process. Like pruning a plant, regular reviews help content grow better. We track performance, refine what works, and improve what doesn't."
  },
  {
    icon: "/assets1/Icons/TABNUVO ICONS/Knowing What to Say & When.png",
    title: "Content with purpose",
    description:
      "Content without structure runs like a headless chicken. We plan, organise, and manage content so it follows a clear flow, stays aligned with brand guidelines."
  }
];

const Content = () => {
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
                        overlayImage="/assets1/Overlay/content_managmnet.png"
                    />
        <PostingSection
          images={[
            "/assets1/IMAGES1/CONTENT MARKETING1.jpg",
            "/assets1/IMAGES1/CONTENT MARKETING2.jpg",
            "/assets1/IMAGES1/CONTENT MARKETING3.jpg",
            "/assets1/IMAGES1/CONTENT MARKETING4.jpg",
          ]}
          heading="CONTENT WITHOUT STRUCTURE RUNS LIKE A HEADLESS CHICKEN"
          text="In today's digitally driven world, where Google registers over 8.5 billion searches daily, the shift towards online commerce is undeniable. Whether it's groceries or automobiles, consumers can now conveniently order anything from the comfort of their homes. As a business owner, it's natural to wonder how to thrive in this digital landscape.
At The Ad-ults, we offer a team of seasoned industry professionals who specialize in guiding our clients towards the top spot strategically. From devising content strategies to building high-quality backlinks, our SEO experts demonstrate unparalleled proficiency in both On-page and Off-page SEO techniques."/>
        <SocialMediaMagic
          sectionTitle="Content Management Services"
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

export default Content
