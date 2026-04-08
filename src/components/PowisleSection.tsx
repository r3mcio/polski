"use client";

import { motion } from "framer-motion";


export function PowisleSection() {
  return (
    <section id="powisle" className="py-32 md:py-48 relative border-t border-white/5 overflow-hidden">
      {/* Background and Fog */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.2]"
        style={{
          backgroundImage: "radial-gradient(circle at center, transparent 0%, #060913 80%), url('/powisle_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.8)"
        }}
      />
      <div className="absolute inset-0 z-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/dust.png')] mix-blend-overlay" />
      <div className="absolute inset-0 vignette z-0 pointer-events-none" />
      
      {/* Animated Fog Elements */}
      <div className="absolute top-0 left-0 w-full h-[150%] pointer-events-none z-10 overflow-hidden mix-blend-screen">
        <div className="absolute top-1/4 left-[-20%] w-[100vw] h-[50vh] bg-stone-300/5 blur-[100px] animate-fog" />
        <div className="absolute bottom-1/4 right-[-20%] w-[120vw] h-[60vh] bg-stone-400/5 blur-[120px] animate-fog" style={{ animationDelay: '-10s', animationDuration: '30s' }} />
      </div>

      <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-20">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="mb-16 text-center"
        >
          <span className="text-stone-400 font-sans tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-semibold block">Anatomia Zaniedbania</span>
          <h2 className="text-5xl md:text-6xl font-serif text-gold leading-tight mb-8 tracking-tighter drop-shadow-[0_10px_24px_rgba(0,0,0,0.8)]">
            Krytyczne wady<br />infrastruktury
          </h2>
          <div className="w-16 h-[1px] bg-stone-500 mx-auto" />
        </motion.div>

        <div className="max-w-4xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="space-y-8 text-left bg-black/40 p-8 md:p-12 border border-white/5 backdrop-blur-sm"
          >
            <p className="text-xl md:text-2xl leading-[1.6] font-serif text-stone-300">
              <strong className="text-gold">Układ komunikacyjny:</strong> Powiśle to „leżąca drabina” – sieć ślepych i ciasnych uliczek, które uniemożliwiają rozwój i ucieczkę z nędzy.
            </p>
            
            <p className="text-xl md:text-2xl leading-[1.6] font-serif text-stone-300">
              <strong className="text-gold">Katastrofa sanitarna:</strong> Bezpośrednie sąsiedztwo głównego wysypiska śmieci i nieczystości ze zbiornikami wody pitnej.
            </p>

            <p className="text-xl md:text-2xl leading-[1.6] font-serif text-stone-300">
              <strong className="text-gold">Zapaść budowlana:</strong> Brak systemowych rozwiązań higienicznych prowadzi do fizycznego rozkładu dzielnicy.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
