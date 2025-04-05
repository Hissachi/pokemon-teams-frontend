'use client';

import { BackgroundSlideshow } from "@/components/layout/background-slide";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { HeroSection } from "@/components/section/hero-section";

export default function Home() {
  return (
    <div className="relative min-h-screen overflow-hidden">
      <BackgroundSlideshow />
      
      <Navbar />
      
      <main className="pt-28 pb-16 px-4 min-h-screen">
        <HeroSection />
      </main>
      
      <Footer />
    </div>
  );
}