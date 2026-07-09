"use client";

import { motion } from "framer-motion";
import Link from "next/link";

export default function AboutPreview() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-5xl mx-auto text-center">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-center max-w-2xl px-4 mx-auto"
        >
          <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-70 mb-4 font-semibold">
            About
          </p>
          <h2 className="font-heading text-4xl md:text-5xl mb-6 leading-tight">
            Who I Am
          </h2>
          <p className="font-sans text-sm md:text-base leading-relaxed opacity-80 mb-8">
            Hi, I’m Anshul, a professional video editor passionate about creating cinematic stories that leave a lasting impact. I specialize in transforming raw footage into visually stunning films through creative storytelling, seamless transitions, cinematic color grading, immersive sound design, and premium editing techniques.
          </p>
          <Link 
            href="/about" 
            className="inline-block border-b border-foreground pb-1 font-sans text-sm tracking-widest uppercase hover:opacity-70 transition-opacity"
          >
            More About Me
          </Link>
        </motion.div>
    </section>
  );
}
