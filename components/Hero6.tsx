import { QrCode, Database, Clock, ShieldCheck } from 'lucide-react';

export default function KeyBenefits() {
  return (
    <section className="bg-white py-16 min-[741px]:py-24 min-[1011px]:py-32">
      <div className="mx-auto max-w-7xl px-6">
        
        
        <div className="text-center mb-16 min-[741px]:mb-20">
          <h2 className="text-3xl min-[741px]:text-4xl min-[1011px]:text-5xl font-bold text-black mb-6">
            Key Benefits
          </h2>
          <p className="text-black text-base min-[741px]:text-lg max-w-3xl mx-auto leading-relaxed">
            Our platform offers comprehensive identification verification solutions that 
            enhances business credibility and trusted operations.
          </p>
        </div>

        
        <div className="grid grid-cols-1 min-[741px]:grid-cols-2 min-[1011px]:grid-cols-4 gap-6 min-[1011px]:gap-8">
          
          
          <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-100 flex flex-col items-start transition-all hover:bg-[#F1F5F9] hover:-translate-y-1">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100/50 shadow-sm">
              <QrCode className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 leading-[1.3]">QR-Based Verification</h3>
            <p className="text-black text-sm leading-relaxed font-medium">
              Instant verification through secure QR codes that can be scanned using any smartphone or QR Scanner.
            </p>
          </div>

        
          <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-100 flex flex-col items-start transition-all hover:bg-[#F1F5F9] hover:-translate-y-1">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100/50 shadow-sm">
              <Database className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 leading-[1.3]">CAC RC/NIN/NAFDAC NO. Integration</h3>
            <p className="text-black text-sm leading-relaxed font-medium">
              Seamless integration with CAC Database, National Identity Number database or NAFDAC database for official identification verification.
            </p>
          </div>

          
          <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-100 flex flex-col items-start transition-all hover:bg-[#F1F5F9] hover:-translate-y-1">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100/50 shadow-sm">
              <Clock className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 leading-[1.3]">Real-Time Authentication</h3>
            <p className="text-black text-sm leading-relaxed font-medium">
              Verify human or product identification in real-time with instant result and comprehensive audit logs.
            </p>
          </div>

          
          <div className="bg-[#F8FAFC] p-8 rounded-2xl border border-gray-100 flex flex-col items-start transition-all hover:bg-[#F1F5F9] hover:-translate-y-1">
            <div className="mb-8 flex h-12 w-12 items-center justify-center rounded-xl bg-emerald-100/50 shadow-sm">
              <ShieldCheck className="h-6 w-6 text-emerald-600" />
            </div>
            <h3 className="text-xl font-bold text-black mb-4 leading-[1.3]">Secure Data Handling</h3>
            <p className="text-black text-sm leading-relaxed font-medium">
              Enterprise-grade security protocols ensure all personal data is encrypted and protected.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
}
