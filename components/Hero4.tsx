import { ClipboardList, UserPlus, ShieldCheck } from 'lucide-react';
import Link from 'next/link';

export default function HowItWorks() {
  return (
    <section className="bg-[#ffffff] py-16 min-[741px]:py-24 min-[1011px]:py-32">
      <div className="mx-auto max-w-7xl px-6">
        
        
        <div className="text-center mb-16 min-[741px]:mb-20">
          <h2 className="text-3xl min-[741px]:text-4xl min-[1011px]:text-5xl font-bold text-[#000000] mb-4">
            How It Works
          </h2>
          <p className="text-[#000000] text-base min-[741px]:text-lg max-w-3xl mx-auto">
            Our platform simplifies identification verification through a secure and streamlined process.
          </p>
        </div>

        
        <div className="grid grid-cols-1 min-[741px]:grid-cols-3 gap-12 min-[1011px]:gap-16 mb-20">
          
          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#dcfce7]">
              <ClipboardList className="h-8 w-8 text-[#059669]" />
            </div>
            <h3 className="text-xl font-bold text-[#000000] mb-3">1. Company Registration</h3>
            <p className="text-[#000000] leading-relaxed text-sm min-[741px]:text-base">
              Register your company or product on our platform and set up your verification requirements and security protocols.
            </p>
          </div>

          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#dcfce7]">
              <UserPlus className="h-8 w-8 text-[#059669]" />
            </div>
            <h3 className="text-xl font-bold text-[#000000] mb-3">2. Members Onboarding</h3>
            <p className="text-[#000000] leading-relaxed text-sm min-[741px]:text-base">
              Onboard your members with NIN verification or product and secure profile creation.
            </p>
          </div>

          
          <div className="flex flex-col items-center text-center">
            <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-[#dcfce7]">
              <ShieldCheck className="h-8 w-8 text-[#059669]" />
            </div>
            <h3 className="text-xl font-bold text-[#000000] mb-3">3. Smart ID Verification</h3>
            <p className="text-[#000000] leading-relaxed text-sm min-[741px]:text-base">
              Issue secure QR-code for real-time authenticity verification.
            </p>
          </div>

        </div>

        
        <div className="flex justify-center">
          <Link
            href="/signup"
            className="inline-flex items-center justify-center bg-[#10b981] hover:bg-[#059669] text-white font-bold py-3.5 px-12 rounded-lg shadow-sm transition-all"
          >
            Sign Up <span className="ml-2">→</span>
          </Link>
        </div>

      </div>
    </section>
  );
}
