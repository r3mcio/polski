"use client";

import { motion } from "framer-motion";

export function Introduction() {
  return (
    <section className="py-24 md:py-40 relative z-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10 mt-8">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
          
          {/* Left Side: Introduction Text */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut" }}
            className="lg:col-span-6 space-y-8"
          >
            <div>
              <span className="text-gold font-sans tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-semibold block">Zderzenie Cywilizacji</span>
              <h2 className="text-4xl md:text-5xl font-serif text-gold mb-6 tracking-tight drop-shadow-[0_10px_24px_rgba(0,0,0,0.8)]">
                Dwie stolice,<br/><span className="italic">na jednym kontynencie</span>
              </h2>
              <div className="w-24 h-[1px] bg-gold/50" />
            </div>

            <p className="text-xl md:text-2xl font-serif text-white/90 leading-[1.8] text-pretty">
              Stojąc nad brzegiem Wisły, a potem nad Sekwaną, trudno uwierzyć, że te dwa miasta leżą na tym samym kontynencie.
            </p>
            
            <p className="text-lg md:text-xl font-serif text-white/50 leading-[1.8] text-pretty font-light">
              Podczas gdy jedno przypomina sprawnie działający, potężny organizm, drugie zdaje się być chaotycznym zbiorem przypadkowych budowli i zmarnowanych szans. Analizując Warszawę i Paryż końca XIX wieku, widzimy nie tylko różnicę w architekturze, ale przede wszystkim przepaść w mentalności ich mieszkańców.
            </p>
          </motion.div>

          {/* Right Side: Atmospheric Image (The Train Station/Gateway) */}
          <motion.div 
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
            className="lg:col-span-6 relative"
          >
            {/* The Image inside an archway shape */}
            <div className="aspect-[3/4] md:aspect-square lg:aspect-[4/5] w-full relative overflow-hidden rounded-t-[10rem] md:rounded-t-[15rem] shadow-2xl border border-white/5 bg-[#070913]">
              <div className="w-full h-full relative overflow-hidden">
                <img 
                  src="/introduction.png" 
                  alt="Paryż jako rozwinięte miasto"
                  className="w-full h-full object-cover opacity-80 mix-blend-screen"
                  style={{ filter: "contrast(110%) brightness(0.95)" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-transparent" />
                <div className="absolute inset-x-0 bottom-0 h-1/2 bg-gradient-to-t from-[#070913] to-transparent pointer-events-none" />
              </div>
            </div>
            
            {/* Decorative orbit/accent behind the image */}
            <div className="absolute -bottom-6 -left-6 md:-bottom-10 md:-left-10 w-32 h-32 md:w-64 md:h-64 border border-gold/10 rounded-full animate-[spin_40s_linear_infinite] pointer-events-none" />
            <div className="absolute top-20 -right-10 w-20 h-20 md:w-40 md:h-40 border border-white/5 rounded-full animate-[spin_30s_linear_infinite_reverse] pointer-events-none" />
          </motion.div>

        </div>
      </div>
    </section>
  );
}
