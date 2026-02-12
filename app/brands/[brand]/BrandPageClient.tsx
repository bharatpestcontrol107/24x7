"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Wrench, Shield, Clock, BadgeCheck, Phone } from "lucide-react";
import Navbar from "@/components/Navbar";
import { Contact, Footer } from "@/components";
import { COMPANY_INFO } from "@/lib/constants";
import { BRANDS, titleFromSlug } from "@/lib/brands";

type BrandPageClientProps = {
	brand: string;
};

export default function BrandPageClient({ brand }: BrandPageClientProps) {
	const [heroVisible, setHeroVisible] = useState(false);
	const servicesRef = useRef<HTMLElement>(null);
	const issuesRef = useRef<HTMLElement>(null);
	const whyChooseRef = useRef<HTMLElement>(null);
	const aboutRef = useRef<HTMLElement>(null);
	const [servicesVisible, setServicesVisible] = useState(false);
	const [issuesVisible, setIssuesVisible] = useState(false);
	const [whyChooseVisible, setWhyChooseVisible] = useState(false);
	const [aboutVisible, setAboutVisible] = useState(false);

	const brandSlug = brand.toLowerCase();
	const brandInfo = BRANDS.find((brandItem) => brandItem.slug === brandSlug);
	const brandName = brandInfo?.name ?? titleFromSlug(brandSlug);
	const brandLogo = brandInfo?.logo;

	useEffect(() => {
		const timer = setTimeout(() => setHeroVisible(true), 100);

		const observer = new IntersectionObserver(
			(entries) => {
				entries.forEach((entry) => {
					if (entry.isIntersecting) {
						if (entry.target === servicesRef.current) setServicesVisible(true);
						if (entry.target === issuesRef.current) setIssuesVisible(true);
						if (entry.target === whyChooseRef.current)
							setWhyChooseVisible(true);
						if (entry.target === aboutRef.current) setAboutVisible(true);
					}
				});
			},
			{ threshold: 0.1 },
		);

		if (servicesRef.current) observer.observe(servicesRef.current);
		if (issuesRef.current) observer.observe(issuesRef.current);
		if (whyChooseRef.current) observer.observe(whyChooseRef.current);
		if (aboutRef.current) observer.observe(aboutRef.current);

		return () => {
			clearTimeout(timer);
			observer.disconnect();
		};
	}, []);

	const brandServices = [
		{
			title: "Washing Machine Repair",
			description: `Expert repair services for all ${brandName} washing machine models including front-load, top-load, and semi-automatic machines.`,
			image: "/services/washing-machine.png",
			accent: "#f7e9e0",
			textClass: "text-slate-900",
		},
		{
			title: "AC Repair & Service",
			description: `Complete AC repair and maintenance for ${brandName} split, window, and inverter AC units with genuine spare parts.`,
			image: "/services/ac-repair.png",
			accent: "#ca2929",
			textClass: "text-white",
		},
		{
			title: "Refrigerator Repair",
			description: `Professional repair services for ${brandName} single-door, double-door, and side-by-side refrigerators.`,
			image: "/services/refrigerator.png",
			accent: "#1f2f3d",
			textClass: "text-white",
		},
		{
			title: "Microwave Repair",
			description: `Comprehensive repair solutions for ${brandName} microwave ovens and convection models.`,
			image: "/services/microwave.png",
			accent: "#f7e9e0",
			textClass: "text-slate-900",
		},
		{
			title: "TV Repair",
			description: `Expert repair services for ${brandName} LED, QLED, and Smart TVs of all sizes.`,
			image: "/services/tv-repair.png",
			accent: "#ca2929",
			textClass: "text-white",
		},
		{
			title: "Dishwasher Repair",
			description: `Professional repair and maintenance services for ${brandName} dishwashers.`,
			image: "/services/dishwasher.png",
			accent: "#1f2f3d",
			textClass: "text-white",
		},
	];

	const commonIssues = [
		"Not starting or powering on",
		"Display errors or error codes",
		"Poor cooling or heating performance",
		"Water leakage or drainage issues",
		"Strange noises or vibrations",
		"Door lock problems",
		"Control panel malfunction",
		"Compressor or motor issues",
	];

	const whyChooseUs = [
		{
			icon: BadgeCheck,
			title: "Certified Technicians",
			description:
				"Our team is trained and certified to handle all appliances with expertise.",
		},
		{
			icon: Shield,
			title: "Genuine Parts",
			description:
				"We use only authentic spare parts to ensure quality and longevity.",
		},
		{
			icon: Clock,
			title: "Same-Day Service",
			description:
				"Quick response and same-day repair service available for urgent issues.",
		},
		{
			icon: Wrench,
			title: "Warranty Coverage",
			description:
				"All repairs come with a service warranty for your peace of mind.",
		},
	];

	return (
		<div className="w-full bg-white">
			{/* Hero Section */}
			<section className="relative w-full h-[65vh] md:h-[80vh] bg-slate-700 overflow-hidden bg-linear-to-br from-indigo-900 via-red-900 to-indigo-900">
				{/* Overlay */}
				<div className="absolute inset-0 bg-black/20 z-1"></div>

				{/* Navbar */}
				<Navbar variant="brand" />

				{/* Content Container */}
				<div className="relative z-10 flex flex-col items-center justify-center h-full px-6">
					{/* Logo */}
					<div
						className={`mb-6 transition-all duration-700 ${
							heroVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
						style={{ transitionDelay: "100ms" }}>
						{brandLogo ? (
							<Image
								src={brandLogo}
								alt={`${brandName} logo`}
								width={2000}
								height={2000}
								className="w-60 object-contain"
							/>
						) : (
							<div className="px-6 py-3 border border-white/40 text-white text-lg sm:text-xl font-extrabold tracking-[0.2em] uppercase">
								{brandName}
							</div>
						)}
					</div>

					{/* Main Heading */}
					<div
						className={`text-center mb-8 transition-all duration-700 ${
							heroVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
						style={{ transitionDelay: "150ms" }}>
						{/* <p className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-2">
							{brandName.toUpperCase()}
						</p> */}
						<p className="text-4xl sm:text-5xl lg:text-6xl font-bold">
							<span className="text-[#ca2929]">Service</span>{" "}
							<span className="text-white">Center</span>
						</p>
					</div>

					{/* Description */}
					<p
						className={`text-white text-center max-w-3xl text-sm sm:text-base lg:text-lg leading-relaxed mb-10 transition-all duration-700 ${
							heroVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
						style={{ transitionDelay: "250ms" }}>
						Professional repair and maintenance services for all {brandName}{" "}
						home appliances. Our certified technicians provide doorstep service
						with genuine parts and quality repairs you can trust.
					</p>

					{/* CTA Buttons */}
					<div
						className={`flex flex-col sm:flex-row gap-4 sm:gap-6 transition-all duration-700 ${
							heroVisible
								? "opacity-100 translate-y-0"
								: "opacity-0 translate-y-8"
						}`}
						style={{ transitionDelay: "350ms" }}>
						<Link
							href={`tel:${COMPANY_INFO.phone}`}
							className="bg-[#ca2929] hover:bg-red-700 text-white px-8 py-3 font-bold transition-colors duration-200 text-center">
							Call: {COMPANY_INFO.phoneDisplay}
						</Link>
					</div>
				</div>
			</section>
			<Contact />
			{/* About Brand Section */}
			{/* <section ref={aboutRef} className="py-16 md:py-24 bg-[#f7e9e0]">
				<div className="max-w-7xl mx-auto px-6">
					<div className="grid md:grid-cols-2 gap-12 items-center">
						<div
							className={`transition-all duration-700 ${
								aboutVisible
									? "opacity-100 translate-x-0"
									: "opacity-0 -translate-x-8"
							}`}
							>
							<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
								About <span className="gradient-text">{brandName}</span>{" "}
								Appliances
							</h2>
							<div className="w-24 h-1 bg-[#ca2929] mb-8"></div>
							<div className="space-y-6 text-gray-700 text-lg">
								<p>
									{brandName} is a globally recognized leader in home
									appliances, known for innovative technology, energy
									efficiency, and smart features. From washing machines and
									refrigerators to air conditioners and microwaves, {brandName}
									appliances are designed to make your life easier and more
									comfortable.
								</p>
								<p>
									Our technicians are specially trained to handle {brandName}
									advanced technology, including digital inverter compressors,
									eco bubble technology, smart connectivity features, and more.
								</p>
								<p className="font-semibold">
									We have the expertise and genuine parts to keep your
									appliances running at peak performance.
								</p>
							</div>
						</div>

						<div
							className={`relative transition-all duration-700 ${
								aboutVisible
									? "opacity-100 translate-x-0"
									: "opacity-0 translate-x-8"
							}`}
							style={{ transitionDelay: "200ms" }}>
							<div className="relative">
								<div className="absolute inset-0 bg-linear-to-r from-red-400 to-[#ca2929] transform rotate-3 rounded-lg"></div>
								<Image
									src="/images/about_us.png"
									alt={`${brandName} Appliance Repair`}
									className="relative w-full h-80 object-cover shadow-xl rounded-lg"
									height={320}
									width={480}
								/>
							</div>
						</div>
					</div>
				</div>
			</section> */}

			{/* Common Issues Section */}
			<section ref={issuesRef} className="py-16 md:py-24">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
							Common {brandName}{" "}
							<span className="gradient-text">Issues We Fix</span>
						</h2>
						<div className="w-24 h-1 bg-[#ca2929] mx-auto mb-8"></div>
						<p className="text-lg text-gray-700 max-w-2xl mx-auto">
							Our expert technicians can diagnose and repair a wide range of
							{brandName} appliance problems
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl mx-auto">
						{commonIssues.map((issue, index) => (
							<div
								key={index}
								className={`flex items-center gap-3 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-all duration-300 ${
									issuesVisible
										? "opacity-100 translate-x-0"
										: "opacity-0 translate-x-8"
								}`}
								style={{
									transitionDelay: `${index * 50}ms`,
								}}>
								<div className="w-3 h-3 bg-[#ca2929] rounded-full shrink-0"></div>
								<p className="text-gray-800 font-medium">{issue}</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Why Choose Us Section */}
			<section ref={whyChooseRef} className="py-16 md:py-24 bg-white">
				<div className="max-w-7xl mx-auto px-6">
					<div className="text-center mb-16">
						<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
							Why Choose Us for{" "}
							<span className="gradient-text">{brandName} Repairs</span>
						</h2>
						<div className="w-24 h-1 bg-[#ca2929] mx-auto mb-8"></div>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
						{whyChooseUs.map((item, index) => (
							<div
								key={item.title}
								className={`bg-[#f6edea] p-8 shadow-lg text-center group hover:-translate-y-2 transition-all duration-300 hover:shadow-xl ${
									whyChooseVisible
										? "opacity-100 translate-y-0"
										: "opacity-0 translate-y-8"
								}`}
								style={{
									transitionDelay: `${index * 100}ms`,
								}}>
								<div className="w-16 h-16 bg-linear-to-r from-red-400 to-[#ca2929] rounded-full flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300">
									<item.icon className="w-8 h-8 text-white" />
								</div>
								<h3 className="text-xl font-bold text-gray-900 mb-4">
									{item.title}
								</h3>
								<p className="text-gray-700 leading-relaxed">
									{item.description}
								</p>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* Services Section */}
			<section
				ref={servicesRef}
				className="relative w-full py-16 md:py-24 bg-white">
				<div className="max-w-6xl mx-auto px-4 lg:px-8">
					<div className="text-center mb-14">
						<h2 className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-slate-900 tracking-tight">
							{brandName} <span className="gradient-text">Repair Services</span>
						</h2>
						<p className="mt-4 text-lg text-slate-600 max-w-3xl mx-auto">
							We provide comprehensive repair solutions for all {brandName}
							appliances with expert technicians and genuine parts
						</p>
					</div>

					<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
						{brandServices.map((service, index) => (
							<div
								key={service.title}
								className={`shadow-lg border border-gray-100 overflow-hidden bg-white transition-all duration-700 hover:-translate-y-1 hover:shadow-xl flex flex-col h-full ${
									servicesVisible
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
			</section>

			{/* CTA Section */}
			<section className="py-16 md:py-24 bg-linear-to-br from-[#2d3e50] via-[#1f2f3d] to-[#1a2936] text-white">
				<div className="max-w-4xl mx-auto px-6 text-center">
					<h2 className="text-3xl md:text-5xl font-bold mb-6">
						Need {brandName} Appliance Repair?
					</h2>
					<div className="w-24 h-1 bg-yellow-400 mx-auto mb-8"></div>
					<p className="text-xl md:text-2xl mb-8 text-gray-300">
						Get fast, reliable, and affordable repair services from certified
						technicians
					</p>

					<div className="flex flex-col sm:flex-row gap-4 justify-center mb-8">
						<a
							href={`tel:${COMPANY_INFO.phone}`}
							className="bg-[#ca2929] hover:bg-red-700 text-white px-8 py-4 font-bold transition-colors duration-200 flex items-center justify-center gap-2">
							<Phone className="w-5 h-5" />
							Call: {COMPANY_INFO.phoneDisplay}
						</a>
						<Link
							href="/#contact"
							className="bg-yellow-400 hover:bg-yellow-500 text-gray-900 px-8 py-4 font-bold transition-colors duration-200 text-center">
							Book Online
						</Link>
					</div>

					{/* <div className="mt-8 text-gray-400 text-sm">
						<p className="flex items-center justify-center gap-2">
							<Mail className="w-4 h-4" />
							{COMPANY_INFO.email}
						</p>
					</div> */}
				</div>
			</section>

			{/* Footer */}
			<Footer />
		</div>
	);
}
