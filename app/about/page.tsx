"use client";

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Science from "@/components/Science";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";

export default function AboutPage() {
  return (
    <main className="relative bg-obsidian">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20"
      >
        <Science />
        <Expertise />
      </motion.div>
      <Footer />
    </main>
  );
}
