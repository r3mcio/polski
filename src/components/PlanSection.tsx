"use client";

import { motion } from "framer-motion";

export function PlanSection() {
  const planItems = [
    {
      title: "Radykalnej przebudowy dzielnic nędzy",
      description: "Zamiany Powiśla w użyteczne bulwary."
    },
    {
      title: "Inwestycji w infrastrukturę",
      description: "Budowy kanałów i doprowadzenia czystej wody źródlanej, co uratowałoby tysiące istnień."
    },
    {
      title: "Zmiany mentalności",
      description: "Docenienia pracy i nauki kosztem rodowych tytułów."
    }
  ];

  return (
    <section id="plan" className="py-32 md:py-48 relative overflow-hidden torn-edge-mask bg-[#03060d]">
      
      {/* Dark Technical Blueprint Background */}
      <div 
        className="absolute inset-0 z-0 opacity-[0.15] mix-blend-screen"
        style={{
          backgroundImage: "url('/plan_bg.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          filter: "brightness(0.6)"
        }}
      />
      
      {/* Grid overlay to emphasize technical feeling */}
      <div 
        className="absolute inset-0 z-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px),
          linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: '40px 40px'
        }}
      />
      <div className="absolute inset-0 vignette pointer-events-none z-0" />

      <div className="max-w-5xl mx-auto px-6 lg:px-12 relative z-10">
        
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-150px" }}
          transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
          className="mb-24 text-center md:text-left"
        >
          <span className="text-gold font-sans tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-semibold block">Czego potrzebuje Warszawa?</span>
          <h2 className="text-5xl md:text-7xl font-serif text-gold mb-6 tracking-tight drop-shadow-[0_10px_24px_rgba(0,0,0,0.8)]">
            Nie wystarczą <span className="opacity-90">kosmetyczne poprawki</span>
          </h2>
          <div className="w-16 h-[2px] bg-gold mb-12 mx-auto md:mx-0" />
          
          <p className="text-xl md:text-2xl text-white/90 font-serif leading-[1.8] mt-8 max-w-4xl drop-cap text-left">
            Aby polska stolica mogła stanąć w jednym rzędzie z Paryżem, nie wystarczą kosmetyczne poprawki. Potrzebujemy:
          </p>
        </motion.div>

        <div className="relative">
          {/* Connecting technical line */}
          <div className="hidden md:block absolute left-[5.5rem] top-12 bottom-0 w-[1px] bg-gold/20" />

          <div className="space-y-20 lg:space-y-24 mb-32 relative z-10">
            {planItems.map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ delay: index * 0.15, duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
                className="flex flex-col md:flex-row items-center md:items-start gap-8 lg:gap-16 group"
              >
                {/* Large Gold Monospace Numbers */}
                <div className="flex-shrink-0 w-full md:w-32 flex justify-center md:justify-end">
                  <span className="font-mono text-7xl md:text-8xl font-black text-gold/30 group-hover:text-gold transition-colors duration-500 select-none">
                    0{index + 1}
                  </span>
                </div>
                
                {/* Technical Node point */}
                <div className="hidden md:flex flex-shrink-0 w-8 h-8 rounded-full border border-gold/40 items-center justify-center bg-[#03060d] relative z-10 mt-6 md:ml-[-1.5rem] group-hover:border-gold transition-colors duration-500">
                  <div className="w-2 h-2 rounded-full bg-gold/40 group-hover:bg-gold transition-colors duration-500" />
                </div>
                
                <div className="bg-[#090b13]/60 backdrop-blur-md p-8 md:p-10 border border-white/5 drop-shadow-2xl flex-1 group-hover:border-gold/20 transition-colors duration-500">
                  <h3 className="text-2xl md:text-3xl font-mono tracking-tight text-white mb-4 uppercase text-center md:text-left">{item.title}</h3>
                  <div className="w-12 h-[1px] bg-gold/50 mx-auto md:mx-0 mb-6" />
                  <p className="text-white/80 font-serif leading-[1.8] text-lg md:text-xl text-center md:text-left">
                    {item.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.8, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="pt-16 border-t border-gold/20"
        >
          <p className="text-xl md:text-2xl font-serif leading-[1.8] text-gold italic text-center drop-shadow-md">
            Warszawa w opisie Prusa to miasto, które mogłoby być piękne, gdyby nie egoizm elit i brak wspólnego celu. Paryż pokazuje, że wielkość buduje się pracą milionów rąk, a nie tylko marzeniami o dawnej chwale.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
