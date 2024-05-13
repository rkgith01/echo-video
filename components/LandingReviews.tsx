/* eslint-disable @next/next/no-img-element */
import React from "react";

const Testimonial = ({
  content,
  author,
  occupation,
  imageUrl,
}: {
  content: string;
  author: string;
  occupation: string;
  imageUrl: string;
}) => {
  return (
    <div className="flex flex-col max-w-sm mx-4 my-6 shadow-lg">
      <div className="px-4 py-12 rounded-t-lg sm:px-8 md:px-12 dark:bg-gray-50">
        <p className="relative px-6 py-1 text-lg italic text-center dark:text-gray-800">
          {content}
        </p>
      </div>
      <div className="flex flex-col items-center justify-center p-8 rounded-b-lg dark:bg-amber-600 dark:text-gray-50">
        <img
          src={imageUrl}
          alt=""
          className="w-16 h-16 mb-2 -mt-16 bg-center bg-cover rounded-full"
        />
        <p className="text-xl font-semibold leading-tight">{author}</p>
        <p className="text-sm uppercase">{occupation}</p>
      </div>
    </div>
  );
};

const LandingReviews = () => {
  // Testimonial data
  const testimonials = [
    {
      content:
        "I've been using Echo for all my video calls, and it's been a game-changer for me! The clarity and reliability are top-notch.",
      author: "Jack Doe",
      occupation: "Software Engineer",
      imageUrl: "https://source.unsplash.com/50x50/?portrait?1",
    },
    {
      content:
        "Echo has revolutionized how I connect with my team. The ease of use coupled with exceptional video quality makes it my go-to choice.",
      author: "Jane Smith",
      occupation: "Marketing Manager",
      imageUrl: "https://source.unsplash.com/50x50/?portrait?2",
    },
    {
      content:
        "As a freelancer, Echo has become an indispensable tool for client meetings. It's professional, reliable, and incredibly easy to use.",
      author: "Michael Johnson",
      occupation: "Freelance Graphic Designer",
      imageUrl: "https://source.unsplash.com/50x50/?portrait?3",
    },
    {
      content:
        "Echo's features and performance exceed expectations. It's truly a next-level video calling experience for both personal and professional use.",
      author: "Emily Brown",
      occupation: "Business Consultant",
      imageUrl: "https://source.unsplash.com/50x50/?portrait?4",
    },
  ];

  return (
    <div>
      <section
        className="my-8 dark:bg-gray-100 dark:text-gray-800"
        id="reviews"
      >
        <div className="container flex flex-col items-center mx-auto mb-12 md:p-10 md:px-12">
          <h1 className="p-4 text-4xl font-semibold leading-none text-center">
            Echo&apos;s Testimonials
          </h1>
        </div>
        <div className="flex items-center justify-center ">
          <a href="#faq">
            <p className="font-light hover:font-extrabold bg-orange-300 px-4 py-2 rounded-lg text-black">
              Have any questions
            </p>
          </a>
        </div>
        <div className="container flex flex-col items-center justify-center mx-auto lg:flex-row lg:flex-wrap lg:justify-evenly lg:px-10">
          {testimonials.map((testimonial, index) => (
            <Testimonial key={index} {...testimonial} />
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingReviews;
