import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/toaster";
import '@stream-io/video-react-sdk/dist/css/styles.css';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Echo",
  description: "Echo Video App a video calling and conferencing app",
  icons: {
    icon: "/logo.png",
  }
};

const clerkAppearance = {
  layout: {
    logoImageUrl: "/logo.png",
    socialButtonVariant: "iconButton",
  },
  variables: {
    colorText: "#fff",
    colorPrimary: "#0070f3",
    colorBackground: "#585454",
    colorInputBackground: "#20253e",
    colorInputText: "#fff",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <ClerkProvider appearance={clerkAppearance}>
        {/* <body className={`${inter.className} bg-dark-2 ` || "bg-[#2c2d2f]"}> */}
        <body className={`${inter.className} bg-gradient-to-r from-gray-700 via-gray-900 to-black`}>
          {children}
          <Toaster/>
        </body>
      </ClerkProvider>
    </html>
  );
}
