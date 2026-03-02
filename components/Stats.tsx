"use client";

import { motion, useInView } from "motion/react";
import { useRef, useState, useEffect } from "react";

interface Stat {
  value: number;
  suffix: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: 50,
    suffix: "+",
    label: "Projects Delivered",
    description: "Digital products shipped for forward-thinking brands across industries.",
  },
  {
    value: 3,
    suffix: "+",
    label: "Years of Excellence",
    description: "Consistently raising the bar for what digital experiences can be.",
  },
  {
    value: 100,
    suffix: "%",
    label: "Client Satisfaction",
    description: "Every project completed to the highest standard of quality and care.",
  },
];

function AnimatedCounter({ value, suffix }: { value: number; suffix: string }) {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });
  const [count, setCount] = useState(0);

  useEffect(() => {
    if (!isInView) return;

    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(timer);
        return;
      }
      setCount(Math.floor(start));
    }, 16);

    return () => clearInterval(timer);
  }, [isInView, value]);

  return (
    <span ref={ref} className="tabular-nums">
      {count}
      {suffix}
    </span>
  );
}

export default function Stats() {
  return (
    <section className="py-32 px-6 md:px-20 bg-obsidian relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-cyan-electric/5 blur-[120px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Built for <span className="text-cyan-electric">Impact</span>
          </h2>
          <p className="text-white/40 max-w-lg mx-auto">
            Numbers that reflect our commitment to excellence and client success.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {stats.map((stat, i) => (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass p-10 text-center group hover:border-white/20 transition-colors"
            >
              <div className="text-6xl md:text-7xl font-display font-extrabold mb-4 bg-gradient-to-r from-cyan-electric to-purple-deep bg-clip-text text-transparent">
                <AnimatedCounter value={stat.value} suffix={stat.suffix} />
              </div>
              <h3 className="text-lg font-display font-bold mb-3 text-white">
                {stat.label}
              </h3>
              <p className="text-sm text-white/40 leading-relaxed">
                {stat.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
