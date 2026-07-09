"use client";

import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    weddingDate: "",
    location: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!res.ok) throw new Error("Failed to submit");
      
      setStatus("success");
      setFormData({
        firstName: "",
        lastName: "",
        email: "",
        weddingDate: "",
        location: "",
        message: "",
      });
    } catch (error) {
      setStatus("error");
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <main className="min-h-screen bg-[#e8e4d8]">
      <div className="pt-32 pb-16 text-center max-w-4xl mx-auto px-6">
        <p className="font-sans text-xs tracking-[0.2em] uppercase text-foreground/60 mb-4 font-semibold">
          Get In Touch
        </p>
        <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl text-foreground mb-6">
          Let's Create Together
        </h1>
        <p className="font-sans text-sm md:text-base text-foreground/80 leading-relaxed max-w-2xl mx-auto">
          I'd love to hear about your wedding plans. Share a few details below and I'll be in touch within 48 hours.
        </p>
      </div>

      <div className="max-w-[1200px] mx-auto px-6 pb-24">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24 items-start">
          {/* Image */}
          <div className="relative aspect-[4/5] overflow-hidden bg-muted">
            <img 
              src="https://images.unsplash.com/photo-1516035069371-29a1b244cc32?auto=format&fit=crop&q=80&w=1200" 
              alt="Woman with Camera" 
              className="w-full h-full object-cover"
            />
          </div>

          {/* Form */}
          <form className="space-y-6 pt-4" onSubmit={handleSubmit}>
            {status === "success" && (
              <div className="bg-green-100 text-green-800 p-4 rounded-sm font-sans text-sm mb-4">
                Thank you! Your inquiry has been sent successfully. We will be in touch soon.
              </div>
            )}
            {status === "error" && (
              <div className="bg-red-100 text-red-800 p-4 rounded-sm font-sans text-sm mb-4">
                Something went wrong. Please try again later.
              </div>
            )}
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="font-sans text-sm font-semibold text-foreground">First Name *</label>
                <input 
                  type="text" 
                  name="firstName"
                  value={formData.firstName}
                  onChange={handleChange}
                  required
                  placeholder="First Name" 
                  className="w-full bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                />
              </div>
              <div className="space-y-2 mt-auto">
                <label className="font-sans text-sm font-semibold text-foreground">Last Name *</label>
                <input 
                  type="text" 
                  name="lastName"
                  value={formData.lastName}
                  onChange={handleChange}
                  required
                  placeholder="Last Name" 
                  className="w-full bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="font-sans text-sm font-semibold text-foreground">Email *</label>
              <input 
                type="email" 
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="john@example.com"
                className="w-full bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
              />
            </div>

            <div className="space-y-2">
              <label className="font-sans text-sm font-semibold text-foreground">Wedding Date *</label>
              <input 
                type="date" 
                name="weddingDate"
                value={formData.weddingDate}
                onChange={handleChange}
                required
                placeholder="Select a date"
                className="w-full bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
              />
            </div>

            <div className="space-y-2">
              <label className="font-sans text-sm font-semibold text-foreground">Wedding Location *</label>
              <input 
                type="text" 
                name="location"
                value={formData.location}
                onChange={handleChange}
                required
                placeholder="Venue or City"
                className="w-full bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20"
              />
            </div>

            <div className="space-y-2">
              <label className="font-sans text-sm font-semibold text-foreground">Message *</label>
              <textarea 
                rows={4}
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                placeholder="Tell us about your wedding..."
                className="w-full bg-white px-4 py-3 text-sm focus:outline-none focus:ring-1 focus:ring-foreground/20 resize-none"
              ></textarea>
            </div>

            <button 
              type="submit" 
              disabled={status === "loading"}
              className="bg-foreground text-background font-sans text-xs tracking-widest uppercase px-8 py-4 hover:opacity-80 transition-opacity disabled:opacity-50"
            >
              {status === "loading" ? "Submitting..." : "Submit"}
            </button>
          </form>
        </div>
      </div>

      {/* Map Section */}
      <div className="bg-[#33312e] text-white pt-24">
        <div className="text-center mb-12">
          <h2 className="font-heading text-4xl md:text-5xl mb-4">Our Location</h2>
          <p className="font-sans text-sm tracking-wide opacity-80">
            Sydney, Australia | Available Australia-wide
          </p>
        </div>
        <div className="w-full h-[500px] grayscale invert-[.9] hue-rotate-180">
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3312.4339890250666!2d151.20699021521015!3d-33.86881968065624!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6b12ae401e8b983f%3A0x5017d681632ccc0!2sSydney%20NSW%2C%20Australia!5e0!3m2!1sen!2sus!4v1655000000000!5m2!1sen!2sus" 
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen={false} 
            loading="lazy" 
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </div>
    </main>
  );
}
