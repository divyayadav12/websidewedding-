"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import { dummyPortfolio } from "@/data";
import MagneticButton from "@/components/animations/MagneticButton";
import Link from "next/link";

export default function FeaturedPortfolio() {
  const featuredWorks = dummyPortfolio.slice(0, 4);

  return (
    <section className="py-32 bg-background relative z-10 overflow-hidden">
      <div className="container mx-auto px-6">
        
        {/* Header */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
          <div className="max-w-2xl">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="font-heading text-4xl md:text-6xl text-white mb-4"
            >
              Selected Works
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: 0.1 }}
              className="font-sans text-white/60"
            >
              A glimpse into the magical moments we've had the honor of capturing across the globe.
            </motion.p>
          </div>
          
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2 }}
          >
            <Link href="/portfolio">
              <MagneticButton className="border border-white/20 text-white font-button uppercase tracking-widest text-xs px-8 py-4 hover:bg-white hover:text-background transition-colors duration-500">
                View Full Portfolio
              </MagneticButton>
            </Link>
          </motion.div>
        </div>

        {/* Masonry/Grid Gallery */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
          {featuredWorks.map((work, index) => (
            <motion.div
              key={work.id}
              initial={{ opacity: 0, y: 100, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.2, duration: 1, ease: [0.25, 0.1, 0.25, 1] }}
              className={`group relative overflow-hidden bg-card ${index % 2 !== 0 ? 'md:mt-24' : ''}`}
            >
              <div className="aspect-[4/5] relative overflow-hidden">
                <Image 
                  src={work.image} 
                  alt={work.title} 
                  fill 
                  className="object-cover transition-transform duration-1000 group-hover:scale-105 group-hover:blur-[2px]" 
                  sizes="(max-width: 768px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/20 to-transparent opacity-60 group-hover:opacity-80 transition-opacity duration-500" />
                
                {/* Content Overlay */}
                <div className="absolute inset-0 p-8 flex flex-col justify-end translate-y-8 group-hover:translate-y-0 transition-transform duration-500">
                  <span className="font-sans text-xs text-primary uppercase tracking-widest mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                    {work.category}
                  </span>
                  <h3 className="font-heading text-3xl text-white mb-2">{work.title}</h3>
                  <p className="font-sans text-sm text-white/70 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-200">
                    {work.location}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
