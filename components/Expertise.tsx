"use client";

import { motion, useMotionValue, useSpring } from "motion/react";
import React, { ReactNode, useRef, useEffect } from "react";
import { Code, Palette, Cpu, Search, Globe, Film } from "lucide-react";
import gsap from "gsap";

interface BentoCardProps {
  children: ReactNode;
  className?: string;
  title: string;
  icon: ReactNode;
  description: string;
}

function BentoCard({ children, className = "", title, icon, description }: BentoCardProps) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    const distanceX = (e.clientX - centerX) * 0.1;
    const distanceY = (e.clientY - centerY) * 0.1;
    x.set(distanceX);
    y.set(distanceY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  useEffect(() => {
    if (ref.current) {
      gsap.fromTo(
        ref.current,
        { opacity: 0, y: 20 },
        {
          opacity: 1,
          y: 0,
          duration: 0.8,
          scrollTrigger: {
            trigger: ref.current,
            start: "top bottom-=100",
          },
        }
      );
    }
  }, []);

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ x: springX, y: springY }}
      className={`glass p-8 flex flex-col group cursor-pointer border-white/5 hover:border-white/20 transition-colors relative overflow-hidden ${className}`}
    >
      <div className="relative z-10 h-full flex flex-col">
        <div className="flex items-center gap-4 mb-6">
          <div className="p-3 rounded-2xl bg-white/5 text-cyan-electric group-hover:bg-cyan-electric group-hover:text-obsidian transition-colors duration-500">
            {icon}
          </div>
          <h3 className="text-xl font-display font-bold">{title}</h3>
        </div>
        <p className="text-sm text-white/40 mb-8 leading-relaxed">{description}</p>
        <div className="mt-auto relative flex items-center justify-center">
          {children}
        </div>
      </div>
      
      {/* Hover Glow */}
      <div className="absolute inset-0 bg-gradient-to-br from-cyan-electric/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
    </motion.div>
  );
}

export default function Expertise() {
  return (
    <section id="expertise" className="py-32 px-6 md:px-20 bg-obsidian">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Our <span className="text-cyan-electric">Expertise</span>
          </h2>
          <p className="text-white/40 max-w-xl">
            We deliver end-to-end digital solutions that combine technical precision with creative excellence.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-6 auto-rows-[300px]">
          {/* Web Development */}
          <div className="md:col-span-8">
            <BentoCard
              title="Web Development"
              icon={<Code size={24} />}
              description="High-performance, scalable web applications built with modern frameworks and clean architecture."
            >
              <div className="flex gap-2 flex-wrap justify-start w-full">
                {["React", "Next.js", "Node.js", "TypeScript", "Tailwind"].map((tech) => (
                  <span key={tech} className="px-3 py-1 rounded-full bg-white/5 text-[10px] uppercase tracking-widest font-bold text-white/50">
                    {tech}
                  </span>
                ))}
              </div>
            </BentoCard>
          </div>

          {/* Branding */}
          <div className="md:col-span-4">
            <BentoCard
              title="Branding"
              icon={<Palette size={24} />}
              description="Visual identities that resonate and leave a lasting impression."
            >
              <div className="w-full h-2 bg-white/5 rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  whileInView={{ width: "70%" }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                  className="h-full bg-magenta-vivid"
                />
              </div>
            </BentoCard>
          </div>

          {/* Software/AI */}
          <div className="md:col-span-4">
            <BentoCard
              title="Software / AI"
              icon={<Cpu size={24} />}
              description="Intelligent solutions leveraging machine learning and custom software engineering."
            >
               <div className="grid grid-cols-3 gap-2 w-full">
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="h-8 bg-white/5 rounded-lg animate-pulse" style={{ animationDelay: `${i * 0.2}s` }} />
                ))}
              </div>
            </BentoCard>
          </div>

          {/* SEO */}
          <div className="md:col-span-4">
            <BentoCard
              title="SEO"
              icon={<Search size={24} />}
              description="Strategic optimization to ensure your brand dominates search rankings."
            >
              <div className="flex items-end gap-1 h-12 w-full">
                {[40, 70, 45, 90, 65].map((h, i) => (
                  <motion.div
                    key={i}
                    initial={{ height: 0 }}
                    whileInView={{ height: `${h}%` }}
                    transition={{ duration: 1, delay: 0.5 + i * 0.1 }}
                    className="flex-1 bg-cyan-electric/20 rounded-t-sm"
                  />
                ))}
              </div>
            </BentoCard>
          </div>

          {/* Web3 */}
          <div className="md:col-span-4">
            <BentoCard
              title="Web3"
              icon={<Globe size={24} />}
              description="Decentralized applications and blockchain integration."
            >
              <div className="relative w-full h-12 border border-white/5 rounded-xl overflow-hidden">
                <motion.div 
                  animate={{ x: ["-100%", "100%"] }}
                  transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                  className="absolute inset-0 bg-gradient-to-r from-transparent via-purple-deep/20 to-transparent" 
                />
              </div>
            </BentoCard>
          </div>

          {/* Digital Animation */}
          <div className="md:col-span-12">
            <BentoCard
              title="Digital Animation"
              icon={<Film size={24} />}
              description="Fluid, high-fidelity motion graphics that bring your digital products to life."
            >
              <div className="flex justify-between items-center w-full">
                <div className="flex -space-x-4">
                  {[1, 2, 3, 4].map((i) => (
                    <motion.div 
                      key={i} 
                      whileHover={{ y: -5, scale: 1.1 }}
                      className="w-10 h-10 rounded-full border-2 border-obsidian bg-white/10 cursor-pointer" 
                    />
                  ))}
                </div>
                <div className="text-[10px] uppercase tracking-[0.3em] font-bold text-cyan-electric">60 FPS Fluidity</div>
              </div>
            </BentoCard>
          </div>
        </div>
      </div>
    </section>
  );
}
