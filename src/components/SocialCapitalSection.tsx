"use client";

import { motion } from "framer-motion";
import { QuoteTooltip } from "./QuoteTooltip";

export function SocialCapitalSection() {
  return (
    <section className="py-24 md:py-32 torn-edge-top border-b border-white/5 relative z-20 overflow-hidden">

      {/* Dark Subtle Background Texture */}
      <div className="absolute inset-0 bg-[#0a0f12] z-0" />
      <div className="absolute inset-0 z-0 opacity-10 mix-blend-overlay">
        <img src="https://www.transparenttextures.com/patterns/black-scales.png" className="w-full h-full object-repeat opacity-30" alt="" />
      </div>
      <div className="absolute inset-0 vignette pointer-events-none z-0" />

      <div className="max-w-7xl mx-auto px-6 lg:px-12 relative z-10">

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mb-20 text-center max-w-4xl mx-auto"
        >
          <span className="text-gold font-sans tracking-[0.3em] uppercase text-sm md:text-base mb-4 font-semibold block">Społeczeństwo</span>
          <h2 className="text-4xl md:text-6xl font-serif text-gold mb-6 tracking-tight drop-shadow-[0_10px_24px_rgba(0,0,0,0.8)]">
            Kult pracy kontra<br /><span className="italic">„choroba woli”</span>
          </h2>
          <div className="w-16 h-[1px] bg-gold mx-auto mb-12" />

          <p className="text-xl md:text-2xl leading-[1.8] text-white font-serif mt-8 drop-cap text-left">
            Różnica w wyglądzie ulic to tylko fasada głębszego problemu: ludzi. W Paryżu życie kipi energią. Tam nikt nie pyta o nazwisko czy pochodzenie – liczy się to, co potrafisz i jak ciężko pracujesz. Miasto jest demokratyczne w swojej użyteczności, dając Wokulskiemu rzadką <QuoteTooltip phrase="wolność, której w Warszawie nigdy nie zaznał" quote="Tu nikt mnie nie bada: kto ja jestem? skąd przychodzę? co robię? Tu nikt mnie nie pyta: dlaczego mam pieniądze i dlaczego ich nie wydaję?" />.
          </p>
        </motion.div>

        {/* 2-Column Editorial Layout with standard flow */}
        <div className="flex flex-col md:flex-row gap-16 lg:gap-20 relative mt-20">

          {/* Vertical Divider for Desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-[1px] bg-gold/30 -translate-x-1/2" />

          {/* Paris Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="flex-1 w-full"
          >
            <div className="w-full h-[300px] md:h-[400px] mb-8 relative border border-white/10 shadow-2xl bg-black">
              <img
                src="/paris_society.png"
                alt="Paryż praca"
                className="w-full h-full object-cover opacity-90 mix-blend-screen"
                style={{ filter: "brightness(0.9)" }}
              />
              <div className="absolute inset-0 vignette pointer-events-none" />
            </div>

            <div className="bg-[#070913]/90 backdrop-blur-md p-6 lg:ml-6 lg:-mt-20 border-l-2 border-gold relative z-20">
              <h3 className="text-3xl font-serif text-gold mb-4 font-medium drop-shadow-sm">Paryż</h3>
              <p className="text-lg leading-[1.8] font-serif text-white/90">
                W Paryżu liczy się to, co potrafisz i jak ciężko pracujesz. Oferuje dostęp do nauki i rozwoju każdemu, kto ma ambicje. To system, który nagradza jednostkę, zamiast ją krępować. To tam Wokulski może czuć się doceniony za sam fakt, że chce mu się działać.
              </p>
            </div>
          </motion.div>

          {/* Warsaw Column */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            className="flex-1 w-full md:pt-24"
          >
            <div className="w-full h-[300px] md:h-[400px] mb-8 relative border border-white/10 shadow-2xl bg-black">
              <img
                src="/warsaw_apathy.png"
                alt="Warszawa arystokracja hazard"
                className="w-full h-full object-cover opacity-80 mix-blend-screen"
                style={{ filter: "brightness(0.8)" }}
              />
              <div className="absolute inset-0 vignette pointer-events-none" />
            </div>

            <div className="bg-[#070913]/90 backdrop-blur-md p-6 lg:-ml-6 lg:-mt-20 border-l-2 border-slate-500 relative z-20">
              <h3 className="text-3xl font-serif text-slate-300 mb-4 font-medium drop-shadow-sm">Warszawa</h3>
              <p className="text-lg leading-[1.8] font-serif text-white/90">
                W Warszawie sytuacja jest odwrotna. Tutaj ambicja bywa powodem do drwin, czego doświadczył sam Wokulski, wyśmiewany za naukę w piwnicy czy za chęć wzbogacenia się na wojnie. Polska arystokracja to klasa dotknięta „chorobą woli” – mają wszystko, więc nie pragną niczego, tracąc majątki na hazard i pozory. Z kolei biedota, pozbawiona perspektyw, popada w apatię. Do tego dochodzi dusząca nietolerancja i konserwatyzm, które skutecznie blokują jakikolwiek postęp społeczny.
              </p>
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
