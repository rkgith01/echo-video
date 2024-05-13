import { StreamVideoProvider } from "@/providers/StreamClientProvider";
import { Metadata } from "next";
import React, { ReactNode } from "react";


export const metadata: Metadata = {
  title: "Echo",
  description: "Echo Video App a video calling and conferencing app",
  icons: {
    icon: "/logo.png",
  }
};

const MainLayout = ({ children }: { children: ReactNode }) => {
  return (
    // <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <main>
      <StreamVideoProvider>
        {children}
      </StreamVideoProvider>
    </main>
  );
};

export default MainLayout;
