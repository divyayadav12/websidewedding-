"use client";

import { motion } from "framer-motion";
import useEmblaCarousel from "embla-carousel-react";
import { useCallback, useEffect, useState } from "react";
import { dummyReviews } from "@/data";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import Image from "next/image";

export default function ReviewsCarousel() {
  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true, align: "center" });
  const [selectedIndex, setSelectedIndex] = useState(0);

  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);

  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  const onSelect = useCallback(() => {
    if (!emblaApi) return;
    setSelectedIndex(emblaApi.selectedScrollSnap());
  }, [emblaApi, setSelectedIndex]);

  useEffect(() => {
    if (!emblaApi) return;
    onSelect();
    emblaApi.on("select", onSelect);
  }, [emblaApi, onSelect]);

  return (
    <section className="py-32 bg-background relative z-10 overflow-hidden">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-primary/5 blur-[150px] rounded-full pointer-events-none" />

      <div className="container mx-auto px-6 relative">
        <div className="text-center mb-16">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            className="font-heading text-4xl md:text-5xl text-white mb-4"
          >
            Love Letters
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ delay: 0.1 }}
            className="font-sans text-white/60 max-w-xl mx-auto"
          >
            What our couples say about their luxury cinematic experience.
          </motion.p>
        </div>

        <div className="relative max-w-4xl mx-auto">
          <div className="overflow-hidden" ref={emblaRef}>
            <div className="flex">
              {dummyReviews.map((review, index) => (
                <div key={review.id} className="flex-[0_0_100%] min-w-0 pl-4 pr-4">
                  <motion.div 
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="bg-card border border-white/5 p-8 md:p-12 text-center rounded-sm relative"
                  >
                    <Quote className="absolute top-6 left-6 text-white/5 w-16 h-16" />
                    
                    <div className="flex justify-center mb-6">
                      {[...Array(review.rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-primary fill-primary mx-1" />
                      ))}
                    </div>
                    
                    <p className="font-heading text-lg md:text-2xl text-white leading-relaxed mb-8 italic">
                      "{review.text}"
                    </p>
                    
                    <div className="flex flex-col items-center">
                      <div className="w-12 h-12 rounded-full overflow-hidden mb-4 border border-white/10 relative">
                        <Image src={review.image} alt={review.name} fill className="object-cover" />
                      </div>
                      <h4 className="font-sans text-sm text-white uppercase tracking-widest">{review.name}</h4>
                    </div>
                  </motion.div>
                </div>
              ))}
            </div>
          </div>

          <button 
            onClick={scrollPrev}
            className="absolute top-1/2 -left-4 md:-left-12 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-background transition-all duration-300 z-10"
          >
            <ChevronLeft size={20} />
          </button>
          
          <button 
            onClick={scrollNext}
            className="absolute top-1/2 -right-4 md:-right-12 -translate-y-1/2 w-10 h-10 rounded-full border border-white/20 flex items-center justify-center text-white/70 hover:bg-white hover:text-background transition-all duration-300 z-10"
          >
            <ChevronRight size={20} />
          </button>

        </div>
      </div>
    </section>
  );
}
