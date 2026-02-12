"use client";

import { User, Headphones, Award } from "lucide-react";
import { useEffect, useRef, useState } from "react";

export default function Features() {
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
			{ threshold: 0.2 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<section className="w-full" ref={sectionRef}>
			<div className="grid grid-cols-1 md:grid-cols-3 max-w-7xl mx-auto -mt-16 relative z-10">
				<div
					className={`bg-[#2d3e50] p-8 flex items-start gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
					<div className="bg-yellow-400 rounded-full p-4 shrink-0">
						<User size={32} className="text-white" />
					</div>
					<div className="text-white">
						<h3 className="text-xl font-bold mb-2">Skilled Technicians</h3>
						<p className="text-sm text-gray-300">
							Experienced technicians repairing all major home appliances with
							precision.
						</p>
					</div>
				</div>

				<div
					className={`bg-[#ca2929] p-8 flex items-start gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
					style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}>
					<div className="bg-yellow-400 rounded-full p-4 shrink-0">
						<Headphones size={32} className="text-white" />
					</div>
					<div className="text-white">
						<h3 className="text-xl font-bold mb-2">Quick Service</h3>
						<p className="text-sm text-gray-100">
							Fast response and same-day service for most appliance repair
							needs.
						</p>
					</div>
				</div>

				<div
					className={`bg-[#1a2936] p-8 flex items-start gap-4 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
					style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}>
					<div className="bg-yellow-400 rounded-full p-4 shrink-0">
						<Award size={32} className="text-white" />
					</div>
					<div className="text-white">
						<h3 className="text-xl font-bold mb-2">Quality Repairs</h3>
						<p className="text-sm text-gray-300">
							Reliable repair solutions that help your appliances last longer.
						</p>
					</div>
				</div>
			</div>
		</section>
	);
}
