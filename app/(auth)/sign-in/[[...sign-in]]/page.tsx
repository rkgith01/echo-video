import { SignIn } from "@clerk/nextjs";
import Link from "next/link";
import React from "react";

const SignInPage = () => {
  return (
    <main className="flex flex-col min-h-screen w-full items-center justify-center">
      <SignIn path="/sign-in" />

      <Link href={"/"} className="px-6 py-4 rounded-lg m-2 bg-orange-400 ">
        Back To Home
      </Link>
    </main>
  );
};

export default SignInPage;
