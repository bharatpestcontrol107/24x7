'use client';

import { Phone } from 'lucide-react';
import { COMPANY_INFO, COPYRIGHT } from '@/lib/constants';

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
          {/* Left - Logo and Description */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <div className="relative">
                <div className="w-16 h-16 border-4 border-white rounded-full flex items-center justify-center">
                  <span className="text-2xl font-bold">24x7</span>
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-sm leading-relaxed mb-6">
              {COMPANY_INFO.description}
            </p>
          </div>

          {/* About Company */}
          <div>
            <h3 className="text-xl font-bold mb-6">About Company</h3>
            <ul className="space-y-3">
              <li>
                <a href="#about" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  About Us
                </a>
              </li>
              <li>
                <a href="#blog" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Blog
                </a>
              </li>
              <li>
                <a href="#contact" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#privacy" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#terms" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a href="#careers" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Careers
                </a>
              </li>
              <li>
                <a href="#disclaimer" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Disclaimer
                </a>
              </li>
              <li>
                <a href="#faq" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-xl font-bold mb-6">Our Services</h3>
            <ul className="space-y-3">
              <li>
                <a href="#ac" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Air Conditioner Repair Service
                </a>
              </li>
              <li>
                <a href="#refrigerator" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Refrigerator Repair Service
                </a>
              </li>
              <li>
                <a href="#washing" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Washing Machine Repair Service
                </a>
              </li>
              <li>
                <a href="#tv" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  LED/LCD/TV Repair Service
                </a>
              </li>
              <li>
                <a href="#microwave" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Microwave Repair Service
                </a>
              </li>
              <li>
                <a href="#oven" className="text-gray-300 hover:text-red-500 transition-colors text-sm">
                  Oven Repair Service
                </a>
              </li>
            </ul>
          </div>

          {/* Have a Question */}
          <div>
            <h3 className="text-xl font-bold mb-6">Have a Question?</h3>
            <div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
              <Phone className="text-slate-800" size={28} />
            </div>
            <p className="text-lg font-semibold mb-4">Call Us 24/7</p>
            <a href={`tel:${COMPANY_INFO.phone}`} className="text-3xl font-bold text-[#ca2929] hover:text-red-700 transition-colors block mb-6">
              {COMPANY_INFO.phone}
            </a>
            <p className="text-gray-300 text-sm mb-2">
              <span className="font-semibold">{COMPANY_INFO.hours.display}</span>
            </p>
            <p className="text-gray-400 text-xs">
              {COMPANY_INFO.hours.note}
            </p>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Section */}
      <div className="border-t border-gray-700">
        <div className="max-w-7xl mx-auto px-6 py-6">
          <p className="text-center text-gray-400 text-sm mb-2">
            Copyright © {COPYRIGHT.year} | {COPYRIGHT.text}
          </p>
          <p className="text-center text-red-500 text-xs">
            Disclaimer - {COPYRIGHT.disclaimer}
          </p>
        </div>
      </div>
    </footer>
  );
}
