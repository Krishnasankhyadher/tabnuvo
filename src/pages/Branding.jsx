import React from 'react'
import Hero from '../components/Hero'
import PostingSection from '../components/Design'
import SocialMediaMagic from '../components/Compo'
import Contact from "../components/Contact";
import FAQSection from '../components/Faq';

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
    icon: "/assets/is1.jpg",
    title: "Platform analysis and prioritizing",
    description:
      "Consider someone having lunch while sitting in a bathtub – not exactly a flattering sight, is it? Similarly, prioritizing specific social media platforms for your business and tailoring your content accordingly can capture the attention of your audience, generate engagement and helps you generate business."
  },
  {
    icon: "/assets/is2.jpg",
    title: "Strategic Content Creation",
    description:
      "Beyond mere icons, images, and text, we adopt a comprehensive approach to content creation. By utilizing the influence of shape, typography, and color psychology, we breathe vitality into our designs, ensuring they authentically reflect the brand's vision."
  },
  {
    icon: "/assets/is3.jpg",
    title: "Content planning",
    description:
      "When you’re building a brand, the most important component you’ll be needing is storytelling and philosophy. Content planning works as the vessel that helps brands portray their story and what they stand for in a fun and captivating way."
  },
  {
    icon: "/assets/is4.jpg",
    title: "Social Media Campaigns",
    description:
      "Social media campaigns is all about targeting that emotion and building on it. We craft campaigns that stand apart from the crowd, are catchy and are sure to give life to your brand. Our 12+ years of content experience helps us in having a strong understanding of people’s emotions."
  },
  {
    icon: "/assets/is5.jpg",
    title: "Meta Ads",
    description:
      "Our team of Meta Ads specialists can help you reach your target audience with precise targeting, captivating ad formats, and detailed analytics. Whether you aim to enhance brand visibility, boost website traffic, or generate leads, we craft impactful Facebook ad campaigns that deliver results."
  },
  {
    icon :"/assets/is6.jpg",
    title: "Meme Marketing",
    description:
      "This one is fun! See the rhyming there? Standing beyond the regular marketing techniques, this form of marketing can be utilised to sneak in your brand so quietly that people won’t even know what hit them! It's one of the most successful ways of marketing because of one simple reason - everyone loves memes!"
  }
];

const Branding = () => {
  return (
    <div>
          <Hero
                bgImage="/assets/contact.png"
                overlayImage="/assets/branding.png"
              />
              <PostingSection
      images={[
        "/assets/iw1.jpg",
        "/assets/iw2.jpg",
        "/assets/iw3.jpg",
        "/assets/iw4.jpg",
      ]}
      heading="BRANDING DESIGN"
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
        title="Social Media"
        titleSecondLine="Marketing FAQs"
        faqs={smmFaqs}
      />
      
    </div>
  )
}

export default Branding
