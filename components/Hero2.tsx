import Image from 'next/image';

export default function OurProducts() {
  return (
    <section className="bg-white py-12 min-[741px]:pb-24 min-[1011px]: pb-24">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
        <h2 className="text-center text-3xl min-[741px]:text-4xl min-[1011px]:text-5xl top-7 font-bold text-black mb-16 min-[741px]:mb-24 relative z-20">
          Our Products
        </h2>


        <div className="grid grid-cols-1 min-[741px]:grid-cols-3 gap-12 min-[1011px]:gap-16">
          
          
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-[220px] h-[310px] min-[741px]:w-[200px] min-[741px]:h-[280px] min-[1011px]:w-[280px] min-[1011px]:h-[390px] drop-shadow-2xl transition-transform duration-300 group-hover:scale-105">
               <Image 
                src="/IMG_1471.png" 
                alt="Identity Verification Code" 
                fill 
                className="object-contain" 
              />
            </div>
            <h3 className="mt-8 text-xl min-[1011px]:text-2xl font-bold text-black leading-tight">
              Identity Verification <br /> Code
            </h3>
          </div>

          
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-[220px] h-[310px] min-[741px]:w-[200px] min-[741px]:h-[280px] min-[1011px]:w-[280px] min-[1011px]:h-[390px] drop-shadow-2xl transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/IMG_1472.png" 
                alt="Access Verification Code" 
                fill 
                className="object-contain" 
              />
            </div>
            <h3 className="mt-8 text-xl min-[1011px]:text-2xl font-bold text-black leading-tight">
              Access Verification <br /> Code
            </h3>
          </div>

          
          <div className="flex flex-col items-center text-center group">
            <div className="relative w-[220px] h-[310px] min-[741px]:w-[200px] min-[741px]:h-[280px] min-[1011px]:w-[280px] min-[1011px]:h-[390px] drop-shadow-2xl transition-transform duration-300 group-hover:scale-105">
              <Image 
                src="/IMG_1473.png" 
                alt="Product Verification Code" 
                fill 
                className="object-contain" 
              />
            </div>
            <h3 className="mt-8 text-xl min-[1011px]:text-2xl font-bold text-black leading-tight">
              Product Verification <br /> Code
            </h3>
          </div>

        </div>
      </div>
    </section>
  );
}
