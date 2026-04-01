"use client";

import { Navigation } from "@/components/Navigation";
import { HeroSection } from "@/components/HeroSection";
import { Introduction } from "@/components/Introduction";
import { ParisSection } from "@/components/ParisSection";
import { WarsawSection } from "@/components/WarsawSection";
import { SocialCapitalSection } from "@/components/SocialCapitalSection";
import { PowisleSection } from "@/components/PowisleSection";
import { PlanSection } from "@/components/PlanSection";

export default function Home() {
  return (
    <main className="w-full h-full min-h-screen relative bg-navy selection:bg-gold selection:text-navy">
      {/* Global Grain Texture Overlay */}
      <div className="bg-grain" />

      <Navigation />
      <HeroSection />
      <Introduction />
      <ParisSection />
      <WarsawSection />
      <SocialCapitalSection />
      <PowisleSection />
      <PlanSection />
      
      <footer className="bg-black py-24 text-center text-parchment/40 font-sans text-sm relative z-10 border-t border-gold/10">
        <div className="max-w-4xl mx-auto px-6">
          <div className="w-12 h-[1px] bg-gold/30 mx-auto mb-10" />
          <p className="tracking-[0.2em] uppercase text-sm font-semibold opacity-70">
            Projekt edukacyjny na podstawie powieści Bolesława Prusa
          </p>
        </div>
      </footer>
    </main>
  );
}
