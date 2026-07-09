"use client";

import { motion } from "framer-motion";

const services = [
  {
    title: "Light is Everything",
    description: "I work almost exclusively with natural and available light, chasing the golden glow that makes images feel warm, timeless, and alive.",
    image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "People First",
    description: "Posing has its place, but I'll always choose a genuine laugh over a perfect pose. Real moments are what you'll treasure most.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800"
  },
  {
    title: "Less is More",
    description: "My editing is refined and restrained—enhancing what's already there, never overprocessed. Your images should still feel beautiful in 30 years.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800"
  }
];

export default function ServicesGrid() {
  return (
    <section className="py-24 px-6 max-w-7xl mx-auto">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
        {services.map((service, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
            className="flex flex-col"
          >
            <div className="w-full aspect-square md:aspect-[4/5] bg-muted mb-8 overflow-hidden">
              <img 
                src={service.image} 
                alt={service.title}
                className="w-full h-full object-cover"
              />
            </div>
            <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">
              {service.title}
            </h3>
            <p className="font-sans text-foreground/80 leading-relaxed text-sm">
              {service.description}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
