"use client";

import { motion } from "motion/react";
import { MessageCircle } from "lucide-react";
import { generateWhatsAppLink } from "@/lib/whatsapp";

export default function WhatsAppFloat() {
  return (
    <motion.a
      href={generateWhatsAppLink("Hi CreativeDev! I'm interested in your services.")}
      target="_blank"
      rel="noopener noreferrer"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, type: "spring", stiffness: 200 }}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-8 right-8 z-50 w-14 h-14 rounded-full bg-[#25D366] text-white flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-shadow duration-300 cursor-pointer"
      aria-label="Chat on WhatsApp"
    >
      <MessageCircle size={26} fill="currentColor" />

      {/* Pulse ring */}
      <span className="absolute inset-0 rounded-full bg-[#25D366]/30 animate-ping" />
    </motion.a>
  );
}
