"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef } from "react";

export default function Science() {
  const containerRef = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start end", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], [100, -100]);

  return (
    <section
      id="science"
      ref={containerRef}
      className="py-32 px-6 md:px-20 bg-off-white text-obsidian overflow-hidden"
    >
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-20 items-center">
        {/* Left: 3D Head Sculpture (Visual Representation) */}
        <div className="relative flex justify-center">
          <motion.div style={{ y }} className="relative w-80 h-80 md:w-[450px] md:h-[450px]">
            {/* Minimalist Head Sculpture Image */}
            <div className="absolute inset-0 bg-obsidian/5 rounded-[48px] overflow-hidden shadow-2xl">
              <img 
                src="/images/sculpture.png" 
                alt="White Minimalist Sculpture"
                className="w-full h-full object-cover"
              />
              {/* Overlay to match the aesthetic */}
              <div className="absolute inset-0 bg-gradient-to-t from-obsidian/20 to-transparent" />
            </div>
            
            {/* Floating UI Elements */}
            <motion.div
              animate={{ y: [0, 15, 0] }}
              transition={{ duration: 5, repeat: Infinity }}
              className="absolute -top-6 -left-6 bg-white shadow-xl p-4 rounded-2xl border border-obsidian/5"
            >
              <div className="text-[10px] uppercase tracking-widest font-bold opacity-30 mb-1">Emotion</div>
              <div className="text-xl font-display font-bold">98%</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Right: Content */}
        <div>
          <motion.h2
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="text-5xl md:text-4xl lg:text-6xl mb-8 leading-tight"
          >
            We are architects of the <br />
            <span className="text-purple-deep underline decoration-cyan-electric/30">digital realm.</span>
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            viewport={{ once: true }}
            className="text-xl text-obsidian/60 leading-relaxed mb-10"
          >
            CreativeDev is a premier website design agency dedicated to crafting high-performance digital ecosystems. We don't just build websites; we engineer immersive brand experiences that redefine industry standards. Our approach merges technical rigidity with the fluid beauty of modern art, ensuring every pixel we place and every line of code we write is intended to evoke an emotional response.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="flex gap-4"
          >
            <div className="w-12 h-1 bg-obsidian" />
            <div className="w-12 h-1 bg-obsidian/10" />
            <div className="w-12 h-1 bg-obsidian/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
