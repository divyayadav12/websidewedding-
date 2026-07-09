import PageHeader from "@/components/layout/PageHeader";
import Link from "next/link";

const portfolioItems = [
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511895426328-dc8714191300?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1520854221256-17451cc331bf?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1532712938310-34cb3982ef74?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1511285560929-80b456fea0bc?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519225421980-715cb0215aed?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1469334031218-e382a71b716b?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1465495976277-4387d4b0b4c6?auto=format&fit=crop&q=80&w=800",
  "https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=800"
];

const gridClasses = [
  "md:row-span-2", 
  "md:row-span-2", 
  "md:row-span-1", 
  "md:row-span-1", 
  "md:row-span-1", 
  "md:row-span-1", 
  "md:row-span-2", 
  "md:row-span-2", 
  "md:row-span-2 md:col-span-2", 
  "md:row-span-2 md:col-span-1"  
];

export default function PortfolioPage() {
  return (
    <main className="min-h-screen bg-background">
      <div className="pt-32 pb-16 text-center">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/60 mb-4 font-semibold">
          Portfolio
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Cinematic Stories Told
        </h1>
      </div>

      <div className="max-w-[1400px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] md:auto-rows-[400px]">
          {portfolioItems.map((src, index) => (
            <div key={index} className={`relative group overflow-hidden bg-muted cursor-pointer ${gridClasses[index]}`}>
              <img 
                src={src} 
                alt={`Portfolio project ${index + 1}`} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-foreground/0 group-hover:bg-foreground/20 transition-colors duration-500" />
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
