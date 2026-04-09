import Image from 'next/image';

const logos = [
  { src: '/verifyme.png', alt: 'VerifyMe' },
  { src: '/fmyd2.png', alt: 'FMYD' },
  { src: '/nimc.png', alt: 'NIMC' },
  { src: '/vasset.jpg', alt: 'VASSET' },
  { src: '/logo.png', alt: 'SCANCODES' },
];

export default function PartnerScroll() {
  return (
    <section className="bg-white py-16 md:py-0 border-t-5 border-emerald-600 border-b-5 border-emerald-600 overflow-hidden">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="relative flex overflow-hidden">
          <div className="flex animate-infinite-scroll whitespace-nowrap py-6 md:py-8">
           
            <div className="flex items-center gap-16 sm:gap-20 md:gap-28 lg:gap-36 px-6 lg:px-8">
              {logos.map((logo, index) => (
                <div
                  key={`set1-${index}`}
                  className="relative h-16 w-40 sm:h-20 sm:w-48 md:h-24 md:w-56 lg:h-28 lg:w-64 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-out flex-shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                    priority={index < 3} 
                  />
                </div>
              ))}
            </div>

          
            <div
              className="flex items-center gap-16 sm:gap-20 md:gap-28 lg:gap-36 px-6 lg:px-8"
              aria-hidden="true"
            >
              {logos.map((logo, index) => (
                <div
                  key={`set2-${index}`}
                  className="relative h-16 w-40 sm:h-20 sm:w-48 md:h-24 md:w-56 lg:h-28 lg:w-64 opacity-85 hover:opacity-100 hover:scale-110 transition-all duration-300 ease-out flex-shrink-0"
                >
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    className="object-contain"
                    sizes="(max-width: 640px) 160px, (max-width: 768px) 192px, (max-width: 1024px) 224px, 256px"
                    priority={index < 3}
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
     
    </section >
  );
}