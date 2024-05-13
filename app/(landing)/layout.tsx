import React from "react";
// bg-[#2c2d2f]

const LandingLaout = ({ children }: { children: React.ReactNode }) => {
  return (
    <main className="h-full overflow-auto text-white">
      <div className="mx-auto max-w-screen-xl h-full">{children}</div>
    </main>
  );
};

export default LandingLaout;
