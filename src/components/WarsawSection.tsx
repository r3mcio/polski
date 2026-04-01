"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export function WarsawSection() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"]
  });

  const imageY = useTransform(scrollYProgress, [0, 1], ["0%", "20%"]);

  return (
    <section id="warszawa" ref={containerRef} className="py-24 md:py-32 relative overflow-hidden torn-edge-top border-t border-charcoal/30">
      {/* Background Radial Glow */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,var(--color-burgundy)_0%,transparent_50%)] opacity-[0.12] pointer-events-none" />
      
      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">
        
        <div className="grid grid-cols-1 lg:grid-cols-12 items-center gap-16 mt-12 relative">
          
          {/* Parallax Image (Left side) */}
          <div className="lg:col-span-7 h-[500px] md:h-[700px] w-full relative z-10 overflow-hidden shadow-2xl rounded-sm border border-white/10 order-1">
             <motion.div 
              style={{ y: imageY }}
              className="absolute -inset-[10%] w-[120%] h-[120%]"
            >
              <img 
                src="/warsaw.png"
                alt="Warsaw Chaos Powisle"
                className="w-full h-full object-cover opacity-90"
                style={{ filter: "brightness(0.8)" }}
              />
              {/* Burgundy Tint Overlay */}
              <div className="absolute inset-0 bg-burgundy/25 mix-blend-multiply pointer-events-none" />
            </motion.div>
            <div className="absolute inset-0 bg-gradient-to-t from-[#070913]/90 via-[#070913]/20 to-transparent pointer-events-none" />
          </div>

          {/* Text Card (Right side) */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="lg:col-span-5 relative z-20 pl-8 lg:pl-12 order-2 mt-12 lg:mt-0 before:absolute before:left-0 before:top-0 before:bottom-0 before:w-[3px] before:bg-gradient-to-b before:from-slate-500/50 before:to-burgundy/40"
          >
            <div>
              <span className="text-slate-400 font-sans tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-semibold block">Kontrast</span>
              <div className="w-16 h-[2px] bg-gradient-to-r from-slate-500 to-burgundy/50" />
            </div>

            <p className="text-2xl md:text-4xl leading-[1.6] text-white font-serif drop-cap">
              Warszawa na tym tle wypada blado i <span className="italic text-slate-400">chaotycznie</span>.
            </p>
            
            <p className="text-xl md:text-2xl leading-[1.8] text-white/80 font-serif">
              To miasto kontrastów, które bolą. Z jednej strony mamy reprezentacyjne Aleje Ujazdowskie, z drugiej – tragiczny obraz Powiśla. To tam Wokulski dostrzega „leżącą drabinę” – dzielnicę nędzy, z której nie ma ucieczki. Brak tu jakiejkolwiek myśli przewodniej: domy niemal się rozpadają, a co najgorsze – higiena praktycznie nie istnieje. Fakt, że gigantyczne wysypisko cuchnących śmieci sąsiaduje bezpośrednio ze zbiornikami wody pitnej dla całego miasta, jest najlepszym dowodem na cywilizacyjne zacofanie ówczesnej Warszawy.
            </p>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
