"use client";
import React, { useState } from "react";
import { faqs } from "@/constants"; // Assuming faqs are imported from somewhere

const LandingFaq = () => {
  const [openQuestion, setOpenQuestion] = useState<number | null>(null);

  const handleToggle = (index: number) => {
    setOpenQuestion((prevIndex) => (prevIndex === index ? null : index));
  };

  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800" id="faq">
        <div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
          <h2 className="text-2xl font-semibold sm:text-4xl">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 mb-8 dark:text-gray-600">
            We hope below questions are helpful to your queries.
          </p>
          <div className="space-y-4">
            
            {faqs.map((faq, i) => (
              <details
                key={i}
                open={openQuestion === i}
                onClick={() => handleToggle(i)}
                className="w-full border rounded-lg cursor-pointer"
              >
                <summary className="px-4 py-6 focus:outline-none focus-visible:dark:ring-amber-600">
                  {faq.question}
                </summary>
                <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-gray-600">
                  {faq.answer}
                </p>
              </details>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default LandingFaq;
