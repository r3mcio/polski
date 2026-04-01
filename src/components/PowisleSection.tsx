"use client";

import { motion } from "framer-motion";
import { QuoteTooltip } from "./QuoteTooltip";

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
          className="mb-20"
        >
          <h2 className="text-5xl md:text-7xl font-serif text-gold leading-tight mb-8 tracking-tighter drop-shadow-[0_10px_24px_rgba(0,0,0,0.8)]">
            Co nas dzieli od wielkiego świata?
          </h2>
          <div className="w-16 h-[1px] bg-stone-500" />
        </motion.div>

        <div className="grid md:grid-cols-12 gap-12 lg:gap-20 items-start">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="md:col-span-12 lg:col-span-7 space-y-12"
          >
            <p className="text-xl md:text-2xl leading-[1.8] font-serif text-white drop-cap">
              Paryż nie jest oczywiście rajem bez wad. Wokulski zauważa tam przytłaczający nadmiar bodźców i bezwzględny materializm – tam nawet sztuka musi na siebie zarobić.
            </p>
            
            <p className="text-xl md:text-2xl leading-[1.8] font-serif text-white/90 relative">
              Jednak to Paryż oferuje wolność i anonimowość, pozwalając człowiekowi być „kroplą w oceanie”, a nie obiektem plotek i nagonki.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.2 }}
            className="md:col-span-12 lg:col-span-5 relative mt-6 lg:mt-20"
          >
            <div className="bg-[#090b13]/80 border-t border-l border-white/5 p-8 md:p-12 backdrop-blur-xl shadow-2xl relative transform lg:rotate-2">
              <div className="absolute top-0 right-0 w-16 h-16 border-t border-r border-stone-600/30" />
              <div className="absolute bottom-0 left-0 w-16 h-16 border-b border-l border-stone-600/30" />
              <p className="text-xl font-serif leading-[1.9] text-stone-300">
                Powiśle było w oczach Wokulskiego nie tylko „chorym, dzikim kątem”, ale też ponurym dowodem porażki całego systemu społecznego – istny <QuoteTooltip phrase="symbol upadku higieny i zdrowego rozsądku" quote="Wokulski doszedł do brzegu Wisły i zdumiał się. Na kilkumorgowej przestrzeni wznosił się tu pagórek najobrzydliwszych śmieci [...] a o kilkadziesiąt kroków dalej leżały zbiorniki wody, którą piła Warszawa." />
              </p>
            </div>
            
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96], delay: 0.4 }}
              className="mt-12 text-lg md:text-xl leading-[1.8] font-serif text-white/80 pl-6 border-l border-stone-700/50"
            >
              To dzielnica bez perspektyw, przypominająca drabinę leżącą na ziemi, po której nikt nie jest w stanie się wspiąć.
            </motion.p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
