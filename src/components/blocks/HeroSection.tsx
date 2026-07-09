"use client";

export default function HeroSection() {
  return (
    <section className="relative h-[100vh] w-full flex flex-col pt-20 px-6 pb-10 bg-[#e8e4d8]">
      <div className="relative w-full h-full max-w-[1400px] mx-auto overflow-hidden">
        {/* Background Split Images/Video */}
        <div className="absolute inset-0 grid grid-cols-1 md:grid-cols-2">
          {/* Left Side */}
          <div className="relative w-full h-full bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1519741497674-611481863552?auto=format&fit=crop&q=80&w=1200" 
              alt="Groom"
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </div>
          {/* Right Side */}
          <div className="relative w-full h-full bg-muted hidden md:block">
            <img 
              src="https://images.unsplash.com/photo-1606800052052-a08af7148866?auto=format&fit=crop&q=80&w=1200" 
              alt="Bride"
              className="w-full h-full object-cover grayscale-[20%]"
            />
          </div>
        </div>

        {/* Translucent Card Overlay */}
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none p-6">
          <div
            className="relative z-10 bg-[#e8e4d8]/60 backdrop-blur-md px-6 py-10 md:px-10 md:py-16 text-center w-[80%] max-w-3xl shadow-2xl rounded-sm pointer-events-auto"
          >
            <p className="font-sans text-xs md:text-sm tracking-[0.3em] uppercase text-foreground/80 mb-6 font-semibold">
              ANSHUL PATEL PHOTOGRAPHY
            </p>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-5xl leading-tight text-foreground mb-8">
              Timeless Wedding <br className="hidden md:block"/>
              Photography for Modern Romantics
            </h1>
            <p className="font-sans text-sm md:text-base text-foreground/80 font-medium">
              Capturing honest moments across Australia
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
