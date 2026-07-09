"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function CtaSection() {
  return (
    <section className="relative py-32 px-6 flex flex-col items-center text-center overflow-hidden" style={{ backgroundColor: "#2b261c", color: "#f4efe6" }}>
      {/* Background image overlay */}
      <div className="absolute inset-0 opacity-20 pointer-events-none">
        <img 
          src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=2000" 
          alt="CTA Background" 
          className="w-full h-full object-cover"
        />
      </div>

      <div className="relative z-10 max-w-4xl mx-auto flex flex-col items-center">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="font-sans text-xs md:text-sm tracking-[0.2em] uppercase opacity-80 mb-6 font-semibold"
        >
          Ready to preserve your memories forever?
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl leading-tight mb-10"
        >
          Ready to find your dream wedding photographer?
        </motion.h2>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          <Link 
            href="/contact" 
            className="font-button text-xs tracking-widest uppercase border border-[#f4efe6]/50 text-[#f4efe6] px-8 py-4 rounded-full hover:bg-[#f4efe6] hover:text-[#2b261c] transition-all duration-500 inline-block"
          >
            Get In Touch
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
