'use client';

import { useState, useEffect, useCallback } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const galleryImages = [
  { src: '/partnership1.jpeg', alt: 'Partnership 1' },
  { src: '/partnership2.jpeg', alt: 'Partnership 2' },
  { src: '/partnership3.jpeg', alt: 'Partnership 3' },
];

export default function PartnershipGallery() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = useCallback(() => {
    setCurrentIndex((prev) => (prev === galleryImages.length - 1 ? 0 : prev + 1));
  }, []);

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev === 0 ? galleryImages.length - 1 : prev - 1));
  };

  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(timer);
  }, [nextSlide]);

  return (
    <section className="bg-white py-12 min-[741px]:py-20 min-[1011px]:py-24 overflow-hidden">
      <div className="mx-auto max-w-7xl px-12 min-[741px]:px-20 lg:px-32">
        
       
        <div className="text-center mb-10 min-[741px]:mb-16">
          <h2 className="text-3xl min-[741px]:text-4xl font-bold text-black mb-4">
            Partnership Gallery
          </h2>
          <p className="text-black text-sm min-[741px]:text-base max-w-3xl mx-auto">
            We've partnered with different Organizations and Commissions to provide secure and reliable identification verification services across Nigeria.
          </p>
        </div>

        
        <div className="relative group max-w-5xl mx-auto">
          
        
          <div className="relative overflow-hidden rounded-xl border-2 border-gray-200 aspect-[16/8] min-[741px]:aspect-[21/9] bg-gray-50">
            <div 
              className="flex transition-transform duration-700 ease-in-out h-full"
              style={{ transform: `translateX(-${currentIndex * 100}%)` }}
            >
              {galleryImages.map((image, index) => (
                <div key={index} className="relative min-w-full h-full">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover"
                  />
                   {/*
                  <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-sm px-4 py-1.5 rounded shadow-sm text-xs font-bold text-black uppercase tracking-wider">
                    Our Team
                  </div>
                  */}
                </div>
              ))}
            </div>
          </div>
         

          
          <button
            onClick={prevSlide}
            className="absolute -left-10 min-[741px]:-left-16 min-[1011px]:-left-24 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-emerald-700 transition-all hover:scale-110 p-2"
            aria-label="Previous slide"
          >
            <ChevronLeft className="h-10 w-10 min-[741px]:h-14 min-[741px]:w-14 stroke-[1.5px]" />
          </button>

          
          <button
            onClick={nextSlide}
            className="absolute -right-10 min-[741px]:-right-16 min-[1011px]:-right-24 top-1/2 -translate-y-1/2 text-emerald-600 hover:text-emerald-700 transition-all hover:scale-110 p-2"
            aria-label="Next slide"
          >
            <ChevronRight className="h-10 w-10 min-[741px]:h-14 min-[741px]:w-14 stroke-[1.5px]" />
          </button>

          
          <div className="flex justify-center gap-3 mt-8">
            {galleryImages.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`h-2.5 transition-all duration-300 rounded-full ${
                  currentIndex === index ? 'w-10 bg-emerald-600' : 'w-2.5 bg-gray-300 hover:bg-gray-400'
                }`}
              />
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}
