"use client";

import { useEffect, useRef, useState } from "react";

const services = [
	{
		title: "Washing Machine Repair",
		description:
			"Fast diagnostics, drum fixes, motor replacements, and leak sealing to get your laundry back on track.",
		image: "/services/washing-machine.png",
		accent: "#f7e9e0",
		textClass: "text-slate-900",
		ctaClass: "text-[#ca2929]",
	},
	{
		title: "AC & Cooling Service",
		description:
			"Compressor checks, gas refills, deep cleaning, and same-day cooling fixes for homes and offices.",
		image: "/services/ac-repair.png",
		accent: "#d62828",
		textClass: "text-white",
		ctaClass: "text-white",
	},
	{
		title: "Refrigerator Repair",
		description:
			"Cooling issues, thermostat faults, water leaks, and noisy compressors fixed with genuine parts.",
		image: "/services/refrigerator.png",
		accent: "#1f2f3d",
		textClass: "text-white",
		ctaClass: "text-white",
	},
	{
		title: "Microwave & Oven Repair",
		description:
			"Expert repair for heating issues, faulty timers, door problems, and electrical faults in all microwave and oven models.",
		image: "/services/microwave.png",
		accent: "#f7e9e0",
		textClass: "text-slate-900",
		ctaClass: "text-[#ca2929]",
	},
	{
		title: "TV Repair Service",
		description:
			"Screen issues, sound problems, power failures, and smart TV connectivity fixes for all major brands.",
		image: "/services/tv-repair.png",
		accent: "#d62828",
		textClass: "text-white",
		ctaClass: "text-white",
	},
	{
		title: "Dishwasher Repair",
		description:
			"Drainage issues, spray arm problems, heating element repairs, and control panel fixes for efficient cleaning.",
		image: "/services/dishwasher.png",
		accent: "#1f2f3d",
		textClass: "text-white",
		ctaClass: "text-white",
	},
];

export default function Services() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						setIsVisible(true);
					}
				});
			},
			{ threshold: 0.1 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section
			id="services"
			className="relative w-full py-16 md:py-24"
			ref={sectionRef}>
			<div className="max-w-6xl mx-auto px-4 lg:px-8 text-center">
				<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight animate-fade-in-scale">
					Services We <span className="text-[#ca2929]">Provide</span>
				</h2>
				<p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto text-center animate-fade-in-scale delay-100">
					We offer reliable doorstep repair services for wide variety of home
					appliances. Our skilled technicians provide quick and efficient
					repairs to keep your home appliances working smoothly.
				</p>

				<div className="relative mt-10 md:mt-14">
					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{services.map((service, index) => (
							<div
								key={service.title}
								className={`shadow-lg border border-gray-100 overflow-hidden bg-white transition-all duration-700 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full ${
									isVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}
								style={{
									transitionDelay: `${index * 150}ms`,
									transitionTimingFunction: "cubic-bezier(0.16, 1, 0.3, 1)",
								}}>
								<div
									className="h-64 bg-cover bg-center"
									style={{ backgroundImage: `url(${service.image})` }}
									aria-hidden
								/>
								<div
									className={`px-6 py-6 md:py-7 flex-1 flex flex-col justify-center ${service.textClass}`}
									style={{ backgroundColor: service.accent }}>
									<h3 className="text-xl font-bold uppercase tracking-wide mb-2">
										{service.title}
									</h3>
									<p className="text-sm leading-relaxed opacity-90">
										{service.description}
									</p>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>
		</section>
	);
}
