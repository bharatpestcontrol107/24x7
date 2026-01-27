'use client';

import { useEffect, useState } from 'react';

export default function Statistics() {
  const stats = [
    { number: 5000, suffix: '+', label: 'Repairs Completed' },
    { number: 15000, suffix: '+', label: 'Happy Customers' },
    { number: 200, suffix: '+', label: 'Service Locations' },
    { number: 24, suffix: '/7', label: 'Hours Available' }
  ];

  const [counts, setCounts] = useState(stats.map(() => 0));
  const [hasAnimated, setHasAnimated] = useState(false);

  const animateCounter = (index: number, target: number) => {
    const duration = 2000;
    const steps = 60;
    const increment = target / steps;
    let current = 0;
    
    const timer = setInterval(() => {
      current += increment;
      if (current >= target) {
        current = target;
        clearInterval(timer);
      }
      setCounts(prev => {
        const newCounts = [...prev];
        newCounts[index] = Math.floor(current);
        return newCounts;
      });
    }, duration / steps);
  };

  useEffect(() => {
    if (hasAnimated) {
      stats.forEach((stat, index) => {
        animateCounter(index, stat.number);
      });
    }
  }, [hasAnimated]);

  return (
    <section className="py-20 relative overflow-hidden">
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .stats-heading {
          animation: fadeInUp 0.8s ease-out;
        }

        .stat-card {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
          transition: all 0.3s ease;
        }

        .stat-card:hover {
          background-color: rgba(255, 255, 255, 0.2);
          transform: translateY(-5px);
        }
      `}</style>

      {/* Background */}
      <div className="absolute inset-0">
        <div 
          className="w-full h-full bg-cover bg-center bg-fixed"
          style={{
            backgroundImage: `url('https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?auto=compress&cs=tinysrgb&w=1920')`
          }}
        />
        <div className="absolute inset-0 bg-gray-900/80"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4">
        <div 
          className="stats-heading text-center mb-16"
          onMouseEnter={() => setHasAnimated(true)}
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            Our <span className="text-red-500">Achievements</span>
          </h2>
          <div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
          <p className="text-xl text-gray-200 max-w-3xl mx-auto">
            Trusted by thousands of customers for reliable appliance repair services
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={stat.label}
              className="stat-card bg-white/10 backdrop-blur-md rounded-xl p-8"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="text-5xl md:text-6xl font-bold text-red-500 mb-4">
                {counts[index].toLocaleString()}{stat.suffix}
              </div>
              <div className="text-lg font-medium text-white uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
