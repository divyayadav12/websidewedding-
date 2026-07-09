"use client";

import { motion } from "framer-motion";

export default function PageHeader({ title, subtitle }: { title: string, subtitle?: string }) {
  return (
    <section className="relative pt-40 pb-24 flex flex-col items-center justify-center bg-background overflow-hidden border-b border-foreground/5">
      <div className="relative z-10 text-center px-6">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="font-heading text-4xl md:text-6xl text-foreground mb-6"
        >
          {title}
        </motion.h1>
        {subtitle && (
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="font-sans text-foreground/70 max-w-2xl mx-auto"
          >
            {subtitle}
          </motion.p>
        )}
      </div>
    </section>
  );
}
