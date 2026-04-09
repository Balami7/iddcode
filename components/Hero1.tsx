import Image from 'next/image';

export default function VerificationSection() {
  return (
    <section className="bg-white py-12 min-[741px]:pb-0 min-[1011px]:pt- pb-0 relative">
      <div className="mx-auto max-w-7xl px-6 lg:px-8 relative">
        
       
        <div className="absolute left-0 right-0 top-12.5 min-[741px]:top-6 min-[1011px]:top-15 h-1.5 bg-green-500 z-10" />

        <div className="flex flex-col min-[741px]:flex-row items-center justify-center gap-30 min-[1011px]:gap-50 relative z-20">
          
          <div className="w-full min-[741px]:w-1/2 flex justify-center min-[741px]:justify-end">
            <div className="
              relative 
              w-[300px] h-[450px] 
              min-[741px]:w-[280px] min-[741px]:h-[400px] 
              min-[1011px]:w-[500px] min-[1011px]:h-[700px]
              -mt-6 min-[741px]:-mt-8 min-[1011px]:-mt-10   /* Pulls badge up to touch / overlap the line */
            ">
              <Image
                src="/seamless1.jpeg" 
                alt="ID Card Verification"
                fill
                className="object-contain drop-shadow-xl"  
                priority
              />
            </div>
          </div>

          <div className="w-full min-[741px]:w-1/2 text-center min-[741px]:text-left">
            <h2 className="
              /* Base (<= 740px) */
              text-3xl font-black text-[#000000] leading-[1.2] tracking-wider uppercase
              
              /* Tablet (741px - 1010px) */
              min-[741px]:text-4xl min-[741px]:leading-[1.3]
              
              /* Desktop (>= 1011px) */
              min-[1011px]:text-5xl min-[1011px]:leading-[1.4] min-[1011px]:tracking-[0.1em]
            ">
              Seamless <br className="hidden min-[741px]:block" />
              Identification <br className="hidden min-[741px]:block" />
              Verification <br className="hidden min-[741px]:block" />
              Anywhere you go
            </h2>
          </div>
          
        </div>
      </div>
    </section>
  );
}