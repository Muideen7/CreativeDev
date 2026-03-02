"use client";

import { motion, useScroll, useTransform } from "motion/react";
import { useRef, useEffect } from "react";
import gsap from "gsap";

export default function Hero() {
  const containerRef = useRef<HTMLDivElement>(null);
  const titleRef = useRef<HTMLHeadingElement>(null);
  const { scrollY } = useScroll();
  const y1 = useTransform(scrollY, [0, 500], [0, 200]);
  const rotate = useTransform(scrollY, [0, 500], [0, 45]);

  const words = "Crafting the future of digital experience.".split(" ");

  useEffect(() => {
    if (titleRef.current) {
      const spans = titleRef.current.querySelectorAll(".word-span");
      gsap.fromTo(
        spans,
        { y: "100%", opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 1,
          stagger: 0.1,
          ease: "power4.out",
          delay: 1.8,
        }
      );
    }
  }, []);

  return (
    <section className="relative min-h-screen flex items-center px-6 md:px-20 pt-20 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-12 items-center w-full max-w-7xl mx-auto">
        {/* Left Content */}
        <div className="relative z-10">
          <h1 ref={titleRef} className="text-5xl md:text-4xl lg:text-6xl leading-[0.9] mb-8">
            {words.map((word, i) => (
              <span key={i} className="inline-block overflow-hidden mr-3 pb-2">
                <span className="word-span inline-block">
                  {word}
                </span>
              </span>
            ))}
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 2.5, duration: 0.8 }}
            className="text-lg text-white/50 max-w-md mb-10"
          >
            We blend high-end engineering with artistic intuition to create
            digital products that feel alive.
          </motion.p>

          {/* Trust Element */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 3, duration: 0.8 }}
            className="glass inline-flex items-center gap-4 px-6 py-4 border-white/5"
          >
            <div className="w-10 h-10 rounded-full bg-gradient-to-br from-cyan-electric to-purple-deep flex items-center justify-center font-bold">
              3+
            </div>
            <div className="text-xs uppercase tracking-widest font-semibold text-white/70">
              Years of Excellence
            </div>
          </motion.div>
        </div>

        {/* Right Visual: Massive Fluid Mesh Sphere */}
        <div className="relative flex justify-center items-center">
          <motion.div
            style={{ y: y1, rotate }}
            className="relative w-80 h-80 md:w-[500px] md:h-[500px]"
          >
            {/* The Sphere */}
            <div className="absolute inset-0 rounded-full bg-gradient-to-br from-cyan-electric/20 via-purple-deep/40 to-magenta-vivid/20 blur-2xl animate-pulse" />
            <div className="absolute inset-10 rounded-full border border-white/10 backdrop-blur-3xl overflow-hidden">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(255,255,255,0.1)_0%,transparent_70%)]" />
              {/* Animated Fluid Mesh Simulation (Simplified) */}
              <motion.div
                animate={{
                  scale: [1, 1.1, 1],
                  rotate: [0, 180, 360],
                }}
                transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
                className="absolute inset-[-50%] opacity-30"
                style={{
                  background: "conic-gradient(from 0deg, transparent, #00F0FF, transparent, #5D26FF, transparent)",
                  filter: "blur(60px)",
                }}
              />
            </div>
            
            {/* Floating Accents */}
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="absolute -top-10 -right-10 w-24 h-24 glass flex items-center justify-center"
            >
              <div className="w-2 h-2 rounded-full bg-magenta-vivid animate-ping" />
            </motion.div>
          </motion.div>
        </div>
      </div>

      {/* Background Grid */}
      <div className="absolute inset-0 -z-10 opacity-10 pointer-events-none">
        <div className="absolute inset-0" style={{ backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />
      </div>
    </section>
  );
}
