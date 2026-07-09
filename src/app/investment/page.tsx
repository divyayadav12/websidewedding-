"use client";

import Link from "next/link";
import { Check, ChevronDown } from "lucide-react";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const faqs = [
  {
    question: "What services does your creative business offer?",
    answer: "We specialize in professional video editing for weddings, pre-weddings, YouTube content, Instagram reels, and commercial advertisements. Our services include cinematic storytelling, color grading, sound design, and full post-production."
  },
  {
    question: "Do you have experience in my industry?",
    answer: "Yes, with over 4 years of experience and 200+ completed projects, we have worked extensively across the wedding industry, social media content creation, and commercial brand storytelling."
  },
  {
    question: "How long will it take to complete my project?",
    answer: "For most projects, our turnaround time is within 2 to 4 weeks depending on the complexity of the video and current workload. We prioritize quality without compromising on timely delivery."
  },
  {
    question: "What are your rates for a typical project?",
    answer: "Every project is unique. Our packages start from $1,200 for essential editing services. Please get in touch with your specific requirements for a customized quote."
  }
];

export default function PricingPage() {
  const [openFaq, setOpenFaq] = useState<number | null>(null);

  return (
    <main className="min-h-screen bg-background">
      <div className="pt-32 pb-16 text-center max-w-4xl mx-auto px-6">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/60 mb-4 font-semibold">
          Investment
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Crafted Collections
        </h1>
        <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed">
          Every project is different. Each collection is designed to give you the experience and imagery your story deserves, with the flexibility to add what matters most to you.
        </p>
      </div>

      {/* Package 1 */}
      <div className="bg-[#e8e4d8] py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Details (Left) */}
          <div className="flex flex-col justify-center order-2 md:order-1">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/60 mb-4 font-semibold">
              The Collection
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              From $4,800
            </h2>
            <p className="font-sans text-foreground/80 font-semibold mb-8">
              Our most popular package for full wedding days.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "10 hours of coverage",
                "Engagement session",
                "Online private gallery",
                "400+ edited images",
                "Print release"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-4 h-4 opacity-80 flex-shrink-0" />
                  <span className="font-sans text-sm md:text-base opacity-90">{feature}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link 
                href="/contact" 
                className="inline-block bg-[#33312e] text-white font-sans text-xs tracking-widest uppercase px-8 py-4 hover:opacity-90 transition-opacity"
              >
                Inquire Now
              </Link>
            </div>
          </div>
          {/* Image (Right) */}
          <div className="relative aspect-[4/3] md:aspect-square w-full order-1 md:order-2 border-4 border-background/20 overflow-hidden bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
              alt="The Collection" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* Package 2 */}
      <div className="bg-[#dcd8cc] py-24 px-6">
        <div className="max-w-[1200px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-center">
          {/* Image (Left) */}
          <div className="relative aspect-[4/3] md:aspect-square w-full border-4 border-background/20 overflow-hidden bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200" 
              alt="The Complete" 
              className="w-full h-full object-cover"
            />
          </div>
          {/* Details (Right) */}
          <div className="flex flex-col justify-center">
            <p className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/60 mb-4 font-semibold">
              The Complete
            </p>
            <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
              From $6,500
            </h2>
            <p className="font-sans text-foreground/80 font-semibold mb-8">
              For grand celebrations that deserve every moment captured.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Full day coverage",
                "Engagement session",
                "Online private gallery",
                "600+ edited images",
                "Print release"
              ].map((feature, idx) => (
                <li key={idx} className="flex items-center gap-3">
                  <Check className="w-4 h-4 opacity-80 flex-shrink-0" />
                  <span className="font-sans text-sm md:text-base opacity-90">{feature}</span>
                </li>
              ))}
            </ul>
            <div>
              <Link 
                href="/contact" 
                className="inline-block bg-transparent border border-foreground text-foreground font-sans text-xs tracking-widest uppercase px-8 py-4 hover:bg-foreground hover:text-white transition-all"
              >
                Inquire Now
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="bg-[#e8e4d8] py-24 px-6">
        <div className="max-w-4xl mx-auto">
          <h2 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-16 text-center">
            Frequently Asked Questions
          </h2>
          <div className="flex flex-col divide-y divide-foreground/10 border-t border-b border-foreground/10">
            {faqs.map((faq, index) => (
              <div key={index} className="py-6 cursor-pointer" onClick={() => setOpenFaq(openFaq === index ? null : index)}>
                <div className="flex justify-between items-center group">
                  <h3 className="font-sans font-semibold text-lg md:text-xl text-foreground group-hover:text-foreground/70 transition-colors">
                    {faq.question}
                  </h3>
                  <ChevronDown className={`w-5 h-5 text-foreground/50 transition-transform duration-300 ${openFaq === index ? "rotate-180" : ""}`} />
                </div>
                <AnimatePresence>
                  {openFaq === index && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden"
                    >
                      <p className="font-sans text-foreground/70 mt-4 leading-relaxed">
                        {faq.answer}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}
