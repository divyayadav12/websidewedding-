"use client";

import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";
import { usePathname } from "next/navigation";

export default function Footer() {
  const pathname = usePathname();

  if (pathname?.startsWith("/admin")) {
    return null;
  }
  return (
    <footer className="bg-[#111111] relative border-t border-white/5 pt-20 pb-10 overflow-hidden">
      {/* Luxury Background Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-px bg-gradient-to-r from-transparent via-[#f4efe6]/50 to-transparent opacity-50"></div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Brand */}
          <div className="space-y-6">
            <h3 className="font-heading text-3xl text-[#f4efe6] tracking-widest uppercase">
              EDIT WITH ANSHUL
            </h3>
            <p className="font-sans text-sm text-white/60 leading-relaxed max-w-sm">
              Professional Video Editing Studio. Where Every Frame Tells a Story.
            </p>
            <div className="flex space-x-4">
              <a href="https://instagram.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#f4efe6] hover:border-[#f4efe6] transition-all duration-300 font-sans text-xs tracking-widest uppercase">
                IG
              </a>
              <a href="https://youtube.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#f4efe6] hover:border-[#f4efe6] transition-all duration-300 font-sans text-xs tracking-widest uppercase">
                YT
              </a>
              <a href="https://facebook.com/" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-[#f4efe6] hover:border-[#f4efe6] transition-all duration-300 font-sans text-xs tracking-widest uppercase">
                FB
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h4 className="font-sans text-lg text-white font-medium tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Portfolio", "Investment", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`} className="font-sans text-sm text-white/60 hover:text-[#f4efe6] transition-colors duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h4 className="font-sans text-lg text-white font-medium tracking-wide">Services</h4>
            <ul className="space-y-4">
              {["Wedding Films", "YouTube Editing", "Commercial Ads", "Instagram Reels"].map((service) => (
                <li key={service}>
                  <Link href="/portfolio" className="font-sans text-sm text-white/60 hover:text-[#f4efe6] transition-colors duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="space-y-6">
            <h4 className="font-sans text-lg text-white font-medium tracking-wide">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-white/60">
                <MapPin size={18} className="text-[#f4efe6] shrink-0" />
                <span>123 Luxury Avenue, Beverly Hills, CA 90210</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/60">
                <Phone size={18} className="text-[#f4efe6] shrink-0" />
                <span>+1 (555) 123-4567</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/60">
                <Mail size={18} className="text-[#f4efe6] shrink-0" />
                <span>hello@luxuryweddings.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* Newsletter & Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <p className="font-sans text-xs text-white/40 tracking-wider">
              &copy; {new Date().getFullYear()} EDIT WITH ANSHUL. ALL RIGHTS RESERVED.
            </p>
            <Link href="/admin" className="font-sans text-xs text-white/20 hover:text-white/60 transition-colors">
              Admin Login
            </Link>
          </div>
          <div className="flex items-center space-x-4">
            <input 
              type="email" 
              placeholder="Enter your email" 
              className="bg-transparent border border-white/10 rounded-none px-4 py-2 text-sm text-white focus:outline-none focus:border-[#f4efe6] transition-colors w-64"
            />
            <button className="bg-[#f4efe6] text-[#111111] font-button text-sm px-6 py-2 uppercase tracking-wider hover:bg-white transition-colors duration-300">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
}
