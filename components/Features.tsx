'use client';

import { User, Headphones, Award } from 'lucide-react';

export default function Features() {
  return (
    <section className="w-full">
      <div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto -mt-16 relative z-10">
        <div className="bg-[#2d3e50] p-8 flex items-start gap-4">
          <div className="bg-yellow-400 rounded-full p-4 flex-shrink-0">
            <User size={32} className="text-white" />
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">Skilled Technicians</h3>
            <p className="text-sm text-gray-300">Experienced technicians repairing all major home appliances with precision.</p>
          </div>
        </div>

        <div className="bg-[#ca2929] p-8 flex items-start gap-4">
          <div className="bg-yellow-400 rounded-full p-4 flex-shrink-0">
            <Headphones size={32} className="text-white" />
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">Quick Service</h3>
            <p className="text-sm text-gray-100">Fast response and same-day service for most appliance repair needs.</p>
          </div>
        </div>

        <div className="bg-[#1a2936] p-8 flex items-start gap-4">
          <div className="bg-yellow-400 rounded-full p-4 flex-shrink-0">
            <Award size={32} className="text-white" />
          </div>
          <div className="text-white">
            <h3 className="text-xl font-bold mb-2">Quality Repairs</h3>
            <p className="text-sm text-gray-300">Reliable repair solutions that help your appliances last longer.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
