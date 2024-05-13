import CallList from "@/components/CallList";
import { SquareChevronLeft } from "lucide-react";
import React from "react";

const Previous = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <SquareChevronLeft size={30} />
        <span>Previous</span>
      </h1>

      <CallList type="ended" />
    </section>
  );
};

export default Previous;
