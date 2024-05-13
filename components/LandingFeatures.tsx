/* eslint-disable @next/next/no-img-element */
import { Check } from "lucide-react";
import React from "react";

// Reusable feature item component
const FeatureItem = ({
  icon,
  title,
  description,
}: {
  icon: any;
  title: string;
  description: string;
}) => (
  <div className="flex">
    <div className="flex-shrink-0">
      <div className="flex items-center justify-center w-12 h-12 rounded-md dark:bg-amber-600 dark:text-gray-50">
        {icon}
      </div>
    </div>
    <div className="ml-4">
      <h4 className="text-lg font-medium leading-6 dark:text-gray-900">
        {title}
      </h4>
      <p className="mt-2 dark:text-gray-600">{description}</p>
    </div>
  </div>
);

const LandingFeatures = () => {
  // Data for feature items
  const features = [
    {
      icon: <Check />,
      title: "Screen Sharing",
      description:
        "Share your screen seamlessly with others during calls, making collaboration effortless.",
    },
    {
      icon: <Check />,
      title: "High Quality",
      description: "Experience crystal-clear video and audio quality.",
    },
    {
      icon: <Check />,
      title: "Secure",
      description: "End-to-end encryption ensures your privacy and security.",
    },
  ];

  const scrollToFeature = () => {
    const element = document.getElementById("features");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div>
      <section className="dark:bg-gray-100 dark:text-gray-800" id="features">
        <div className="container max-w-xl p-6 py-12 mx-auto space-y-24 lg:px-8 lg:max-w-7xl">
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-center sm:text-5xl dark:text-gray-900">
              Feature Showcase
            </h2>
            <p className="max-w-3xl mx-auto mt-4 text-xl text-center dark:text-gray-600">
              Explore the powerful features of our video call platform.
            </p>
          </div>
          <div className="flex items-center justify-center ">
            <a href="#reviews" className="text-md text-center ">
              <p className="mt-4 bg-orange-300 px-2 py-1 rounded-lg text-gray-900 font-light hover:font-extrabold">
                Read what others have been saying about us
              </p>
            </a>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                Screen Sharing
              </h3>
              <p className="mt-3 text-lg dark:text-gray-600">
                Share your screen seamlessly with others during calls, making
                collaboration effortless.
              </p>
              <div className="mt-12 space-y-12">
                {features.map((feature, index) => (
                  <FeatureItem key={index} {...feature} />
                ))}
              </div>
            </div>
            <div aria-hidden="true" className="mt-10 lg:mt-0">
              <img
                // src="https://source.unsplash.com/random/360x480"
                src="/echo_5.png"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
          <div className="grid lg:gap-8 lg:grid-cols-2 lg:items-center">
            <div className="lg:col-start-2">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl dark:text-gray-900">
                Schedule Meetings
              </h3>
              <p className="mt-3 text-lg dark:text-gray-600">
                Customize your environment with virtual backgrounds, adding fun
                and professionalism to your calls.
              </p>
              <div className="mt-12 space-y-12">
                {features.map((feature, index) => (
                  <FeatureItem key={index} {...feature} />
                ))}
              </div>
            </div>
            <div className="mt-10 lg:mt-0 lg:col-start-1 lg:row-start-1">
              <img
                // src="https://source.unsplash.com/random/361x481"
                src="/echo_2.png"
                alt=""
                className="mx-auto rounded-lg shadow-lg dark:bg-gray-500"
              />
            </div>
          </div>
          {/* <div>
          </div> */}
        </div>
      </section>
    </div>
  );
};

export default LandingFeatures;
