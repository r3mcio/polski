"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { QuoteTooltip } from "./QuoteTooltip";

export function ParisSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="paryz" ref={containerRef} className="py-24 md:py-32 relative z-10 overflow-hidden">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,var(--color-burgundy)_0%,transparent_50%)] opacity-[0.15] pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-16 relative z-20"
        >
          <span className="text-gold font-sans tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-semibold block">Paryż – miasto jako organizm</span>
          <h2 className="text-5xl md:text-7xl font-serif text-gold mb-6 tracking-tight drop-shadow-[0_10px_24px_rgba(0,0,0,0.8)]">
            Logika struktury:<br/><span className="italic">Wielka Gąsienica</span>
          </h2>
          <div className="w-20 h-[2px] bg-gradient-to-r from-gold/80 to-burgundy/60" />
        </motion.div>

        {/* Clean Editorial Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 mt-12 relative">
          
          {/* Text Content */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative z-20 pl-8 lg:pl-12 order-2 lg:order-1 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-gradient-to-b before:from-gold/60 before:to-burgundy/40"
          >
            <p className="text-xl md:text-2xl text-white font-serif drop-cap leading-[1.8] mb-8">
              Paryż nie jest zbiorem budynków, lecz sprawnie funkcjonującym, potężnym organizmem. Jego <QuoteTooltip phrase="anatomię opiera się" quote="[...] Paryż, budowany przez kilkanaście wieków, przez miliony ludzi, nie wiedzących o sobie i nie myślących o żadnym planie, ma jednakże plan, tworzy całość, nawet bardzo logiczną." /> na tzw. „osi krystalizacji” – głównej linii komunikacyjnej biegnącej od placu Bastylii do Łuku Gwiazdy. Z lotu ptaka układ ten przypomina kształt olbrzymiej gąsienicy.
            </p>
            <p className="text-xl md:text-2xl text-white/90 font-serif leading-[1.8]">
              To miasto posiada fizjologię: ruch ludzki i transport odbywają się tu bez zatorów, a monumentalne gmachy powstają jako naturalny efekt systemowej pracy, która – dzięki świetnej organizacji – wydaje się niemal pozbawiona wysiłku.
            </p>
          </motion.div>

          {/* Parallax Image */}
          <div className="lg:col-span-7 h-[500px] md:h-[700px] w-full relative z-10 overflow-hidden shadow-2xl rounded-sm border border-white/10 order-1 lg:order-2">
            <motion.div 
              style={{ y: imageY }}
              className="absolute -inset-[10%] w-[120%] h-[120%]"
            >
              <img 
                src="/paris.png"
                alt="Paris Architecture"
                className="w-full h-full object-cover opacity-90"
                style={{ filter: "brightness(0.9)" }}
              />
              {/* Burgundy Tint Overlay */}
              <div className="absolute inset-0 bg-burgundy/20 mix-blend-overlay pointer-events-none" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#070913]/90 via-[#070913]/20 to-transparent pointer-events-none" />
          </div>

        </div>
      </div>
    </section>
  );
}
