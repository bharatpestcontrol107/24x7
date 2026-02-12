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
			className="relative w-full h-[65vh] md:h-[80vh] bg-slate-600 overflow-hidden">
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
				<div className="text-center mb-8 animate-fade-in-up">
					<p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
						WE ARE HERE
					</p>
					<p className="text-4xl sm:text-5xl lg:text-6xl font-bold">
						<span className="text-[#ca2929]">ALWAYS</span>{" "}
						<span className="text-white">FOR YOU</span>
					</p>
				</div>

				{/* Description */}
				<p className="text-white text-center max-w-2xl text-sm sm:text-base lg:text-lg font-semibold leading-relaxed px-8 mb-10 animate-fade-in-up delay-200">
					Fast, affordable repairs for washing machines, refrigerators, ACs and
					more with doorstep service and honest pricing.
				</p>

				{/* CTA Buttons */}
				<div className="flex flex-col sm:flex-row gap-4 sm:gap-6 animate-fade-in-up delay-300">
					<Link
						href={`tel:${COMPANY_INFO.phone}`}
						className="bg-[#ca2929] hover:bg-red-700 text-white px-8 py-3 font-bold transition-colors duration-200 text-center">
						Call: {COMPANY_INFO.phoneDisplay}
					</Link>
					<Link
						href="#contact"
						className="border-2 border-white bg-white text-slate-600 hover:bg-transparent hover:text-white px-8 py-3 font-bold transition-colors duration-200 text-center">
						Request a Quote
					</Link>
				</div>
			</div>
		</section>
	);
}
