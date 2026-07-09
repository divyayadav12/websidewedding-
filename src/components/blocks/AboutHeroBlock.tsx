"use client";

import { motion } from "framer-motion";

export default function AboutHeroBlock() {
  return (
    <section className="pt-32 pb-16 px-6 max-w-5xl mx-auto text-center">
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/60 mb-6 font-semibold"
      >
        About Me
      </motion.p>
      <motion.h1 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="font-heading text-5xl md:text-7xl lg:text-[5rem] leading-tight mb-8"
      >
        Who I Am
      </motion.h1>
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
        className="font-sans text-sm md:text-base text-foreground/80 max-w-4xl mx-auto leading-relaxed"
      >
        Hi, I’m Anshul, a professional video editor passionate about creating cinematic stories that leave a lasting impact.
      </motion.p>
    </section>
  );
}
