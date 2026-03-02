"use client";

import { motion } from "motion/react";
import { useEffect, useState } from "react";

export default function Loader({ onComplete }: { onComplete: () => void }) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(timer);
          setTimeout(onComplete, 500);
          return 100;
        }
        return prev + 1;
      });
    }, 20);

    return () => clearInterval(timer);
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
      className="fixed inset-0 z-[200] bg-obsidian flex flex-col items-center justify-center"
    >
      <div className="relative w-32 h-32 mb-12">
        {/* Morphing Background */}
        <div className="absolute inset-0 morphing-bubble opacity-50" />
        
        {/* Logo Mark */}
        <div className="absolute inset-0 flex items-center justify-center">
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="text-4xl font-display font-extrabold tracking-tighter"
          >
            C<span className="text-cyan-electric">D</span>
          </motion.div>
        </div>
      </div>

      <div className="w-64 h-[1px] bg-white/10 relative overflow-hidden">
        <motion.div
          className="absolute inset-y-0 left-0 bg-cyan-electric"
          style={{ width: `${progress}%` }}
        />
      </div>
      
      <div className="mt-4 flex justify-between w-64">
        <span className="text-[10px] uppercase tracking-widest font-bold text-white/30">Loading System</span>
        <span className="text-[10px] uppercase tracking-widest font-bold text-cyan-electric">{progress}%</span>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.5em] font-bold text-white/10">
        Engineering Digital Emotions
      </div>
    </motion.div>
  );
}
