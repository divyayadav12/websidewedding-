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
    <footer className="bg-background pt-24 pb-12 border-t border-foreground/5 relative overflow-hidden">
      <div className="max-w-[1400px] mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24 mb-16">
          
          {/* Brand Section */}
          <div className="md:col-span-5 flex flex-col items-center md:items-start text-center md:text-left">
            <h3 className="font-heading text-3xl mb-6 text-foreground tracking-widest uppercase">
              Anshu Flashes
            </h3>
            <p className="font-sans text-sm text-foreground/60 max-w-sm mb-8 font-medium leading-relaxed">
              Capturing the raw emotion, timeless beauty, and cinematic essence of your special day. Based in India, available worldwide.
            </p>
            <div className="flex items-center gap-4">
              <a href="https://www.instagram.com/anshuflashes?igsh=eGUweWJyYmFmZmlq&utm_source=qr" target="_blank" rel="noopener noreferrer" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground transition-all duration-300 font-sans text-xs tracking-widest uppercase">
                IG
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground transition-all duration-300 font-sans text-xs tracking-widest uppercase">
                FB
              </a>
              <a href="#" className="w-10 h-10 rounded-full border border-foreground/10 flex items-center justify-center text-foreground/70 hover:text-foreground hover:border-foreground transition-all duration-300 font-sans text-xs tracking-widest uppercase">
                YT
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-sans text-lg text-foreground font-medium tracking-wide">Quick Links</h4>
            <ul className="space-y-4">
              {["Home", "Portfolio", "Investment", "About", "Contact"].map((link) => (
                <li key={link}>
                  <Link href={`/${link.toLowerCase() === 'home' ? '' : link.toLowerCase()}`} className="font-sans text-sm text-foreground/60 hover:text-foreground transition-colors duration-300">
                    {link}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div className="md:col-span-2 space-y-6">
            <h4 className="font-sans text-lg text-foreground font-medium tracking-wide">Services</h4>
            <ul className="space-y-4">
              {["Wedding Films", "YouTube Editing", "Commercial Ads", "Instagram Reels"].map((service) => (
                <li key={service}>
                  <Link href="/portfolio" className="font-sans text-sm text-foreground/60 hover:text-foreground transition-colors duration-300">
                    {service}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3 space-y-6">
            <h4 className="font-sans text-lg text-foreground font-medium tracking-wide">Get in Touch</h4>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3 text-sm text-foreground/60">
                <MapPin size={18} className="text-foreground shrink-0" />
                <span>Bhopal, India<br/>Available Worldwide</span>
              </li>
              <li className="flex items-center space-x-3 text-sm text-foreground/60">
                <Phone size={18} className="text-foreground shrink-0" />
                <a href="tel:+919301849860" className="hover:text-foreground transition-colors">+91 9301849860</a>
              </li>
              <li className="flex items-center space-x-3 text-sm text-foreground/60 break-all">
                <Mail size={18} className="text-foreground shrink-0" />
                <a href="mailto:Anshulpatel2233@gmail.com" className="hover:text-foreground transition-colors">Anshulpatel2233@gmail.com</a>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-foreground/5 pt-8 flex flex-col lg:flex-row items-center justify-between gap-6">
          <div className="flex items-center space-x-4">
            <p className="font-sans text-xs text-foreground/40 tracking-wider">
              &copy; {new Date().getFullYear()} ANSHU FLASHES. ALL RIGHTS RESERVED.
            </p>
            <Link href="/admin" className="font-sans text-xs text-foreground/20 hover:text-foreground/60 transition-colors">
              Admin Login
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
