import Hero from "@/components/Hero";
import LandingNav from "@/components/LandingNav";
import LandingContent from "@/components/LandingContent";
import LandingFooter from "@/components/LandingFooter";

const LandingPage = () => {
  return (
    <>
      <LandingNav/>
      <Hero/>
      <LandingContent/>
      <LandingFooter/> 
    </>
  );
};

export default LandingPage;
