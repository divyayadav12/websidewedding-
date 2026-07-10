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
    <footer className="bg-[#111111] pt-24 pb-12 border-t border-white/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-heading text-3xl mb-6 text-white tracking-widest uppercase">
              Anshu Flashes
            </h3>
            <p className="font-sans text-sm text-white/60 max-w-sm mb-8 font-medium leading-relaxed">
              Capturing the raw emotion, timeless beauty, and cinematic essence of your special day. Based in India, available worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/anshuflashes?igsh=eGUweWJyYmFmZmlq&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-white/70 hover:text-white hover:border-white transition-all duration-300">
                <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path><polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon></svg>
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-6">
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
          <div className="md:col-span-2 space-y-6">
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
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-sans text-lg text-white font-medium tracking-wide">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-white/60">
                <MapPin size={18} className="text-[#f4efe6] shrink-0" />
                <span>Bhopal, India<br/>Available Worldwide</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/60">
                <Phone size={18} className="text-[#f4efe6] shrink-0" />
                <a href="tel:+919301849860" className="hover:text-white transition-colors">+91 9301849860</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-white/60 break-all">
                <Mail size={18} className="text-[#f4efe6] shrink-0" />
                <a href="mailto:Anshulpatel2233@gmail.com" className="hover:text-white transition-colors">Anshulpatel2233@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-white/5 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <p className="font-sans text-xs text-white/40 tracking-wider">
              &copy; {new Date().getFullYear()} ANSHU FLASHES. ALL RIGHTS RESERVED.
            </p>
            <Link href="/admin" className="font-sans text-xs text-white/20 hover:text-white/60 transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
