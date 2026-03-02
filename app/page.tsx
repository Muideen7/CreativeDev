"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Loader from "@/components/Loader";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import Expertise from "@/components/Expertise";
import Science from "@/components/Science";
import Portfolio from "@/components/Portfolio";
import Stats from "@/components/Stats";
import Testimonials from "@/components/Testimonials";
import Footer from "@/components/Footer";

export default function HomePage() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (loading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [loading]);

  return (
    <main className="relative bg-obsidian selection:bg-cyan-electric selection:text-obsidian">
      <AnimatePresence mode="wait">
        {loading ? (
          <Loader key="loader" onComplete={() => setLoading(false)} />
        ) : (
          <motion.div
            key="content"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <Navbar />
            <Hero />
            <Expertise />
            <Science />
            <Portfolio isHomepage />
            <Stats />
            <Testimonials />
            <Footer />
          </motion.div>
        )}
      </AnimatePresence>
    </main>
  );
}
