"use client";

import { motion } from "framer-motion";

export default function AboutBioBlock() {
  return (
    <section className="px-6 pb-24 max-w-[1400px] mx-auto">
      {/* Large Image */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full h-[50vh] md:h-[70vh] mb-20 overflow-hidden"
      >
        <img 
          src="https://images.unsplash.com/photo-1574717024653-61fd2cf4d44d?auto=format&fit=crop&q=80&w=2000" 
          alt="Edit With Anshul" 
          className="w-full h-full object-cover"
        />
      </motion.div>

      {/* Two Column Text */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-start">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-heading text-3xl md:text-4xl lg:text-[2.5rem] leading-snug text-foreground">
            I specialize in transforming raw footage into visually stunning films through creative storytelling, seamless transitions, cinematic color grading, immersive sound design, and premium editing techniques.
          </h2>
        </motion.div>
        
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="space-y-6 font-sans text-sm md:text-base text-foreground/80 leading-relaxed"
        >
          <p>
            Whether it’s a wedding film, pre-wedding, YouTube content, Instagram reels, or commercial advertisement, every project is crafted with precision, creativity, and attention to detail.
          </p>
          <p>
            My mission is simple: Your Vision. My Creativity. One Cinematic Masterpiece.
          </p>
          <p>
            With over 4+ years of experience and 200+ projects completed, I have a track record of 100% client satisfaction. I ensure premium cinematic looks and high-end color grading that elevate your brand and memories.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
