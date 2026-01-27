'use client';

import { COMPANY_INFO } from '@/lib/constants';
import Image from 'next/image';
import logo from '../public/favicon.png';
import Link from 'next/link';

export default function Navbar() {
  return (
    <header className="absolute inset-x-0 top-0 z-20">
      <style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: currentColor;
          transition: width 0.4s ease, left 0.4s ease;
        }

        .nav-link:hover::after {
          width: 100%;
          left: 0;
        }

        .nav-link:hover {
          color: #b91c1c; /* Tailwind's red-700 */
        }
      `}</style>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Mobile Layout */}
        <div className="lg:hidden py-4">
          <div className="flex items-center gap-4 mb-4">
            <Image src={logo} alt="Logo" width={40} height={40} />
            <div className="text-xl font-extrabold text-[#ca2929]">{COMPANY_INFO.name}</div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className="hidden lg:block">
          <div className="flex items-center justify-between py-4 text-xs text-white/90">
            <div className="flex items-center gap-4">
              <Image src={logo} alt="Logo" width={40} height={40} />
              <div className="text-2xl font-extrabold text-[#ca2929]">{COMPANY_INFO.name}</div>
            </div>

            <div className="flex items-center gap-2 text-white/80">
              <div className="flex items-start gap-2">
                <svg className="w-8 h-8 text-[#ca2929] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
                <div className="flex flex-col">
                  <div className="text-xs uppercase tracking-wide text-[#ca2929] font-bold text-left">Address:</div>
                  <div className="text-sm text-gray-800 font-bold text-left">{COMPANY_INFO.address.address}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-8 h-8 text-[#ca2929] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
                <div className="flex flex-col">
                  <div className="text-xs uppercase tracking-wide text-[#ca2929] font-bold text-left">E-mail:</div>
                  <div className="text-sm text-gray-800 font-bold text-left">{COMPANY_INFO.email}</div>
                </div>
              </div>
              <div className="flex items-start gap-2">
                <svg className="w-8 h-8 text-[#ca2929] mt-0.5 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
                <div className="flex flex-col">
                  <div className="text-xs uppercase tracking-wide text-[#ca2929] font-bold text-left">Phone:</div>
                  <div className="text-sm text-gray-800 font-bold text-left">{COMPANY_INFO.phoneDisplay}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Navigation bar - Desktop only */}
          <div className="border border-red-700 bg-white/20 py-3 px-6 flex items-center justify-between">
            <nav className="flex items-center gap-18 ml-18 text-md text-white font-medium">
              <Link className="nav-link text-[#ca2929] cursor-pointer uppercase" href="/">Home</Link>
              <Link className="nav-link text-[#ca2929] cursor-pointer uppercase" href="#about">About Us</Link>
              <Link className="nav-link text-[#ca2929] cursor-pointer uppercase" href="#services">Services</Link>
              <Link className="nav-link text-[#ca2929] cursor-pointer uppercase" href="#brands">Brands</Link>
              <Link className="nav-link text-[#ca2929] cursor-pointer uppercase" href="#contact">Contact</Link>
            </nav>

            <Link href="#contact" className="bg-[#ca2929] text-white px-5 py-2 font-semibold hover:bg-red-700 transition-colors">
              Get a Quote
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
}
