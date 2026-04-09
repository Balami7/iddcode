import Image from 'next/image';
import Link from 'next/link';
import { CheckCircle2 } from 'lucide-react';

export default function PlatformWalkthrough() {
  return (
    <section className="bg-white py-12 min-[741px]:py-16 min-[1011px]:py-20">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        
  
        <div className="text-center mb-10 min-[741px]:mb-12">
          <h2 className="text-3xl min-[741px]:text-4xl min-[1011px]:text-5xl font-bold text-black mb-4">
            Platform Walkthrough
          </h2>
          <p className="text-black text-base min-[741px]:text-lg max-w-3xl mx-auto">
            See how our platform works with this step-by-step visual guide to our intuitive interface.
          </p>
        </div>


        <div className="flex flex-col min-[741px]:flex-row items-center justify-center gap-10 min-[1011px]:gap-20 mb-6 min-[741px]:mb-8">
         
          <div className="w-full min-[741px]:w-1/2 flex justify-center min-[741px]:justify-end">
            <div className="relative w-full max-w-[480px] aspect-[4/3] drop-shadow-xl">
              <Image 
                src="/computer.jpg" 
                alt="Comprehensive Dashboard Mockup"
                fill
                className="object-contain"
                priority
              />
            </div>
          </div>

         
          <div className="w-full min-[741px]:w-1/2 text-center min-[741px]:text-left">
            <h3 className="text-2xl min-[741px]:text-3xl font-bold text-black mb-4">
              Comprehensive Dashboard
            </h3>
            <p className="text-black text-sm min-[741px]:text-base mb-6 leading-relaxed max-w-xl mx-auto min-[741px]:mx-0">
              Comprehensive members or product directories with search functionality 
              status, recent activities, and important metrics at a glance.
            </p>

            <ul className="space-y-3 inline-block text-left">
              <li className="flex items-center text-black font-medium text-sm min-[741px]:text-base">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                Real-time verification status updates
              </li>
              <li className="flex items-center text-black font-medium text-sm min-[741px]:text-base">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                Comprehensive members directory with search functionality
              </li>
              <li className="flex items-center text-black font-medium text-sm min-[741px]:text-base">
                <CheckCircle2 className="h-5 w-5 text-emerald-500 mr-3 flex-shrink-0" />
                Advanced analytics and reporting capabilities
              </li>
            </ul>
          </div>
        </div>

        {/* BOTTOM SECTION: Call to Action Block - Minimal Top Padding */}
        <div className="flex flex-col min-[741px]:flex-row items-center justify-between gap-8 pt-6 border-t border-gray-50">
          
          {/* Left Column: Heading and Subtext */}
          <div className="w-full min-[741px]:w-1/2 text-center min-[741px]:text-left">
            <h2 className="text-2xl min-[741px]:text-2xl min-[1011px]:text-3xl font-bold text-black mb-2 leading-tight">
              Ready to transform your identification <br className="hidden min-[1011px]:block" /> verification process?
            </h2>
            <p className="text-black text-sm min-[741px]:text-base max-w-md mx-auto min-[741px]:mx-0 font-medium">
              Join hundreds of companies already using our platform to enhance validity and trusted operations.
            </p>
          </div>

          {/* Right Column: Stacked Buttons */}
          <div className="w-full min-[741px]:w-72 flex flex-col gap-3">
            <Link
              href="/signup"
              className="w-full bg-[#10b981] hover:bg-[#059669] text-white text-center font-bold py-3.5 rounded-lg transition-colors shadow-sm"
            >
              Get Started
            </Link>
            <Link
              href="/login"
              className="w-full bg-white border border-gray-200 hover:bg-gray-50 text-black text-center font-bold py-3.5 rounded-lg transition-colors"
            >
              Sign In
            </Link>
          </div>
        </div>

      </div>
    </section>
  );
}
