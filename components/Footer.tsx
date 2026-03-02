"use client";

import { motion } from "motion/react";
import { Zap } from "lucide-react";
import Link from "next/link";

const navLinks = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Services", href: "/services" },
  { name: "Portfolio", href: "/portfolio" },
  { name: "Testimonials", href: "/testimonials" },
  { name: "Contact", href: "/contact" },
];

const socialLinks = [
  { name: "Instagram", href: "https://instagram.com/frontendgeek_" },
  { name: "Twitter", href: "https://twitter.com/OlayeyeMuideen" },
  { name: "Github", href: "https://github.com/Muideen7" },
  { name: "LinkedIn", href: "https://linkedin.com/in/Muideen7" },
];

export default function Footer() {
  const email = "olayeyeayomide2@gmail.com";

  const copyEmail = () => {
    navigator.clipboard.writeText(email);
    alert("Email copied to clipboard!");
  };

  return (
    <footer className="bg-obsidian pt-32 pb-12 px-6 md:px-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full pointer-events-none -z-10">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-purple-deep/10 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-cyan-electric/5 blur-[100px] rounded-full" />
      </div>

      <div className="max-w-7xl mx-auto">
        {/* Main Footer Content */}
        <div className="grid md:grid-cols-2 gap-20 mb-32">
          <div>
            <h2 className="text-5xl md:text-8xl font-display font-bold mb-12 leading-[0.85]">
              Let&apos;s build <br />
              <span className="text-cyan-electric">something</span> <br />
              legendary.
            </h2>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/contact"
                className="btn-pill btn-gradient text-xs uppercase tracking-widest font-bold cursor-pointer"
              >
                Start a Project
              </Link>
              <button 
                onClick={copyEmail}
                className="btn-pill glass border-white/10 text-xs uppercase tracking-widest font-bold hover:bg-white/5 cursor-pointer"
              >
                Copy Email
              </button>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-12">
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-8">
                Navigation
              </p>
              <ul className="flex flex-col gap-4">
                {navLinks.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-sm font-medium hover:text-cyan-electric transition-colors"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
            <div>
              <p className="text-[10px] uppercase tracking-widest font-bold text-white/30 mb-8">
                Contact
              </p>
              <ul className="flex flex-col gap-4">
                <li>
                  <a
                    href={`mailto:${email}`}
                    className="text-sm font-medium hover:text-cyan-electric transition-colors"
                  >
                    {email}
                  </a>
                </li>
                <li>
                  <p className="text-sm font-medium text-white/60">
                    Lagos, Nigeria
                  </p>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="flex flex-col items-center gap-12 pt-20 border-t border-white/5">
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-4 cursor-pointer"
          >
            <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-cyan-electric to-purple-deep shadow-[0_0_30px_rgba(0,240,255,0.4)] relative group flex items-center justify-center">
              <div className="absolute inset-0 bg-cyan-electric/20 blur-2xl rounded-full animate-pulse" />
              <div className="absolute inset-0 bg-purple-deep/20 blur-2xl rounded-full animate-pulse delay-700" />
              <Zap className="text-white relative z-10 fill-white" size={28} />
              <div className="absolute inset-0 bg-white/20 blur-xl opacity-0 group-hover:opacity-100 transition-opacity" />
            </div>
            <div className="text-2xl font-display font-extrabold tracking-tighter">
              Creative<span className="text-cyan-electric">Dev</span>
            </div>
          </motion.div>

          <div className="flex flex-wrap justify-center gap-8 md:gap-12">
            {socialLinks.map((social) => (
              <a
                key={social.name}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-xs uppercase tracking-widest font-bold text-white/40 hover:text-white transition-colors relative group flex items-center gap-2"
              >
                {social.name}
                <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-cyan-electric transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
          </div>

          <div className="w-full pt-10 flex flex-col md:flex-row justify-between items-center gap-6">
            <p className="text-[10px] uppercase tracking-widest font-bold text-white/20 text-center md:text-left">
              © {new Date().getFullYear()} CreativeDev. All rights reserved.
              Crafted with passion by specialists.
            </p>
            <div className="flex gap-8">
              <a
                href="#"
                className="text-[10px] uppercase tracking-widest font-bold text-white/20 hover:text-white transition-colors"
              >
                Privacy Policy
              </a>
              <a
                href="#"
                className="text-[10px] uppercase tracking-widest font-bold text-white/20 hover:text-white transition-colors"
              >
                Terms of Service
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
