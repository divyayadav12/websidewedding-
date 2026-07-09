"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react";

const approachItems = [
  {
    title: "Cinematic Quality",
    content: "Premium cinematic look with a focus on emotional storytelling."
  },
  {
    title: "Creative Editing Style",
    content: "Seamless transitions, immersive sound design, and attention to every detail."
  },
  {
    title: "Client Satisfaction",
    content: "Fast turnaround time, unlimited creativity, and quality without compromise."
  }
];

export default function ApproachSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/60 mb-4 font-semibold">
          Why Choose Us
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground">
          Edit With Anshul
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
        {/* Accordion */}
        <div className="flex flex-col gap-4">
          {approachItems.map((item, index) => (
            <div 
              key={index}
              className="bg-[#f0ece1] border border-foreground/5 p-6 md:p-8 cursor-pointer transition-colors hover:bg-[#e8e4d8]"
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <div className="flex justify-between items-center">
                <h3 className="font-heading text-2xl md:text-3xl text-foreground">
                  {item.title}
                </h3>
                <ChevronDown 
                  className={`transition-transform duration-300 text-foreground/50 ${openIndex === index ? "rotate-180" : ""}`}
                />
              </div>
              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <p className="font-sans text-foreground/80 pt-4 leading-relaxed text-sm md:text-base">
                      {item.content}
                    </p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>

        {/* Image */}
        <div className="relative aspect-[4/3] md:aspect-square overflow-hidden bg-muted w-full h-full">
          <img 
            src="https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=1200" 
            alt="Video Editing Studio" 
            className="w-full h-full object-cover"
          />
        </div>
      </div>
    </section>
  );
}
