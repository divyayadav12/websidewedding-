"use client";

import { motion } from "framer-motion";

const approachItems = [
  {
    title: "Light is Everything",
    content: "I work almost exclusively with natural and available light, chasing the golden glow that makes images feel warm, timeless, and alive.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "People First",
    content: "Posing has its place, but I'll always choose a genuine laugh over a perfect pose. Real moments are what you'll treasure most.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Less is More",
    content: "My editing is refined and restrained—enhancing what's already there, never overprocessed. Your images should still feel beautiful in 30 years.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800"
  }
];

export default function AboutApproachGrid() {
  return (
    <section className="py-24 px-6 max-w-[1400px] mx-auto">
      <div className="text-center mb-16">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/60 mb-4 font-semibold">
          My Approach
        </p>
        <h2 className="font-heading text-4xl md:text-5xl text-foreground">
          What I Believe
        </h2>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {approachItems.map((item, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col"
          >
            <div className="w-full aspect-[4/5] mb-8 overflow-hidden bg-muted">
              <img 
                src={item.image} 
                alt={item.title} 
                className="w-full h-full object-cover transition-transform duration-700 hover:scale-105"
              />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              {item.title}
            </h3>
            <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
              {item.content}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
