"use client";

import { motion } from "framer-motion";
import { dummyServices } from "@/data";
import { Camera, Video, Heart, Plane } from "lucide-react";

const getIcon = (name: string) => {
  switch (name) {
    case "Camera": return <Camera className="w-10 h-10 text-primary mb-6" strokeWidth={1} />;
    case "Video": return <Video className="w-10 h-10 text-primary mb-6" strokeWidth={1} />;
    case "Heart": return <Heart className="w-10 h-10 text-primary mb-6" strokeWidth={1} />;
    case "Plane": return <Plane className="w-10 h-10 text-primary mb-6" strokeWidth={1} />;
    default: return <Camera className="w-10 h-10 text-primary mb-6" strokeWidth={1} />;
  }
};

export default function ServicesPreview() {
  return (
    <section className="py-32 bg-secondary relative z-10 border-t border-white/5">
      <div className="container mx-auto px-6">
        
        <div className="text-center mb-20">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading text-4xl md:text-5xl text-white mb-4"
          >
            Our Services
          </motion.h2>
          <motion.div 
            initial={{ opacity: 0, width: 0 }}
            whileInView={{ opacity: 1, width: "60px" }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.2, duration: 0.8 }}
            className="h-px bg-primary mx-auto mb-6"
          />
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.3 }}
            className="font-sans text-white/60 max-w-2xl mx-auto"
          >
            From the quiet, intimate glances to the grand celebrations, our tailored services ensure every memory is preserved with cinematic perfection.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {dummyServices.map((service, index) => (
            <motion.div
              key={service.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: index * 0.1, duration: 0.6 }}
              className="group bg-card hover:bg-white/5 border border-white/5 hover:border-primary/30 p-8 transition-all duration-500 cursor-pointer"
            >
              {getIcon(service.icon)}
              <h3 className="font-heading text-xl text-white mb-3 group-hover:text-primary transition-colors">
                {service.title}
              </h3>
              <p className="font-sans text-sm text-white/50 mb-6 line-clamp-3">
                {service.description}
              </p>
              <div className="flex items-center justify-between mt-auto">
                <span className="font-sans text-xs text-white/40 uppercase tracking-widest">
                  Starts at
                </span>
                <span className="font-sans text-sm text-primary">
                  {service.startingPrice}
                </span>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
