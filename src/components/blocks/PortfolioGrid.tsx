"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const portfolioItems = [
  { name: "Alex + Emily", image: "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800" },
  { name: "Jacob + Samantha", image: "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800" },
  { name: "David + Jessica", image: "https://images.unsplash.com/photo-1583939003579-730e3918a45a?auto=format&fit=crop&q=80&w=800" },
  { name: "Ryan + Ashley", image: "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800" }
];

export default function PortfolioGrid() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 h-[60vh] md:h-[80vh]">
        {portfolioItems.map((item, index) => (
          <Link href="/portfolio" key={index} className="relative w-full h-full group overflow-hidden block">
            <img 
              src={item.image} 
              alt={item.name} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-500" />
            <div className="absolute inset-0 p-8 flex flex-col justify-end">
              <h3 className="font-heading text-3xl text-white text-center translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                {item.name}
              </h3>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
