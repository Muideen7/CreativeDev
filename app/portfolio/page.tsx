"use client";

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Portfolio from "@/components/Portfolio";
import Footer from "@/components/Footer";

export default function PortfolioPage() {
  return (
    <main className="relative bg-obsidian">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20"
      >
        <Portfolio />
      </motion.div>
      <Footer />
    </main>
  );
}
