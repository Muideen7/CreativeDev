"use client";

import { motion } from "motion/react";
import { Quote } from "lucide-react";

interface Testimonial {
  quote: string;
  author: string;
  role: string;
  company: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    quote:
      "CreativeDev transformed our digital presence entirely. Their attention to detail and artistic vision is unmatched — they delivered a product that exceeded every expectation.",
    author: "Amara Okafor",
    role: "CEO",
    company: "Lumina Tech",
    avatar: "https://i.pravatar.cc/150?img=48",
  },
  {
    quote:
      "The fluid animations and high-performance code they delivered set a new standard for our platform. A truly world-class engineering team.",
    author: "Kwame Asante",
    role: "CTO",
    company: "Nexus Labs",
    avatar: "https://i.pravatar.cc/150?img=53",
  },
  {
    quote:
      "Working with CreativeDev was a revelation. They don't just build websites — they craft immersive digital experiences that our users absolutely love.",
    author: "Fatima Diallo",
    role: "Head of Product",
    company: "Aether Research",
    avatar: "https://i.pravatar.cc/150?img=45",
  },
  {
    quote:
      "From branding to full-stack development, CreativeDev delivered a cohesive digital ecosystem that drives real business results. Outstanding partnership.",
    author: "Tendai Moyo",
    role: "Marketing Director",
    company: "Vivid Studio",
    avatar: "https://i.pravatar.cc/150?img=59",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-32 px-6 md:px-20 bg-obsidian relative overflow-hidden">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-purple-deep/10 blur-[120px] rounded-full" />
        <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-cyan-electric/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto relative">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20"
        >
          <h2 className="text-4xl md:text-6xl font-display font-bold mb-6">
            Client <span className="text-purple-deep">Voices</span>
          </h2>
          <p className="text-white/40 max-w-xl">
            Hear from the brands and leaders who trust us to define their digital identity.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.author}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.15 }}
              className="glass p-10 md:p-12 relative group hover:border-white/20 transition-colors"
            >
              {/* Quote icon */}
              <Quote
                className="absolute top-8 right-8 text-white/5 group-hover:text-cyan-electric/20 transition-colors"
                size={56}
              />

              {/* Quote text */}
              <p className="text-lg md:text-xl font-medium mb-10 leading-relaxed text-white/80 italic">
                &ldquo;{t.quote}&rdquo;
              </p>

              {/* Author */}
              <div className="flex items-center gap-4">
                <img
                  src={t.avatar}
                  alt={t.author}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white/10"
                />
                <div>
                  <p className="font-bold text-white">{t.author}</p>
                  <p className="text-xs uppercase tracking-widest font-bold text-white/30">
                    {t.role}, {t.company}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
