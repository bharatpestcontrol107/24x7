"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { BRANDS } from "@/lib/brands";

export default function Brands() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

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
	const scrollBrands = [...BRANDS, ...BRANDS];

	return (
		<section
			id="brands"
			className="w-full py-16 bg-white overflow-hidden antialiased"
			ref={sectionRef}>
			<style>{`
        @keyframes scroll-x {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .scroll-track {
          display: flex;
          width: max-content;
          animation: scroll-x 30s linear infinite;
          gap: 8em;
        }
      `}</style>

			<div className="max-w-7xl mx-auto px-6 mb-10">
				<h2
					className={`text-3xl md:text-5xl font-bold text-gray-900 text-center transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
					We Repair All Major <span className="text-[#ca2929]">Brands</span>
				</h2>
				<p
					className={`text-lg text-gray-700 text-center mt-4 max-w-2xl mx-auto transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
					style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}>
					We provide repair services for a wide range of home appliance brands.
					Our technicians are experienced in repairing washing machines, ACs,
					refrigerators, and other household appliances across popular brands.
				</p>
			</div>

			<div
				className={`relative overflow-hidden transition-opacity duration-700 ${isVisible ? "opacity-100" : "opacity-0"}`}
				style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}>
				<div className="scroll-track px-4">
					{scrollBrands.map((brand, index) => (
						<div
							key={`${brand.slug}-${index}`}
							className="flex items-center justify-center py-4">
							<Link href={`/brands/${brand.slug}`}>
								<span className="text-4xl md:text-5xl font-extrabold text-gray-500 hover:text-[#ca2929] transition-colors leading-[1.2] whitespace-nowrap cursor-pointer">
									{brand.name}
								</span>
							</Link>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
