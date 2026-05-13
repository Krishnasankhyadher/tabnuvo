// FAQSection.jsx
import React, { useState } from "react";

// Reusable FAQ Section Component
const FAQSection = ({
  eyebrow = "FAQs",                 // small label above heading
  title = "IPSUM",                  // first line of main heading
  titleSecondLine = "GENERATORS",   // second line of main heading
  faqs = [],                        // array of { question, answer }
  className = "",                   // extra classes for layout tweaks per page
}) => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex((prev) => (prev === index ? null : index));
  };

  // If no FAQs passed, don't render anything (or you can show a fallback text)
  if (!faqs.length) return null;

  return (
    <section
      className={`w-full px-6 md:px-12 lg:px-20 py-10 bg-white border-b-4 border-green-200 text-left ${className}`}
    >
      {/* Heading */}
      <div className="mb-8">
        {eyebrow && (
          <p className="text-sm md:text-base font-semibold text-gray-500">
            {eyebrow}
          </p>
        )}
        <h2 className="text-4xl md:text-5xl font-extrabold leading-tight">
          {title}
          <br />
          {titleSecondLine}
        </h2>
      </div>

      {/* FAQ List */}
      <div className="divide-y divide-gray-300 border-t border-b border-gray-300">
        {faqs.map((item, index) => (
          <div key={index}>
            <button
              onClick={() => toggleFAQ(index)}
              className="w-full flex items-center justify-between py-4 md:py-6 text-left focus:outline-none"
            >
              <span className="text-lg md:text-xl font-semibold text-gray-900">
                {item.question}
              </span>

              <span
                className={`text-2xl md:text-3xl font-bold transition-transform duration-200 ${
                  openIndex === index ? "rotate-45" : ""
                }`}
              >
                +
              </span>
            </button>

            {openIndex === index && (
              <div className="pb-5 pr-4 text-base md:text-lg text-gray-700">
                {item.answer}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
};

export default FAQSection;
