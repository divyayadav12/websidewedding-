"use client";

import { motion } from "framer-motion";

const testimonials = [
  {
    name: "Client Review",
    text: "Exceptional editing quality with a cinematic touch. Every project exceeded expectations.",
    image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Client Review",
    text: "Professional communication, fast delivery, and outstanding creativity.",
    image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=150&h=150"
  },
  {
    name: "Client Review",
    text: "Highly recommended for wedding films, reels, and commercial editing.",
    image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=150&h=150"
  }
];

export default function TestimonialsGrid() {
  return (
    <section className="py-32 px-6 w-full" style={{ backgroundColor: "#2b261c", color: "#f4efe6" }}>
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-20">
          <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-70 mb-4 font-semibold">
            What They Are Saying
          </p>
          <h2 className="font-heading text-4xl md:text-5xl">
            Client's Love
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((item, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: index * 0.2 }}
              className="border border-[#f4efe6]/20 p-10 flex flex-col items-center text-center"
            >
              <div className="w-20 h-20 rounded-full overflow-hidden mb-8">
                <img 
                  src={item.image} 
                  alt={item.name} 
                  className="w-full h-full object-cover"
                />
              </div>
              <p className="font-sans text-xs tracking-[0.2em] uppercase opacity-80 mb-6 font-semibold">
                - {item.name}
              </p>
              <p className="font-sans leading-relaxed text-[#f4efe6]/90">
                "{item.text}"
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
