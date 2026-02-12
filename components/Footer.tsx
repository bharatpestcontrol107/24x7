"use client";

import { Phone, Clock } from "lucide-react";
import Image from "next/image";
import logo from "../public/favicon.png";
import { COMPANY_INFO, COPYRIGHT } from "@/lib/constants";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

export default function Footer() {
	const [isVisible, setIsVisible] = useState(false);
	const footerRef = useRef<HTMLElement>(null);

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

		if (footerRef.current) {
			observer.observe(footerRef.current);
		}

		return () => observer.disconnect();
	}, []);

	return (
		<footer
			className="bg-slate-800 text-white pb-16 relative overflow-hidden"
			ref={footerRef}>
			{/* Background */}
			<div className="absolute inset-0">
				<div
					className="w-full h-full bg-cover bg-center bg-fixed"
					style={{
						backgroundImage: `url('/images/statistics_bg.png')`,
					}}
				/>
				<div className="absolute inset-0 bg-gray-900/80"></div>
			</div>

			<div className="max-w-7xl mx-auto px-6 py-16 relative z-10">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Left - Logo and Description */}
					<div
						className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
						<div className="flex items-center gap-4 mb-6">
							<Image src={logo} alt="Logo" width={50} height={50} />
							<h2 className="text-2xl font-extrabold text-white leading-tight">
								{COMPANY_INFO.name}
							</h2>
						</div>
						<p className="text-gray-300 text-sm leading-relaxed mb-6">
							{COMPANY_INFO.description}
						</p>
					</div>

					{/* Quick Links */}
					<div
						className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
						style={{ transitionDelay: isVisible ? "100ms" : "0ms" }}>
						<h3 className="text-xl font-bold mb-6">Quick Links</h3>
						<ul className="space-y-3">
							<li>
								<Link
									href="/"
									className="text-gray-300 hover:text-red-500 transition-colors text-sm">
									Home
								</Link>
							</li>
							<li>
								<Link
									href="#about"
									className="text-gray-300 hover:text-red-500 transition-colors text-sm">
									About Us
								</Link>
							</li>
							<li>
								<Link
									href="#services"
									className="text-gray-300 hover:text-red-500 transition-colors text-sm">
									Services
								</Link>
							</li>
							<li>
								<Link
									href="#brands"
									className="text-gray-300 hover:text-red-500 transition-colors text-sm">
									Brands
								</Link>
							</li>
							<li>
								<Link
									href="#contact"
									className="text-gray-300 hover:text-red-500 transition-colors text-sm">
									Contact
								</Link>
							</li>
						</ul>
					</div>

					{/* Our Services */}
					<div
						className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
						style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}>
						<h3 className="text-xl font-bold mb-6">Our Services</h3>
						<ul className="space-y-3">
							{COMPANY_INFO.services.map((service) => (
								<li key={service}>
									<span className="text-gray-300 text-sm">{service}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Book a Service */}
					<div
						className={`transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
						style={{ transitionDelay: isVisible ? "300ms" : "0ms" }}>
						<h3 className="text-xl font-bold mb-6">Book a Service</h3>
						<p className="text-gray-400 text-sm mb-6 leading-relaxed">
							Experience hassle-free appliance repair services with our expert
							technicians.
						</p>

						<div className="space-y-4">
							<a
								href={`tel:${COMPANY_INFO.phone}`}
								className="flex items-center gap-4 group bg-slate-700/50 p-4 rounded-xl hover:bg-slate-700 transition-all border border-slate-600 hover:border-red-500/50 shadow-sm hover:shadow-md">
								<div className="bg-red-600 rounded-full w-12 h-12 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform shadow-lg shadow-red-900/20">
									<Phone className="text-white fill-white" size={24} />
								</div>
								<div>
									<p className="text-xs text-gray-400 uppercase tracking-wider font-bold mb-0.5">
										Call Us On
									</p>
									<p className="text-xl font-extrabold text-white group-hover:text-red-400 transition-colors">
										{COMPANY_INFO.phoneDisplay}
									</p>
								</div>
							</a>

							<div className="flex items-start gap-3 mt-6">
								<Clock className="text-red-500 mt-0.5 shrink-0" size={18} />
								<div>
									<p className="text-sm text-gray-300 font-medium mb-1">
										{COMPANY_INFO.hours.display}
									</p>
									<p className="text-xs text-gray-500 leading-tight">
										{COMPANY_INFO.hours.note}
									</p>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>

			{/* Bottom Copyright Section */}
			<div
				className={`border-t border-gray-700 transition-all duration-700 relative z-10 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
				style={{ transitionDelay: isVisible ? "500ms" : "0ms" }}>
				<div className="max-w-7xl mx-auto px-6 py-6">
					<p className="text-center text-gray-400 text-sm mb-2">
						Copyright © {COPYRIGHT.year} | {COMPANY_INFO.name} |{" "}
						{COPYRIGHT.text}
					</p>
					<p className="text-center text-red-500 text-xs">
						Disclaimer - {COPYRIGHT.disclaimer}
					</p>
				</div>
			</div>
		</footer>
	);
}
