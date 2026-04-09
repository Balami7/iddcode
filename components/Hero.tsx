import Image from 'next/image';

export default function Hero() {
  return (
    <section className="bg-white py-12 md:py-16 lg:py-20">
      <div className="mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
        
        <div className="border-4 border-emerald-600 rounded-2xl overflow-hidden bg-white shadow-xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-0">
            

            <div className="relative h-64 sm:h-80 lg:h-full min-h-[250px] lg:min-h-[450px]">
              <Image
                src="/computer.jpg"         
                alt="Software development team working on computers"
                fill
                className="object-cover"
                priority
              />
              
             
              <div className="absolute inset-0 bg-gradient-to-r from-emerald-900/30 to-transparent" />
            </div>

            
            <div className="p-8 md:p-12 lg:p-16 flex flex-col justify-center">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6 leading-tight">
                IDCode
                <span className="text-emerald-600"> – Your Trusted Partner</span>
                <br />
                in Software Development
              </h1>

              <p className="text-lg md:text-xl text-black mb-8 leading-relaxed">
                IDCode is a software development platform that builds innovative and reliable digital solutions for businesses. In addition to our development services, we offer proprietary verification systems designed to enhance security and trust.

                Our core products include Identity Verification Codes, Access Verification Codes, and Product Verification Codes, which help businesses authenticate users, control access, and protect products from counterfeiting.

                At IDCode, we are committed to providing secure, efficient, and scalable solutions that empower businesses to operate with confidence.
              </p>

              
              <div className="flex flex-col sm:flex-row gap-4">
                <a
                  href="/contact"
                  className="inline-block bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg hover:bg-emerald-700 transition-colors text-center"
                >
                  Get in Touch
                </a>
                <a
                  href="/services"
                  className="inline-block border-2 border-emerald-600 text-emerald-600 font-semibold px-8 py-4 rounded-lg hover:bg-emerald-50 transition-colors text-center"
                >
                  Learn More
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}