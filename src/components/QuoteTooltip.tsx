"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface QuoteTooltipProps {
  phrase: string;
  quote: string;
}

export function QuoteTooltip({ phrase, quote }: QuoteTooltipProps) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <span 
      className="relative inline-block cursor-help group"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
      onClick={() => setIsOpen(!isOpen)}
    >
      {/* Delicate dotted golden/burgundy line with hover effect */}
      <span className="relative z-10 font-serif font-medium transition-all duration-300 border-b border-dotted border-gold/70 hover:border-gold hover:text-gold pb-[1px]">
        {phrase}
      </span>
      
      <AnimatePresence>
        {isOpen && (
          <motion.span
            initial={{ opacity: 0, y: 15, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 10, scale: 0.95 }}
            transition={{ duration: 0.5, ease: [0.43, 0.13, 0.23, 0.96] }}
            className="absolute z-50 bottom-full left-1/2 -translate-x-1/2 mb-3 w-72 md:w-[26rem] p-6 text-base md:text-lg leading-[1.7] bg-[#1a1814]/90 backdrop-blur-md border border-gold/30 shadow-[0_20px_50px_rgba(0,0,0,0.6)] text-white/90 font-serif italic text-center block pointer-events-none rounded-md"
          >
            {quote}
            {/* Elegant triangle pointer */}
            <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-gold/30"></span>
            <span className="absolute -bottom-[7px] left-1/2 -translate-x-1/2 border-[8px] border-transparent border-t-[#1a1814]/90 backdrop-blur-md"></span>
          </motion.span>
        )}
      </AnimatePresence>
    </span>
  );
}
