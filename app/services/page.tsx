"use client";

import { motion } from "motion/react";
import Navbar from "@/components/Navbar";
import Expertise from "@/components/Expertise";
import Footer from "@/components/Footer";

export default function ServicesPage() {
  return (
    <main className="relative bg-obsidian">
      <Navbar />
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="pt-20"
      >
        <Expertise />
      </motion.div>
      <Footer />
    </main>
  );
}
