import CallList from "@/components/CallList";
import { Video } from "lucide-react";
import React from "react";

const Recordings = () => {
  return (
    <section className="flex size-full flex-col gap-10 text-white">
      <h1 className="text-3xl font-bold flex items-center gap-2">
        <Video size={35} />
        <span>Recordings</span>
      </h1>
      <CallList type="recordings" />
    </section>
  );
};

export default Recordings;
