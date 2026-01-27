"use client";

import { Phone } from "lucide-react";
import Image from "next/image";
import logo from "../public/favicon.png";
import { COMPANY_INFO, COPYRIGHT } from "@/lib/constants";
import Link from "next/link";

export default function Footer() {
	return (
		<footer className="bg-slate-800 text-white">
			<div className="max-w-7xl mx-auto px-6 py-16">
				<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
					{/* Left - Logo and Description */}
					<div>
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
					<div>
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
					<div>
						<h3 className="text-xl font-bold mb-6">Our Services</h3>
						<ul className="space-y-3">
							{COMPANY_INFO.services.map((service) => (
								<li key={service}>
									<span className="text-gray-300 text-sm">{service}</span>
								</li>
							))}
						</ul>
					</div>

					{/* Have a Question */}
					<div>
						<h3 className="text-xl font-bold mb-6">Have a Question?</h3>
						<div className="bg-white rounded-full w-16 h-16 flex items-center justify-center mb-4">
							<Phone className="text-slate-800" size={28} />
						</div>
						<p className="text-lg font-semibold mb-4">Call Us 24/7</p>
						<a
							href={`tel:${COMPANY_INFO.phone}`}
							className="text-3xl font-bold text-[#ca2929] hover:text-red-700 transition-colors block mb-6">
							{COMPANY_INFO.phone}
						</a>
						<p className="text-gray-300 text-sm mb-2">
							<span className="font-semibold">
								{COMPANY_INFO.hours.display}
							</span>
						</p>
						<p className="text-gray-400 text-xs">{COMPANY_INFO.hours.note}</p>
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
