import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import React from "react";
import "./globals.css";
import { cn } from "@/lib/utils";
import { SmoothScroll } from "@/components/animations/SmoothScroll";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-sans",
  display: 'swap',
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-serif",
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: 'swap',
});

export const metadata: Metadata = {
  title: "INNOVARE IEEE Student Branch",
  description: "A community of passionate innovators and tech enthusiasts building solutions that create a better tomorrow.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light scroll-smooth">
      <body
        className={cn(
          plusJakartaSans.variable,
          instrumentSerif.variable,
          jetbrainsMono.variable,
          "antialiased font-sans bg-background text-foreground selection:bg-accent/30"
        )}
      >
        <SmoothScroll>
          <Navbar />
          <main className="relative z-10 w-full overflow-hidden flex flex-col">{children}</main>
          <Footer />
        </SmoothScroll>
      </body>
    </html>
  );
}
