"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface TypewriterProps {
  words: string[];
  delay?: number;
  className?: string;
}

export function Typewriter({ words, delay = 3000, className }: TypewriterProps) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((current) => (current + 1) % words.length);
    }, delay);
    return () => clearInterval(interval);
  }, [words.length, delay]);

  return (
    <div className={`relative inline-block overflow-hidden ${className}`}>
      <AnimatePresence mode="wait">
        <motion.span
          key={index}
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -20, opacity: 0 }}
          transition={{ duration: 0.5, ease: "easeInOut" }}
          className="block bg-clip-text text-transparent bg-gradient-to-r from-orange-400 to-violet-500 font-semibold"
        >
          {words[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
