"use client";

import { motion } from "framer-motion";
import { QuoteTooltip } from "./QuoteTooltip";
import { Scale, HeartCrack } from "lucide-react";

export function CityComparisonSection() {
  return (
    <>
      {/* Paris Section (Warm Golden Parchment) */}
      <section id="paryz" className="py-32 md:py-48 bg-parchment relative overflow-hidden">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-gold/5 rounded-full blur-[120px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            className="mb-24"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-charcoal mb-8 tracking-tight">Logika Paryża</h2>
            <div className="w-24 h-[2px] bg-gold" />
          </motion.div>

          <div className="grid md:grid-cols-12 gap-16 lg:gap-24 items-start">
            <motion.div 
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-12 lg:col-span-7 space-y-12"
            >
              <p className="text-2xl leading-[1.8] text-charcoal/80 font-serif">
                W perspektywie Wokulskiego stolica Francji przypomina ogromny, doskonale zaprojektowany plaster miodu. To przestrzeń, która 
                <QuoteTooltip 
                  phrase=" nawet bardzo logiczną" 
                  quote="[...] Paryż, budowany przez kilkanaście wieków (...) ma jednakże plan, tworzy całość, nawet bardzo logiczną" 
                />. Daje to poczucie ładu i absolutnej celowości. Każda ulica i budowla mają tu swoje racjonalne uzasadnienie.
              </p>
              
              <div className="bg-white/60 backdrop-blur-sm border-l-4 border-gold p-8 rounded-r-2xl shadow-sm">
                <Scale className="w-8 h-8 text-gold mb-6" />
                <h3 className="text-2xl font-serif text-charcoal mb-4">Merytokracja</h3>
                <p className="text-lg leading-[1.7] font-sans text-charcoal/70">
                  W Paryżu liczy się praca i indywidualne zdolności. Spontaniczna współpraca i szacunek dla jednostki budują potęgę społeczeństwa. Wokulski czuje swobodę: 
                  <br/><br/>
                  <span className="italic opacity-90 block mt-2">
                    <QuoteTooltip 
                      phrase=" dlaczego ich nie wydaję?" 
                      quote="Tu nikt mnie nie bada: kto ja jestem? skąd przychodzę? co robię? Tu nikt mnie nie pyta: dlaczego mam pieniądze i dlaczego ich nie wydaję?"
                    />
                  </span>
                </p>
              </div>
            </motion.div>
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-12 lg:col-span-5 relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                <div 
                  className="absolute inset-0 transition-transform duration-[20s] hover:scale-110"
                  style={{
                    backgroundImage: "url('/introduction.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "sepia(50%) contrast(110%)"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Warsaw Section (Cold Grayscale Navys) */}
      <section id="warszawa" className="py-32 md:py-48 bg-navy relative overflow-hidden text-parchment border-t border-gold/10">
        <div className="absolute top-0 left-0 w-[1000px] h-[1000px] bg-slate-900/40 rounded-full blur-[150px] pointer-events-none" />
        
        <div className="max-w-6xl mx-auto px-6 lg:px-12 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-150px" }}
            className="mb-24 flex flex-col items-end text-right"
          >
            <h2 className="text-5xl md:text-7xl font-serif text-gold mb-8 tracking-tight drop-shadow-[0_10px_24px_rgba(0,0,0,0.8)]">Chaos Warszawy</h2>
            <div className="w-24 h-[2px] bg-slate-500" />
          </motion.div>

          <div className="grid md:grid-cols-12 gap-16 lg:gap-24 items-start flex-row-reverse">
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-12 lg:col-span-5 order-2 lg:order-1 relative"
            >
              <div className="aspect-[3/4] rounded-2xl overflow-hidden shadow-2xl relative">
                <div 
                  className="absolute inset-0 transition-transform duration-[20s] hover:scale-110"
                  style={{
                    backgroundImage: "url('/powisle_bg.png')",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                    filter: "grayscale(100%) contrast(120%) brightness(0.6)"
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-navy via-transparent to-transparent" />
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="md:col-span-12 lg:col-span-7 space-y-12 order-1 lg:order-2"
            >
              <p className="text-2xl leading-[1.8] text-parchment/70 font-serif">
                Z kolei rodzinne miasto bohatera jawi się jako urbanistyczny i społeczny bełkot. Budynki powstają bez głębszego zamysłu, krzywe ulice i brak spójnej wizji architektonicznej odzwierciedlają marazm, w którym uwięzieni są jej mieszkańcy. Przestrzeń jest duszna i zdezorganizowana.
              </p>
              
              <div className="bg-white/5 border border-white/10 p-8 rounded-2xl backdrop-blur-md shadow-xl text-left">
                <HeartCrack className="w-8 h-8 text-slate-400 mb-6" />
                <h3 className="text-2xl font-serif text-white mb-4">Konserwatyzm i &bdquo;Choroba woli&rdquo;</h3>
                <p className="text-lg leading-[1.7] font-sans text-parchment/60">
                  Warszawę trawi marazm, zawiść i chorobliwe przywiązanie do feudalnych tradycji. Arystokracja nie czuje odpowiedzialności za naród, cierpiąc na bezproduktywność i degenerację chęci do działania. Zamiast budować wspólny dom, elity zamykają się w sztywnych normach kastowych.
                </p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </>
  );
}
