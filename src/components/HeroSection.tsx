"use client";

import { motion } from "framer-motion";

export function HeroSection() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden bg-navy pt-20">
      <div
        className="absolute inset-0 z-0 opacity-30 mix-blend-overlay"
        style={{
          backgroundImage: "url('/hero_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8) blur(2px)"
        }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-navy/90 via-navy/70 to-parchment/30 z-0" />
      {/* Blend into the next section */}
      <div className="absolute inset-x-0 bottom-0 h-64 bg-gradient-to-t from-navy to-transparent z-0 pointer-events-none" />
      <div className="relative z-10 text-center px-6 max-w-6xl mx-auto space-y-10 mt-12">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 30 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          transition={{ duration: 1.2, ease: [0.16, 1, 0.3, 1] }}
        >
          <h1 className="text-5xl md:text-7xl lg:text-[7rem] font-serif text-parchment leading-[1.1] tracking-tight drop-shadow-[0_10px_24px_rgba(0,0,0,0.8)]">
            Dwie stolice,<br className="hidden md:block" /> dwa światy
          </h1>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.2, delay: 0.5 }}
        >
          <div className="w-24 h-[2px] bg-gold mx-auto mb-8" />
          <p className="text-xl md:text-3xl text-parchment/90 font-serif italic max-w-4xl mx-auto leading-relaxed">
            Warszawa i Paryż – anatomia postępu i stagnacji
          </p>
        </motion.div>
      </div>
    </section>
  );
}
