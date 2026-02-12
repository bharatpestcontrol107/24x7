"use client";

import { Wrench, Zap, Users, IndianRupee } from "lucide-react";
import { COMPANY_INFO } from "@/lib/constants";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

export default function About() {
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
			{ threshold: 0.1 },
		);

		if (sectionRef.current) {
			observer.observe(sectionRef.current);
		}

		return () => observer.disconnect();
	}, []);
	const features = [
		{
			icon: Wrench,
			title: "Expert Technicians",
			description:
				"Certified and trained professionals with many years of experience",
		},
		{
			icon: Zap,
			title: "Quick Service",
			description: "Same-day repairs and instant diagnostics available",
		},
		{
			icon: IndianRupee,
			title: "Affordable Pricing",
			description:
				"Competitive rates with transparent pricing and no hidden costs",
		},
		{
			icon: Users,
			title: "Customer Care",
			description: "Dedicated support team for all your appliance needs",
		},
	];

	const services = COMPANY_INFO.services;

	return (
		<section id="about" className="py-20" ref={sectionRef}>
			<style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(50px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        @keyframes fadeInLeft {
          from {
            opacity: 0;
            transform: translateX(-50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes fadeInRight {
          from {
            opacity: 0;
            transform: translateX(50px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        @keyframes slideInUp {
          from {
            opacity: 0;
            transform: translateX(20px);
          }
          to {
            opacity: 1;
            transform: translateX(0);
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.8s ease-out;
        }

        .animate-fade-in-left {
          animation: fadeInLeft 0.8s ease-out;
        }

        .animate-fade-in-right {
          animation: fadeInRight 0.8s ease-out;
          animation-delay: 0.2s;
        }

        .service-item {
          animation: slideInUp 0.5s ease-out;
          animation-fill-mode: both;
        }

        .feature-card {
          animation: fadeInUp 0.6s ease-out;
          animation-fill-mode: both;
          transition: all 0.3s duration-300;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1);
        }

        .feature-icon {
          transition: transform 0.3s duration-300;
        }

        .feature-card:hover .feature-icon {
          transform: scale(1.1);
        }
      `}</style>

			<div className="container mx-auto px-4">
				<div className="text-center mb-16 animate-fade-in-up">
					<h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6">
						About{" "}
						<span className="text-[#ca2929]">
							{COMPANY_INFO.name.toUpperCase()}
						</span>
					</h2>
					<div className="w-24 h-1 bg-red-500 mx-auto mb-8"></div>
					<p className="text-lg text-gray-600 max-w-5xl mx-auto leading-relaxed">
						{COMPANY_INFO.name} provides reliable home appliance repair services
						with convenient doorstep support. We repair all major household
						appliances and focus on quick fault detection, quality replacement
						parts, and honest service. Our goal is to make appliance repair
						simple, affordable, and stress-free for every home.
					</p>
				</div>

				<div className="grid md:grid-cols-2 gap-16 items-center mb-20">
					<div className="animate-fade-in-left">
						<div className="relative">
							<div className="absolute inset-0 bg-linear-to-r from-red-400 to-[#ca2929] transform rotate-3"></div>
							<Image
								src="/images/about_us.png"
								alt="Appliance Repair"
								className="relative w-full h-80 object-cover shadow-xl"
								height={320}
								width={480}
							/>
						</div>
					</div>

					<div className="animate-fade-in-right space-y-6">
						<h3 className="text-3xl font-bold text-gray-900 mb-6">
							Our Service Coverage Includes:
						</h3>
						<div className="space-y-4">
							{services.map((item, index) => (
								<div
									key={item}
									className="service-item flex items-center space-x-3"
									style={{ animationDelay: `${index * 0.1}s` }}>
									<div className="w-2 h-2 bg-red-500"></div>
									<span className="text-lg text-gray-700 font-medium">
										{item}
									</span>
								</div>
							))}
						</div>
					</div>
				</div>

				<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
					{features.map((feature, index) => (
						<div
							key={feature.title}
							className="feature-card bg-[#f6edea] p-8 shadow-lg text-center group"
							style={{ animationDelay: `${index * 0.1}s` }}>
							<div className="w-16 h-16 bg-linear-to-r from-red-400 to-[#ca2929] rounded-full flex items-center justify-center mx-auto mb-6 feature-icon">
								<feature.icon className="w-8 h-8 text-white" />
							</div>
							<h4 className="text-xl font-bold text-gray-900 mb-4">
								{feature.title}
							</h4>
							<p className="text-gray-600 leading-relaxed">
								{feature.description}
							</p>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
