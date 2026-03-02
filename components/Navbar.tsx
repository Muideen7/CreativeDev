"use client";

import { motion, AnimatePresence } from "motion/react";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Portfolio", href: "/portfolio" },
    { name: "Testimonials", href: "/testimonials" },
    { name: "Contact", href: "/contact" },
  ];

  return (
    <>
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 1.5, duration: 0.8 }}
        className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[90%] max-w-5xl"
      >
        <div className="glass px-6 py-3 flex items-center justify-between border-white/10">
          {/* Logo */}
          <Link href="/" className="text-xl font-display font-extrabold tracking-tighter">
            Creative<span className="text-cyan-electric">Dev</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8 text-xs font-medium text-white/70">
            {navLinks.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className={`hover:text-white transition-colors uppercase tracking-widest ${
                  pathname === item.href ? "text-cyan-electric" : ""
                }`}
              >
                {item.name}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            {/* CTA - Desktop only or small on mobile */}
            <Link href="/contact" className="hidden sm:block btn-pill btn-gradient text-[10px] px-6 py-2 uppercase tracking-widest">
              Let's Talk
            </Link>

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setIsOpen(true)}
              className="md:hidden flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-white/70 hover:text-white transition-colors"
            >
              <span>Menu</span>
              <Menu size={18} />
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Full Page Mobile Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "100%" }}
            animate={{ y: 0 }}
            exit={{ y: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-[100] bg-obsidian flex flex-col p-8"
          >
            {/* Header */}
            <div className="flex justify-between items-center mb-16">
              <Link href="/" onClick={() => setIsOpen(false)} className="text-2xl font-display font-extrabold tracking-tighter">
                Creative<span className="text-cyan-electric">Dev</span>
              </Link>
              <button
                onClick={() => setIsOpen(false)}
                className="p-4 glass rounded-full border-white/10 text-white"
              >
                <X size={24} />
              </button>
            </div>

            {/* Links */}
            <div className="flex flex-col gap-8">
              {navLinks.map((item, i) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 + i * 0.1 }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setIsOpen(false)}
                    className={`text-5xl font-display font-bold hover:text-cyan-electric transition-colors ${
                      pathname === item.href ? "text-cyan-electric" : ""
                    }`}
                  >
                    {item.name}
                  </Link>
                </motion.div>
              ))}
            </div>

            {/* Footer */}
            <div className="mt-auto pt-8 border-t border-white/5 flex flex-col gap-4">
              <p className="text-white/30 text-xs uppercase tracking-widest font-bold">
                Get in touch
              </p>
              <a href="mailto:hello@creativedev.com" className="text-xl font-medium">
                hello@creativedev.com
              </a>
              <Link href="/contact" onClick={() => setIsOpen(false)} className="btn-pill btn-gradient w-full py-4 text-sm uppercase tracking-widest font-bold mt-4 text-center">
                Start a Project
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
