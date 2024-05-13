"use client";
import { ArrowUpCircle } from "lucide-react";
import React, { useEffect, useState } from "react";

const SmoothScroll = () => {
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <>
      {showScroll && (
        <div className="fixed bottom-4 right-4">
          <button
            className="bg-orange-400 hover:bg-orange-700 text-blue-950 font-bold py-2 px-2 rounded-full"
            onClick={scrollToTop}
          >
            <ArrowUpCircle size={30} />
          </button>
        </div>
      )}
    </>
  );
};

export default SmoothScroll;
