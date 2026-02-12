"use client";

import { COMPANY_INFO } from "@/lib/constants";
import Image from "next/image";
import logo from "../public/favicon.png";
import Link from "next/link";
import { useState, useEffect } from "react";

type NavbarProps = {
	variant?: "home" | "brand";
};

export default function Navbar({ variant = "home" }: NavbarProps) {
	const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
	const [scrolled, setScrolled] = useState(false);
	const isBrand = variant === "brand";
	const companyNameClass = isBrand ? "text-white" : "text-[#ca2929]";
	const iconClass = isBrand ? "text-white" : "text-[#ca2929]";
	const labelTextClass = isBrand ? "text-white/80" : "text-[#ca2929]";
	const valueTextClass = isBrand ? "text-white" : "text-gray-800";
	const navLinkTextClass = isBrand ? "text-white" : "text-[#ca2929]";
	const navBorderClass = isBrand ? "border-white/40" : "border-red-700";

	useEffect(() => {
		const handleScroll = () => {
			setScrolled(window.scrollY > 20);
		};

		window.addEventListener("scroll", handleScroll);
		return () => window.removeEventListener("scroll", handleScroll);
	}, []);

	const mobileCompanyNameClass = scrolled ? "text-[#ca2929]" : companyNameClass;
	const mobileIconClass = scrolled ? "text-[#ca2929]" : iconClass;

	return (
		<header className="lg:absolute fixed inset-x-0 top-0 z-50">
			<style>{`
        .nav-link {
          position: relative;
          display: inline-block;
          transition: color 0.3s ease;
        }

        .nav-link::after {
          content: '';
          position: absolute;
          bottom: -2px;
          left: 50%;
          width: 0;
          height: 2px;
          background-color: currentColor;
          transition: width 0.4s ease, left 0.4s ease;
        }

        .nav-link:hover::after {
          width: 100%;
          left: 0;
        }

        .nav-link:hover {
          color: #b91c1c; /* Tailwind's red-700 */
        }

				.nav-link--brand:hover {
					color: #ffffff;
				}
      `}</style>

			<div
				className={`max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 transition-colors duration-300 ${scrolled ? "lg:bg-transparent bg-white shadow-md" : "bg-transparent"}`}>
				{/* Mobile Layout */}
				<div className="lg:hidden py-4 animate-fade-in">
					<div className="flex items-center justify-between">
						<Link href="/" className="flex items-center gap-4">
							<Image src={logo} alt="Logo" width={40} height={40} />
							<div
								className={`text-xl font-extrabold transition-colors duration-300 ${mobileCompanyNameClass}`}>
								{COMPANY_INFO.name}
							</div>
						</Link>
						<button
							onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
							className={`p-2 transition-colors duration-300 ${mobileIconClass}`}
							aria-label="Toggle menu">
							{mobileMenuOpen ? (
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M6 18L18 6M6 6l12 12"
									/>
								</svg>
							) : (
								<svg
									className="w-6 h-6"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M4 6h16M4 12h16M4 18h16"
									/>
								</svg>
							)}
						</button>
					</div>

					{/* Mobile Menu */}
					<div
						className={`overflow-hidden transition-all duration-300 ease-in-out bg-white backdrop-blur-sm ${
							mobileMenuOpen ? "max-h-96 opacity-100 mt-4" : "max-h-0 opacity-0"
						}`}>
						<nav className="flex flex-col gap-4 py-4 px-4">
							<Link
								href="/"
								onClick={() => setMobileMenuOpen(false)}
								className="text-[#ca2929] font-semibold text-lg uppercase hover:opacity-80 transition-opacity">
								Home
							</Link>
							<Link
								href="/#about"
								onClick={() => setMobileMenuOpen(false)}
								className="text-[#ca2929] font-semibold text-lg uppercase hover:opacity-80 transition-opacity">
								About Us
							</Link>
							<Link
								href="/#services"
								onClick={() => setMobileMenuOpen(false)}
								className="text-[#ca2929] font-semibold text-lg uppercase hover:opacity-80 transition-opacity">
								Services
							</Link>
							<Link
								href="/#brands"
								onClick={() => setMobileMenuOpen(false)}
								className="text-[#ca2929] font-semibold text-lg uppercase hover:opacity-80 transition-opacity">
								Brands
							</Link>
							<Link
								href="/#contact"
								onClick={() => setMobileMenuOpen(false)}
								className="text-[#ca2929] font-semibold text-lg uppercase hover:opacity-80 transition-opacity">
								Contact
							</Link>
							<Link
								href="#contact"
								onClick={() => setMobileMenuOpen(false)}
								className="bg-[#ca2929] text-white px-5 py-2 font-semibold hover:bg-red-700 transition-colors text-center mt-2">
								Get a Quote
							</Link>
						</nav>
					</div>
				</div>

				{/* Desktop Layout */}
				<div className="hidden lg:block animate-fade-in">
					<div className="flex items-center justify-between py-4 text-xs text-white/90">
						<Link href="/" className="flex items-center gap-4">
							<Image src={logo} alt="Logo" width={40} height={40} />
							<h1 className={`text-2xl font-extrabold ${companyNameClass}`}>
								{COMPANY_INFO.name}
							</h1>
						</Link>

						<div className="flex items-center gap-2 text-white/80">
							<div className="flex items-start gap-2">
								<svg
									className={`w-8 h-8 ${iconClass} mt-0.5 shrink-0`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
									/>
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
									/>
								</svg>
								<div className="flex flex-col">
									<div
										className={`text-xs uppercase tracking-wide font-bold text-left ${labelTextClass}`}>
										Address:
									</div>
									<div
										className={`text-sm font-bold text-left ${valueTextClass}`}>
										{COMPANY_INFO.address.address}
									</div>
								</div>
							</div>
							<Link
								href={`mailto:${COMPANY_INFO.email}`}
								className="flex items-start gap-2 hover:opacity-80 transition-opacity">
								<svg
									className={`w-8 h-8 ${iconClass} mt-0.5 shrink-0`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
									/>
								</svg>
								<div className="flex flex-col">
									<div
										className={`text-xs uppercase tracking-wide font-bold text-left ${labelTextClass}`}>
										E-mail:
									</div>
									<div
										className={`text-sm font-bold text-left ${valueTextClass}`}>
										{COMPANY_INFO.email}
									</div>
								</div>
							</Link>
							<Link
								href={`tel:${COMPANY_INFO.phone}`}
								className="flex items-start gap-2 hover:opacity-80 transition-opacity">
								<svg
									className={`w-8 h-8 ${iconClass} mt-0.5 shrink-0`}
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
									/>
								</svg>
								<div className="flex flex-col">
									<div
										className={`text-xs uppercase tracking-wide font-bold text-left ${labelTextClass}`}>
										Phone:
									</div>
									<div
										className={`text-sm font-bold text-left ${valueTextClass}`}>
										{COMPANY_INFO.phoneDisplay}
									</div>
								</div>
							</Link>
						</div>
					</div>

					{/* Navigation bar - Desktop only */}
					<div
						className={`border ${navBorderClass} bg-white/20 py-3 px-6 flex items-center justify-between`}>
						<nav className="flex items-center gap-18 ml-18 text-md text-white font-medium">
							<Link
								className={`nav-link ${isBrand ? "nav-link--brand" : ""} ${navLinkTextClass} cursor-pointer uppercase`}
								href="/">
								Home
							</Link>
							<Link
								className={`nav-link ${isBrand ? "nav-link--brand" : ""} ${navLinkTextClass} cursor-pointer uppercase`}
								href="/#about">
								About Us
							</Link>
							<Link
								className={`nav-link ${isBrand ? "nav-link--brand" : ""} ${navLinkTextClass} cursor-pointer uppercase`}
								href="/#services">
								Services
							</Link>
							<Link
								className={`nav-link ${isBrand ? "nav-link--brand" : ""} ${navLinkTextClass} cursor-pointer uppercase`}
								href="/#brands">
								Brands
							</Link>
							<Link
								className={`nav-link ${isBrand ? "nav-link--brand" : ""} ${navLinkTextClass} cursor-pointer uppercase`}
								href="/#contact">
								Contact
							</Link>
						</nav>

						<Link
							href="#contact"
							className="bg-[#ca2929] text-white px-5 py-2 font-semibold hover:bg-red-700 transition-colors">
							Get a Quote
						</Link>
					</div>
				</div>
			</div>
		</header>
	);
}
