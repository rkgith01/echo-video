"use client";
/* eslint-disable @next/next/no-img-element */
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const LandingNav = () => {
  const { isSignedIn } = useAuth();

  return (
    <div>
      <header className="p-4  text-gray-200">
        <div className="container flex items-center justify-between h-16 mx-auto">
          <div className="flex">
            <a
              rel="noopener noreferrer"
              href="/"
              aria-label="Back to homepage"
              className="flex items-center p-2"
            >
              <img src="/logo.png" alt="logo" className="w-10 h-10" />
            </a>
          </div>
          <div className="items-center flex-shrink-0  lg:flex">
            <Link href={isSignedIn ? "/home" : "/sign-in"}>
              <Button
                className="px-6 py-2 font-semibold rounded bg-amber-600 hover:bg-orange-600 text-black"
                // className="bg-gradient-to-br from-blue-500 via-amber-400 to-green-600 rounded-full px-4 py-3"
              >
                {isSignedIn ? "Home" : "Log In"}
              </Button>
            </Link>
          </div>
        </div>
      </header>
    </div>
  );
};

export default LandingNav;
