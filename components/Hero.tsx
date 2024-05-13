/* eslint-disable @next/next/no-img-element */
"use client";
import { useAuth } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";

const Hero = () => {
  const { isSignedIn } = useAuth();

  return (
    <div>
      <section>
        <div className="bg-gray-900">
          <div className="container flex flex-col items-center px-4 py-16 pb-24 mx-auto text-center lg:pb-56 md:py-32 md:px-10 lg:px-32 text-gray-50">
            <h1 className="text-5xl font-bold leading-none sm:text-6xl xl:max-w-3xl text-gray-50">
              Welcome to Echo
            </h1>
            <p className="mt-6 mb-8 text-lg sm:mb-12 xl:max-w-3xl text-gray-50">
              Connect with your friends and colleagues effortlessly, anytime,
              anywhere.
            </p>
            <div className="flex flex-wrap justify-center">
              {/* <a href="/sign-up">
                <button
                  type="button"
                  className="px-8 py-3 m-2 text-lg font-semibold rounded bg-orange-400 text-gray-900"
                >
                  Get started
                </button>
              </a> */}
              <Link href={isSignedIn ? "/home" : "/sign-up"}>
                <Button
                  className="px-8 py-7 m-2 text-lg font-semibold rounded bg-orange-400 text-gray-900 hover:bg-transparent hover:text-amber-500 hover:border-amber-500 hover:border-2"
                  // className="bg-gradient-to-br from-blue-500 via-amber-400 to-green-600 rounded-full px-4 py-3"
                >
                  {isSignedIn ? "Home" : "Get Started"}
                </Button>
              </Link>
              <Link href="#features">
                <Button
                  type="button"
                  className="px-8 py-7 m-2 text-lg border rounded border-orange-300 text-orange-200 hover:bg-orange-400 hover:text-gray-900 "
                >
                  Learn more
                </Button>
              </Link>
            </div>
          </div>
        </div>
        <img
          // src="https://source.unsplash.com/random/480x320"
          src="/echo_1.png"
          alt="hero-logo"
          className="w-5/6 mx-auto mb-12 -mt-20 bg-gray-500 rounded-lg shadow-md lg:-mt-40"
        />
      </section>
    </div>
  );
};

export default Hero;

function smoothScrollTo(id: string) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: "smooth" });
  }
}
