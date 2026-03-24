import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import React from "react";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { PageLoader } from "@/components/animations/PageLoader";
import { Cursor } from "@/components/animations/Cursor";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  variable: "--font-heading",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "INNOVARE IEEE Student Branch | Innovating the Future",
  description: "We turn ideas into working tech—fast. The official website of the INNOVARE IEEE Student Branch.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark scroll-smooth">
      <head>
        <noscript>
          <style>{`
            #page-loader { display: none !important; }
            html { overflow: auto !important; }
          `}</style>
        </noscript>
      </head>
      <body
        className={cn(
          inter.variable,
          spaceGrotesk.variable,
          "antialiased font-sans bg-background text-foreground selection:bg-primary/30"
        )}
      >
        <Cursor />
        <PageLoader />
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10 w-full overflow-hidden flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
