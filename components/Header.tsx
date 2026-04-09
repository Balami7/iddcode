'use client';

import Image from 'next/image';
import Link from 'next/link';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'How it works', href: '' },
  { name: 'Contact', href: '' },
  { name: 'About Us', href: '' },
  { name: 'Terms of Service', href: '' },
  { name: 'Privacy Policy', href: '' },
];

export default function Header() {
  return (
    <header className="bg-white border-b-2 border-emerald-600 shadow-sm relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        
        <div className="hidden min-[741px]:grid grid-cols-[auto_1fr_auto] items-center gap-x-6 min-h-[64px] md:min-h-[80px] py-3 md:py-4 lg:py-4">
          <div className="flex justify-start">
            <Link href="/">
              <div className="relative w-32 h-10 md:w-40 md:h-12">
                <Image
                  src="/IDCODE.jpeg"
                  alt="IDCode Logo"
                  fill
                  className="object-contain"
                  priority
                />
              </div>
            </Link>
          </div>

          <nav className="flex justify-center items-center space-x-5 lg:space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className="text-gray-700 hover:text-emerald-600 font-medium transition-colors whitespace-nowrap text-base"
              >
                {link.name}
              </Link>
            ))}
          </nav>

          <div className="flex items-center justify-end gap-4">
            <div className="flex md:flex-col lg:flex-row md:items-end lg:items-center gap-3 lg:gap-5">
              <Link
                href=""
                className="w-36 text-center text-gray-700 hover:text-emerald-600 font-medium transition-colors 
                           px-6 py-2.5 border-2 border-black rounded-lg whitespace-nowrap text-base"
              >
                Login
              </Link>
              <Link
                href=""
                className="w-36 text-center bg-emerald-600 text-white px-6 py-2.5 rounded-lg font-medium 
                           hover:bg-emerald-700 transition-colors shadow-sm whitespace-nowrap text-base"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>

        <div className="min-[741px]:hidden flex flex-col items-center py-8 space-y-6">
          
          <Link href="/">
            <div className="relative w-32 h-10 mb-2">
              <Image src="/IDCODE.jpeg" alt="IDCode Logo" fill className="object-contain" priority />
            </div>
          </Link>

          <nav className="flex flex-col items-center space-y-6 w-full">
            <div className="flex justify-center gap-x-6 sm:gap-x-10">
              {navLinks.slice(0, 3).map((link) => (
                <Link key={link.name} href={link.href} className="text-[#1f2937] font-bold text-lg">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex justify-center gap-x-8 sm:gap-x-14">
              {navLinks.slice(3, 5).map((link) => (
                <Link key={link.name} href={link.href} className="text-[#1f2937] font-bold text-lg">
                  {link.name}
                </Link>
              ))}
            </div>

            <div className="flex justify-center">
              {navLinks.slice(5, 6).map((link) => (
                <Link key={link.name} href={link.href} className="text-[#1f2937] font-bold text-lg">
                  {link.name}
                </Link>
              ))}
            </div>
          </nav>

          <div className="flex flex-row justify-center gap-x-4 w-full max-w-[340px] pt-4 px-4">
            <Link
              href="/login"
              className="flex-1 text-center text-gray-900 font-bold border-2 border-black rounded-xl py-2.5 text-sm"
            >
              Login
            </Link>
            <Link
              href="/signup"
              className="flex-1 text-center bg-[#008a33] text-white font-bold rounded-xl py-2.5 text-sm shadow-sm"
            >
              Sign Up
            </Link>
          </div>

        </div>
      </div>
    </header>
  );
}
