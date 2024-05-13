import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import { Metadata } from "next";
import React, { ReactNode } from "react";


export const metadata: Metadata = {
  title: "Echo",
  description: "Echo Video App a video calling and conferencing app",
  icons: {
    icon: "/logo.png",
  }
};

const HomeLayout = ({ children }: { children: ReactNode }) => {
  return (
    <main className="relative">
      <Navbar/>
      <div className="flex">
        <Sidebar/>
        <section className="flex min-h-screen flex-1 flex-col px-6 pb-6 pt-28 max-md:pb-14 sm:px-14">
          <div className="w-full">{children}</div>
        </section>
      </div>
      <Footer/>
    </main>
  );
};

export default HomeLayout;
