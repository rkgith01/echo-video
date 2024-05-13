import React from "react";
import LandingFeatures from "./LandingFeatures";
import LandingReviews from "./LandingReviews";
import LandingFaq from "./LandingFaq";
import SmoothScroll from "./SmoothScroll";

const LandingContent = () => {
  return (
    <div>
      <LandingFeatures />
      <LandingReviews />
      <LandingFaq />
      <SmoothScroll />
    </div>
  );
};

export default LandingContent;
