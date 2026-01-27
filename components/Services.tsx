'use client';

const services = [
  {
    title: 'Washing Machine Repair',
    description:
      'Fast diagnostics, drum fixes, motor replacements, and leak sealing to get your laundry back on track.',
    image:
      '/services/washing-machine.png',
    accent: '#f7e9e0',
    textClass: 'text-slate-900',
    ctaClass: 'text-[#ca2929]',
  },
  {
    title: 'AC & Cooling Service',
    description:
      'Compressor checks, gas refills, deep cleaning, and same-day cooling fixes for homes and offices.',
    image:
      '/services/ac-repair.png',
    accent: '#d62828',
    textClass: 'text-white',
    ctaClass: 'text-white',
  },
  {
    title: 'Refrigerator Repair',
    description:
      'Cooling issues, thermostat faults, water leaks, and noisy compressors fixed with genuine parts.',
    image:
      '/services/refrigerator.png',
    accent: '#1f2f3d',
    textClass: 'text-white',
    ctaClass: 'text-white',
  },
  {
    title: 'Microwave & Oven Repair',
    description:
      'Expert repair for heating issues, faulty timers, door problems, and electrical faults in all microwave and oven models.',
    image:
      '/services/microwave.png',
    accent: '#f7e9e0',
    textClass: 'text-slate-900',
    ctaClass: 'text-[#ca2929]',
  },
  {
    title: 'TV Repair Service',
    description:
      'Screen issues, sound problems, power failures, and smart TV connectivity fixes for all major brands.',
    image:
      '/services/tv-repair.png',
    accent: '#d62828',
    textClass: 'text-white',
    ctaClass: 'text-white',
  },
  {
    title: 'Dishwasher Repair',
    description:
      'Drainage issues, spray arm problems, heating element repairs, and control panel fixes for efficient cleaning.',
    image:
      '/services/dishwasher.png',
    accent: '#1f2f3d',
    textClass: 'text-white',
    ctaClass: 'text-white',
  },
];

export default function Services() {
  return (
    <section id="services" className="relative w-full py-16 md:py-24">
      <div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
          GOGRIN APPLIANCE <span className="text-[#ca2929]">SERVICES</span>
        </h2>
        <p className="mt-4 text-sm md:text-base text-slate-600 max-w-3xl mx-auto">
          Reliable 24/7 home appliance repair and maintenance. Same-day visits, genuine parts, and transparent pricing
          to keep every device running smoothly.
        </p>

        <div className="relative mt-10 md:mt-14">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {services.map((service) => (
              <div key={service.title} className="shadow-lg border border-gray-100 overflow-hidden bg-white">
                <div
                  className="h-64 bg-cover bg-center"
                  style={{ backgroundImage: `url(${service.image})` }}
                  aria-hidden
                />
                <div
                  className={`px-6 py-6 md:py-7 ${service.textClass}`}
                  style={{ backgroundColor: service.accent }}
                >
                  <h3 className="text-xl font-bold uppercase tracking-wide mb-2">{service.title}</h3>
                  <p className="text-sm leading-relaxed opacity-90">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
