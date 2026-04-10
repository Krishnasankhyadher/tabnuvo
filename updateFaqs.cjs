const fs = require('fs');
const path = require('path');

const faqsData = {
  Seo: {
    title: 'SEO',
    titleSecondLine: 'FAQs',
    filename: 'Seo.jsx',
    faqs: [
      { question: 'Why is SEO important for my business?', answer: 'SEO, or Search Engine Optimization, is crucial for enhancing your online visibility and ranking higher on search engine results pages (SERPs). It helps potential customers find your website organically, boosting traffic and ultimately increasing conversions.' },
      { question: 'How long does it take to see results from SEO efforts?', answer: 'While some improvements may be noticed within a few weeks, significant results typically manifest over several months. SEO is a long-term strategy that requires consistent effort and patience for optimal outcomes.' },
      { question: 'Can I manage SEO on my own, or do I need professional assistance?', answer: 'While basic SEO practices can be implemented independently, achieving substantial results often requires expertise and dedicated resources. Our team of seasoned professionals specializes in navigating the complexities of SEO to help your business thrive online.' },
      { question: 'What sets Tabnuvo apart from other digital marketing agencies?', answer: 'At Tabnuvo, we pride ourselves on our team of seasoned industry professionals who possess unparalleled proficiency in both On-page and Off-page SEO techniques. We prioritize strategic guidance tailored to your business needs, ensuring sustainable growth in the competitive digital landscape.' }
    ]
  },
  Paidads: {
    title: 'Paid Ads',
    titleSecondLine: 'FAQs',
    filename: 'Paidads.jsx',
    faqs: [
      { question: 'Where Can You Advertise With PPC Ads?', answer: 'Also known as Pay-Per-Click, PPC is offered by the social networks like Facebook and Twitter in the form of Facebook and Twitter ads, search engines like Google as Google ads.' },
      { question: 'Do People Really Click On Online PPC Ads?', answer: 'People do click on paid ads if the product or service interests them. For each ad clicked, the marketer ought to pay the search engine.' },
      { question: 'What businesses can/ should advertise online?', answer: 'Irrespective of domains, both SMEs and MNCs can run PPC campaigns to drive traffic and generate potential leads to reach out to real-time audiences and flourish their ROI.' },
      { question: 'Why Advertise With Pay-per-click Ads?', answer: 'The PPC model has had a record of generating huge traffic and potential lead conversions by advertising products and/or services to a targeted group of people who are searching them with certain keywords.' }
    ]
  },
  Branding: {
    title: 'Branding',
    titleSecondLine: 'FAQs',
    filename: 'Branding.jsx',
    faqs: [
      { question: 'Why is branding important for my business?', answer: 'Branding defines how your business is perceived. It builds trust, creates recognition, and helps you stand out in a competitive market.' },
      { question: 'What does a complete branding package include?', answer: 'It typically includes logo design, color palette, typography, brand guidelines, and communication tone to ensure consistency across all platforms.' },
      { question: 'How long does the branding process take?', answer: 'Depending on complexity, branding can take anywhere from 2 to 6 weeks, ensuring every element aligns with your vision.' },
      { question: 'Can you rebrand an existing business?', answer: 'Yes, we specialize in rebranding strategies that modernize your identity while retaining your brand’s core essence.' }
    ]
  },
  Servicedesign: {
    title: 'Service Design',
    titleSecondLine: 'FAQs',
    filename: 'Servicedesign.jsx',
    faqs: [
      { question: 'What is service design?', answer: 'Service design focuses on improving the overall customer journey by aligning your business processes with user needs.' },
      { question: 'Why is service design important?', answer: 'It enhances customer satisfaction, improves efficiency, and creates seamless experiences that build long-term loyalty.' },
      { question: 'What industries benefit from service design?', answer: 'Hospitality, healthcare, retail, SaaS, and almost every service-based business can benefit from it.' },
      { question: 'How do you approach service design?', answer: 'We analyze user behavior, map journeys, identify gaps, and design solutions that improve both user experience and business performance.' }
    ]
  },
  Productdesign: {
    title: 'Product Design',
    titleSecondLine: 'FAQs',
    filename: 'Productdesign.jsx',
    faqs: [
      { question: 'What does product design include?', answer: 'Product design covers ideation, prototyping, design aesthetics, usability, and functionality of a product.' },
      { question: 'How does good product design impact sales?', answer: 'A well-designed product enhances usability and appeal, increasing customer satisfaction and driving higher conversions.' },
      { question: 'Do you design physical or digital products?', answer: 'We work on both—ranging from packaging design to digital product interfaces.' },
      { question: 'Can you help improve an existing product?', answer: 'Yes, we refine and optimize existing products to enhance performance, usability, and market appeal.' }
    ]
  },
  UIux: {
    title: 'UI/UX Design',
    titleSecondLine: 'FAQs',
    filename: 'UIux.jsx',
    faqs: [
      { question: 'What is the difference between UI and UX?', answer: 'UI (User Interface) focuses on visual design, while UX (User Experience) ensures the product is easy and enjoyable to use.' },
      { question: 'Why is UI/UX important for my website or app?', answer: 'It improves usability, reduces bounce rates, and increases conversions by delivering a smooth user journey.' },
      { question: 'How do you ensure a user-friendly design?', answer: 'We conduct user research, create wireframes, test prototypes, and continuously optimize based on feedback.' },
      { question: 'Do you redesign existing websites/apps?', answer: 'Yes, we analyze current performance and redesign interfaces to improve engagement and usability.' }
    ]
  },
  WebsiteDesign: {
    title: 'Website',
    titleSecondLine: 'Development FAQs',
    filename: 'WebsiteDesign.jsx',
    faqs: [
      { question: 'What types of websites do you develop?', answer: 'We create business websites, portfolios, landing pages, and custom web platforms tailored to your needs.' },
      { question: 'How long does it take to develop a website?', answer: 'Typically, it takes 2–8 weeks depending on the complexity and features required.' },
      { question: 'Will my website be mobile-friendly?', answer: 'Yes, all our websites are fully responsive and optimized for all devices.' },
      { question: 'Do you provide website maintenance?', answer: 'Yes, we offer ongoing support, updates, and performance optimization services.' }
    ]
  },
  Softwaredevlopment: {
    title: 'Software',
    titleSecondLine: 'Development FAQs',
    filename: 'Softwaredevlopment.jsx',
    faqs: [
      { question: 'What kind of software solutions do you offer?', answer: 'We develop custom software, SaaS platforms, automation tools, and enterprise solutions.' },
      { question: 'Can you build software tailored to my business needs?', answer: 'Absolutely. We specialize in custom-built solutions aligned with your specific requirements.' },
      { question: 'How do you ensure software quality?', answer: 'We follow rigorous testing, quality checks, and performance optimization throughout the development process.' },
      { question: 'Do you provide post-launch support?', answer: 'Yes, we offer maintenance, updates, and technical support after deployment.' }
    ]
  },
  Ecommerce: {
    title: 'E-commerce',
    titleSecondLine: 'Management FAQs',
    filename: 'Ecommerce.jsx',
    faqs: [
      { question: 'What does e-commerce management include?', answer: 'It includes product listing, inventory management, order processing, performance tracking, and marketing.' },
      { question: 'Which platforms do you support?', answer: 'We work with Amazon, Flipkart, Myntra, BlinkIt, Swiggy Instamart, Zepto and many other ecommerce and Quick Commerce platforms.' },
      { question: 'How can e-commerce management improve sales?', answer: 'By optimizing listings, managing operations efficiently, and running targeted campaigns to increase conversions.' },
      { question: 'Do you handle customer support for e-commerce?', answer: 'Yes, we can assist with customer queries, returns, and overall experience management.' }
    ]
  },
  Content: {
    title: 'Content',
    titleSecondLine: 'Management FAQs',
    filename: 'Content.jsx',
    faqs: [
      { question: 'What is content management?', answer: 'It involves creating, organizing, updating, and optimizing content across your digital platforms.' },
      { question: 'Why is content important for my business?', answer: 'Effective communication is the key to efficient business. With good content management you can communicate your vision and mission as well as details about your products and services effectively.' },
      { question: 'What type of content do you manage?', answer: 'We handle website content, blogs, social media, product descriptions, and marketing materials.' },
      { question: 'Do you provide content strategy as well?', answer: 'Yes, we create data-driven content strategies aligned with your brand goals.' }
    ]
  },
  Bussiness: {
    title: 'Business',
    titleSecondLine: 'Consulting FAQs',
    filename: 'Bussiness.jsx',
    faqs: [
      { question: 'What does business consulting involve?', answer: 'It includes strategic planning, process improvement, market analysis, and growth strategies.' },
      { question: 'How can consulting help my business grow?', answer: 'It provides expert insights, identifies opportunities, and helps you make informed decisions for sustainable growth.' },
      { question: 'Do you work with startups or established businesses?', answer: 'We work with both—helping startups build foundations and established businesses scale further.' },
      { question: 'What makes your consulting approach unique?', answer: 'We focus on practical, results-driven strategies tailored to your specific business challenges and goals.' }
    ]
  }
};

const pagesDir = 'c:/Users/Lenovo/OneDrive/Desktop/website/frontend/src/pages';

for (const [key, data] of Object.entries(faqsData)) {
  const filepath = path.join(pagesDir, data.filename);
  if (!fs.existsSync(filepath)) {
    console.log(`Error: File not found: ${filepath}`);
    continue;
  }

  let content = fs.readFileSync(filepath, 'utf8');
  
  // Replace the faq array:
  const faqString = `const ${key}Faqs = ` + JSON.stringify(data.faqs, null, 2).replace(/\"/g, '"') + ';';
  
  // Find the exact block. In these files it's typically: const smmFaqs = [ ... ];
  content = content.replace(/const\s+smmFaqs\s*=\s*\[[\s\S]*?\];/g, faqString);
  // Just in case it was already replaced
  content = content.replace(/const\s+\w+Faqs\s*=\s*\[[\s\S]*?\];/g, faqString);
  
  // Replace the tags in FAQSection
  // <FAQSection\s+eyebrow="FAQs"\s+title="Social Media"\s+titleSecondLine="Marketing FAQs"\s+faqs=\{smmFaqs\}\s*\/>
  content = content.replace(
    /<FAQSection[\s\S]*?faqs=\{.*?\}\s*\/>/g,
    `<FAQSection
          eyebrow="FAQs"
          title="${data.title}"
          titleSecondLine="${data.titleSecondLine}"
          faqs={${key}Faqs}
        />`
  );
  
  fs.writeFileSync(filepath, content, 'utf8');
  console.log(`Updated ${data.filename}`);
}
