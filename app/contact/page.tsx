"use client";

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function ContactPage() {
  return (
    <main className="relative bg-obsidian">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20 min-h-screen flex flex-col items-center justify-center"
      >
        <div className="py-20 text-center">
          <h1 className="text-4xl md:text-6xl font-display font-bold mb-4">Get in Touch</h1>
          <p className="text-white/40 max-w-md mx-auto">
            We're always looking for new challenges and legendary projects. Reach out and let's build the future together.
          </p>
          
          <div className="mt-12 glass p-8 md:p-12 max-w-2xl mx-auto">
            <form className="grid gap-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="flex flex-col gap-2 text-left">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">Name</label>
                  <input type="text" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-electric transition-colors" placeholder="John Doe" />
                </div>
                <div className="flex flex-col gap-2 text-left">
                  <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">Email</label>
                  <input type="email" className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-electric transition-colors" placeholder="john@example.com" />
                </div>
              </div>
              <div className="flex flex-col gap-2 text-left">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/30">Message</label>
                <textarea rows={4} className="bg-white/5 border border-white/10 rounded-xl px-4 py-3 focus:outline-none focus:border-cyan-electric transition-colors" placeholder="Tell us about your project..." />
              </div>
              <button className="btn-pill btn-gradient w-full py-4 text-sm uppercase tracking-widest font-bold">
                Send Message
              </button>
            </form>
          </div>
        </div>
      </motion.div>
      <Footer />
    </main>
  );
}
