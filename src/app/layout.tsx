import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "../styles/globals.css"
import Navigation from "@/components/global/Navigation";
import CornerAccents from "@/components/effects/CornerAccents";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Brandon Tran",
  description: "Software Engineer building with innovation and impact in mind.",
  icons: {
    icon: "/brdntranlogo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} antialiased`}
      >
        {/* Corner accents on all pages */}
        <CornerAccents />
        
        <div className="min-h-screen overflow-y-auto px-8 sm:px-12 md:px-16 lg:px-24 py-16 md:py-24 relative">
          <Navigation/>
          {children}
        </div>
      </body>
    </html>
  );
}
