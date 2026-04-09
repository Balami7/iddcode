'use client'; 

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Mail, Phone, MapPin, Send, Facebook, Twitter, Instagram, ArrowUp } from 'lucide-react';

export default function Footer() {
  const [isVisible, setIsVisible] = useState(false);

 
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <footer className="bg-gradient-to-b from-gray-900 to-black text-gray-300 relative">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-8">
          
          <div>
            <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">Objectives</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 text-xl leading-none">•</span>
                Enhancing Security
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 text-xl leading-none">•</span>
                Streamlining Processes
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 text-xl leading-none">•</span>
                Fostering Trust and Customer Experience
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 text-xl leading-none">•</span>
                Preventing Fraud and Identity Theft
              </li>
              <li className="flex items-start">
                <span className="text-emerald-500 mr-2 text-xl leading-none">•</span>
                Regulatory Compliance
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">Why Choose Us</h3>
            <ul className="space-y-3 text-gray-400">
              <li className="flex items-center">
                <span className="text-emerald-500 mr-2 text-xl">•</span>
                Innovative Technology
              </li>
              <li className="flex items-center">
                <span className="text-emerald-500 mr-2 text-xl">•</span>
                Integrity
              </li>
              <li className="flex items-center">
                <span className="text-emerald-500 mr-2 text-xl">•</span>
                Security
              </li>
              <li className="flex items-center">
                <span className="text-emerald-500 mr-2 text-xl">•</span>
                Security and Customer Satisfaction
              </li>
              <li className="flex items-center">
                <span className="text-emerald-500 mr-2 text-xl">•</span>
                Assurance and Customer Satisfaction
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">Contact Us</h3>
            <div className="space-y-4 text-gray-400">
              <div className="flex items-start">
                <MapPin className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                <span>Abuja, Nigeria</span>
              </div>
              <div className="flex items-center">
                <Phone className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                <a href="tel:+2347031031944" className="hover:text-emerald-400 transition-colors">+234 703 103 1944</a>
              </div>
              <div className="flex items-center">
                <Mail className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                <a href="mailto:info@idcode.ng" className="hover:text-emerald-400 transition-colors">info@idcode.ng</a>
              </div>
            </div>
            <div className="flex space-x-5 mt-6">
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><Facebook className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><Twitter className="h-6 w-6" /></a>
              <a href="#" className="text-gray-400 hover:text-emerald-400 transition-colors"><Instagram className="h-6 w-6" /></a>
            </div>
          </div>

          <div>
            <h3 className="text-lg font-semibold text-white mb-5 tracking-wide">Newsletter</h3>
            <p className="text-gray-400 mb-4">Stay updated with our latest security insights and news.</p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full bg-gray-900 border border-gray-700 text-white placeholder-gray-500 rounded-lg py-3 px-4 pr-12 focus:outline-none focus:border-emerald-600 focus:ring-1 focus:ring-emerald-600 transition"
                />
                <button type="submit" className="absolute right-2 top-1/2 -translate-y-1/2 bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded-lg transition-colors">
                  <Send className="h-5 w-5" />
                </button>
              </div>
              <button type="submit" className="w-full bg-emerald-600 hover:bg-emerald-700 text-white font-medium py-3 px-6 rounded-lg transition-colors duration-200">
                SUBSCRIBE
              </button>
            </form>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-gray-800 text-center text-sm text-gray-500 relative">
          <p>© {new Date().getFullYear()} IDCode Nigeria. All rights reserved.</p>
          
          <button
            onClick={scrollToTop}
            className={`fixed bottom-8 right-8 p-4 rounded-full bg-emerald-600 text-white shadow-lg transition-all duration-300 hover:bg-emerald-700 hover:scale-110 focus:outline-none z-[100] ${
              isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10 pointer-events-none'
            }`}
            aria-label="Back to top"
          >
            <ArrowUp className="h-6 w-6" />
          </button>
        </div>
      </div>
    </footer>
  );
}
