"use client";

import { COMPANY_INFO } from "@/lib/constants";

export default function Contact() {
	return (
		<section id="contact" className="w-full py-20">
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid lg:grid-cols-[40%_60%] gap-8">
					{/* Left - Contact Information */}
					<div className="bg-gray-100 p-10 flex flex-col">
						{/* Header */}
						<div className="mb-10">
							<div className="w-14 h-14 bg-[#ca2929] flex items-center justify-center mb-6">
								<svg
									className="w-7 h-7 text-white"
									fill="none"
									stroke="currentColor"
									viewBox="0 0 24 24">
									<path
										strokeLinecap="round"
										strokeLinejoin="round"
										strokeWidth={2}
										d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
									/>
								</svg>
							</div>
							<h3 className="text-2xl font-bold text-gray-900 mb-3">
								Contact Information
							</h3>
							<p className="text-gray-700 text-sm leading-relaxed">
								For emergency repairs, service quotes, or appliance maintenance
								inquiries, use the contact details below. We&apos;re available
								24/7 and ready to help!
							</p>
						</div>

						{/* Contact Items */}
						<div className="space-y-6 grow">
							{/* Phone */}
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 border-2 border-red-300 flex items-center justify-center shrink-0">
									<svg
										className="w-5 h-5 text-[#ca2929]"
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
								</div>
								<div>
									<h4 className="text-lg font-bold text-gray-900 mb-1">
										Call Now
									</h4>
									<a
										href={`tel:${COMPANY_INFO.phone}`}
										className="text-gray-700 text-sm hover:text-[#ca2929] transition-colors">
										{COMPANY_INFO.phoneDisplay}
									</a>
								</div>
							</div>

							{/* Email */}
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 border-2 border-red-300 flex items-center justify-center shrink-0">
									<svg
										className="w-5 h-5 text-[#ca2929]"
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
								</div>
								<div>
									<h4 className="text-lg font-bold text-gray-900 mb-1">
										Send Email
									</h4>
									<a
										href={`mailto:${COMPANY_INFO.email}`}
										className="text-gray-700 text-sm hover:text-[#ca2929] transition-colors break-all">
										{COMPANY_INFO.email}
									</a>
								</div>
							</div>

							{/* Location */}
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 border-2 border-red-300 flex items-center justify-center shrink-0">
									<svg
										className="w-5 h-5 text-[#ca2929]"
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
								</div>
								<div>
									<h4 className="text-lg font-bold text-gray-900 mb-1">
										Find Location
									</h4>
									<p className="text-gray-700 text-sm">
										{COMPANY_INFO.address.address}
									</p>
								</div>
							</div>

							{/* Schedule */}
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 border-2 border-red-300 flex items-center justify-center shrink-0">
									<svg
										className="w-5 h-5 text-[#ca2929]"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
										/>
									</svg>
								</div>
								<div>
									<h4 className="text-lg font-bold text-gray-900 mb-1">
										Schedule
									</h4>
									<p className="text-gray-700 text-sm">
										{COMPANY_INFO.hours.availability}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right - Contact Form */}
					<div className="bg-white p-10">
						{/* Header */}
						<div className="mb-8">
							<div className="flex items-center gap-2 text-gray-700 mb-3">
								<svg
									className="w-5 h-5"
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
								<span className="font-medium text-sm">Contact Us</span>
							</div>
							<h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								We&apos;re Here to Help!
							</h2>
							<p className="text-gray-600 text-sm leading-relaxed">
								Need emergency repair, a quote, or service details? Contact us
								and we&apos;ll respond quickly with professional appliance
								solutions tailored to your needs.
							</p>
						</div>

						{/* Form */}
						<form className="space-y-4">
							{/* Full Name */}
							<div>
								<label className="block text-sm font-semibold text-gray-900 mb-2">
									Full Name
								</label>
								<input
									type="text"
									placeholder="Full name"
									className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ca2929]/20 focus:border-[#ca2929] transition-all"
								/>
							</div>

							{/* Email & Phone */}
							<div className="grid grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Email
									</label>
									<input
										type="email"
										placeholder="Email"
										className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ca2929]/20 focus:border-[#ca2929] transition-all"
									/>
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Phone
									</label>
									<input
										type="tel"
										placeholder="Phone"
										className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ca2929]/20 focus:border-[#ca2929] transition-all"
									/>
								</div>
							</div>

							{/* Services */}
							<div>
								<label className="block text-sm font-semibold text-gray-900 mb-2">
									Services
								</label>
								<div className="relative">
									<select className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ca2929]/20 focus:border-[#ca2929] transition-all appearance-none cursor-pointer">
										<option>Washing Machine Repair</option>
										<option>AC & Cooling Service</option>
										<option>Refrigerator Repair</option>
										<option>Microwave & Oven Repair</option>
										<option>Water Heater Service</option>
										<option>Other Services</option>
									</select>
									<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none">
										<svg
											className="w-4 h-4 text-gray-600"
											fill="none"
											stroke="currentColor"
											viewBox="0 0 24 24">
											<path
												strokeLinecap="round"
												strokeLinejoin="round"
												strokeWidth={2}
												d="M19 9l-7 7-7-7"
											/>
										</svg>
									</div>
								</div>
							</div>

							{/* Message */}
							<div>
								<label className="block text-sm font-semibold text-gray-900 mb-2">
									Message
								</label>
								<textarea
									rows={2}
									placeholder="Write a message..."
									className="w-full px-4 py-2 border border-gray-300 bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ca2929]/20 focus:border-[#ca2929] transition-all resize-none"></textarea>
							</div>

							{/* Submit Button */}
							<div className="flex justify-end mt-2">
								<button
									type="submit"
									className="bg-[#ca2929] text-white px-6 py-2 font-semibold hover:bg-red-700 transition-colors flex items-center gap-2">
									<span>Send Message</span>
									<svg
										className="w-5 h-5"
										fill="none"
										stroke="currentColor"
										viewBox="0 0 24 24">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth={2}
											d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8"
										/>
									</svg>
								</button>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	);
}
