"use client";

import Image from "next/image";
import banner from "../public/banner.png";
import Navbar from "./Navbar";
import { COMPANY_INFO } from "@/lib/constants";
import Link from "next/link";

export default function HeroSection() {
	return (
		<section
			id="top"
			className="relative w-full h-[85vh] bg-slate-600 overflow-hidden">
			{/* Background Image */}
			<Image
				src={banner}
				alt="Hero Banner"
				fill
				priority
				className="object-cover"
				quality={100}
			/>

			{/* Overlay */}
			<div className="absolute inset-0 bg-black/20 z-1"></div>

			{/* Navbar */}
			<Navbar />

			{/* Content Container */}
			<div className="relative z-10 flex flex-col items-center justify-center h-full">
				{/* Main Heading */}
				<div className="text-center mb-8">
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
						WE ARE HERE
					</h1>
					<h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold">
						<span className="text-[#ca2929]">ALWAYS</span>{" "}
						<span className="text-white">FOR YOU</span>
					</h1>
				</div>

				{/* Description */}
				<p className="text-white text-center max-w-2xl text-sm sm:text-base lg:text-lg leading-relaxed mb-10">
					We offer quick and affordable repair services for washing machines,
					refrigerators, air conditioners, ovens, and more. Our skilled
					technicians provide doorstep service with honest pricing and quality
					repairs you can trust.
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
					<Link
						href={`tel:${COMPANY_INFO.phone}`}
						className="bg-[#ca2929] hover:bg-red-700 text-white px-8 py-3 font-bold transition-colors duration-200 text-center">
						Call for Service
					</Link>
					<Link
						href="#contact"
						className="border-2 border-white text-white hover:bg-white hover:text-slate-600 px-8 py-3 font-bold transition-colors duration-200 text-center">
						Request a Quote
					</Link>
				</div>
			</div>
		</section>
	);
}
