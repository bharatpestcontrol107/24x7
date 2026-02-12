"use client";

import { FormEvent, useMemo, useState, useEffect, useRef } from "react";
import toast from "react-hot-toast";
import { COMPANY_INFO } from "@/lib/constants";

type FormState = {
	fullName: string;
	phone: string;
	alternatePhone: string;
	service: string;
	productOld: string;
	address: string;
	pincode: string;
};

const productAgeOptions = [
	"1 Month to 12 Months",
	"1 Years to 2 Years",
	"2 Years to 4 Years",
	"4 Years to 7 Years",
	"7 Years to 10 Years",
	"10+ Years",
];

export default function Contact() {
	const [isVisible, setIsVisible] = useState(false);
	const sectionRef = useRef<HTMLElement>(null);

	const initialForm: FormState = useMemo(
		() => ({
			fullName: "",
			phone: "",
			alternatePhone: "",
			service: COMPANY_INFO.services[0],
			productOld: productAgeOptions[0],
			address: "",
			pincode: "",
		}),
		[],
	);

	const [form, setForm] = useState<FormState>(initialForm);
	const [errors, setErrors] = useState<
		Partial<Record<keyof FormState, string>>
	>({});
	const [submitting, setSubmitting] = useState(false);

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

	const validate = (state: FormState) => {
		const nextErrors: Partial<Record<keyof FormState, string>> = {};
		if (!state.fullName.trim()) nextErrors.fullName = "Full name is required.";
		const phoneDigits = state.phone.replace(/\D/g, "");
		if (!phoneDigits || phoneDigits.length !== 10)
			nextErrors.phone = "Phone must be exactly 10 digits.";
		// Alternate phone is optional
		if (!state.service.trim()) nextErrors.service = "Select a service.";
		if (!state.productOld.trim()) nextErrors.productOld = "Select product age.";
		if (!state.address.trim()) nextErrors.address = "Address is required.";
		const pincodeDigits = state.pincode.replace(/\D/g, "");
		if (!pincodeDigits || pincodeDigits.length !== 6)
			nextErrors.pincode = "Pincode must be exactly 6 digits.";
		return nextErrors;
	};

	const handleChange = (key: keyof FormState, value: string) => {
		setForm((prev) => ({ ...prev, [key]: value }));
		if (errors[key]) setErrors((prev) => ({ ...prev, [key]: undefined }));
	};

	const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
		event.preventDefault();
		const validation = validate(form);
		setErrors(validation);
		if (Object.keys(validation).length) {
			toast.error("Please fix the highlighted fields.");
			return;
		}

		setSubmitting(true);
		try {
			const response = await fetch("/api/contact", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify(form),
			});

			if (!response.ok) {
				const data = (await response.json().catch(() => ({}))) as {
					errors?: typeof errors;
					message?: string;
				};
				if (data.errors) setErrors(data.errors);
				throw new Error(data.message || "Failed to send message.");
			}

			setForm(initialForm);
			setErrors({});
			toast.success("Message sent! We will get back to you shortly.");
		} catch (error) {
			toast.error(
				error instanceof Error ? error.message : "Something went wrong.",
			);
		} finally {
			setSubmitting(false);
		}
	};

	return (
		<section className="w-full py-20" ref={sectionRef}>
			<div className="mx-auto max-w-7xl px-6">
				<div className="grid lg:grid-cols-[40%_60%] gap-8">
					{/* Left - Contact Information */}
					<div
						className={`p-10 flex flex-col transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}>
						{/* Header */}
						<div className="mb-10">
							<div className="hidden sm:flex w-14 h-14 bg-[#ca2929] items-center justify-center mb-6 rounded-full">
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
							<h2 className="text-2xl font-bold text-gray-900 mb-3">
								Contact Information
							</h2>
							<p className="text-gray-700 text-sm leading-relaxed">
								For repairs, quotes, or service requests, get in touch with our
								team today.
							</p>
						</div>

						{/* Contact Items */}
						<div className="space-y-6 grow">
							{/* Phone */}
							<a
								href={`tel:${COMPANY_INFO.phone}`}
								className="flex items-start gap-4 hover:opacity-80 transition-opacity">
								<div className="w-12 h-12 border-2 border-red-300 flex items-center justify-center shrink-0 rounded-full">
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
									<h4 className="text-lg font-bold text-gray-900">Call Now</h4>
									<span className="text-gray-700 text-sm hover:text-[#ca2929] transition-colors">
										{COMPANY_INFO.phoneDisplay}
									</span>
								</div>
							</a>
							{/* Email */}
							<a
								href={`mailto:${COMPANY_INFO.email}`}
								className="flex items-start gap-4 hover:opacity-80 transition-opacity">
								<div className="w-12 h-12 border-2 border-red-300 flex items-center justify-center shrink-0 rounded-full">
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
									<h4 className="text-lg font-bold text-gray-900">
										Send Email
									</h4>
									<span className="text-gray-700 text-sm hover:text-[#ca2929] transition-colors break-all">
										{COMPANY_INFO.email}
									</span>
								</div>
							</a>
							{/* Location */}
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 border-2 border-red-300 flex items-center justify-center shrink-0 rounded-full">
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
									<h4 className="text-lg font-bold text-gray-900">
										Find Location
									</h4>
									<p className="text-gray-700 text-sm">
										{COMPANY_INFO.address.address}
									</p>
								</div>
							</div>

							{/* Schedule */}
							<div className="flex items-start gap-4">
								<div className="w-12 h-12 border-2 border-red-300 flex items-center justify-center shrink-0 rounded-full">
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
									<h4 className="text-lg font-bold text-gray-900">Schedule</h4>
									<p className="text-gray-700 text-sm">
										{COMPANY_INFO.hours.availability}
									</p>
								</div>
							</div>
						</div>
					</div>

					{/* Right - Contact Form */}
					<div
						id="contact"
						className={`bg-gray-100 p-8 scroll-mt-12 transition-all duration-700 ${isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"}`}
						style={{ transitionDelay: isVisible ? "200ms" : "0ms" }}>
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
							<h3 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
								We&apos;re Here to Help!
							</h3>
							<p className="text-gray-600 text-sm leading-relaxed">
								Need a repair or service? Fill out the form and our team will
								get back to you shortly.
							</p>
						</div>

						{/* Form */}
						<form className="space-y-4" onSubmit={handleSubmit} noValidate>
							{/* Full Name */}
							<div>
								<label className="block text-sm font-semibold text-gray-900 mb-2">
									Full Name
								</label>
								<input
									type="text"
									placeholder="Full name"
									value={form.fullName}
									onChange={(e) => handleChange("fullName", e.target.value)}
									className={`w-full px-4 py-2 border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ca2929]/20 focus:border-[#ca2929] transition-all ${errors.fullName ? "border-red-500" : "border-gray-300"}`}
								/>
								{errors.fullName && (
									<p className="text-red-600 text-xs mt-1">{errors.fullName}</p>
								)}
							</div>

							{/* Phone & Alternate Phone */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Phone
									</label>
									<input
										type="tel"
										placeholder="Phone"
										inputMode="numeric"
										maxLength={10}
										value={form.phone}
										onChange={(e) => {
											const onlyNumbers = e.target.value.replace(/\D/g, "");
											handleChange("phone", onlyNumbers.slice(0, 10));
										}}
										className={`w-full px-4 py-2 border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ca2929]/20 focus:border-[#ca2929] transition-all ${errors.phone ? "border-red-500" : "border-gray-300"}`}
									/>
									{errors.phone && (
										<p className="text-red-600 text-xs mt-1">{errors.phone}</p>
									)}
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Alternate Phone
									</label>
									<input
										type="tel"
										placeholder="Alternate Phone (Optional)"
										inputMode="numeric"
										maxLength={10}
										value={form.alternatePhone}
										onChange={(e) => {
											const onlyNumbers = e.target.value.replace(/\D/g, "");
											handleChange("alternatePhone", onlyNumbers.slice(0, 10));
										}}
										className={`w-full px-4 py-2 border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ca2929]/20 focus:border-[#ca2929] transition-all ${errors.alternatePhone ? "border-red-500" : "border-gray-300"}`}
									/>
									{errors.alternatePhone && (
										<p className="text-red-600 text-xs mt-1">
											{errors.alternatePhone}
										</p>
									)}
								</div>
							</div>

							{/* Service & Product Age */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Service
									</label>
									<div className="relative">
										<select
											value={form.service}
											onChange={(e) => handleChange("service", e.target.value)}
											className={`w-full px-4 py-2 border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ca2929]/20 focus:border-[#ca2929] transition-all appearance-none cursor-pointer ${errors.service ? "border-red-500" : "border-gray-300"}`}>
											{COMPANY_INFO.services.map((item) => (
												<option key={item}>{item}</option>
											))}
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
									{errors.service && (
										<p className="text-red-600 text-xs mt-1">
											{errors.service}
										</p>
									)}
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Product Old
									</label>
									<div className="relative">
										<select
											value={form.productOld}
											onChange={(e) =>
												handleChange("productOld", e.target.value)
											}
											className={`w-full px-4 py-2 border bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#ca2929]/20 focus:border-[#ca2929] transition-all appearance-none cursor-pointer ${errors.productOld ? "border-red-500" : "border-gray-300"}`}>
											{productAgeOptions.map((item) => (
												<option key={item}>{item}</option>
											))}
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
									{errors.productOld && (
										<p className="text-red-600 text-xs mt-1">
											{errors.productOld}
										</p>
									)}
								</div>
							</div>

							{/* Address & Pincode */}
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								<div>
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Address
									</label>
									<input
										type="text"
										placeholder="Full address"
										value={form.address}
										onChange={(e) => handleChange("address", e.target.value)}
										className={`w-full px-4 py-2 border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ca2929]/20 focus:border-[#ca2929] transition-all ${errors.address ? "border-red-500" : "border-gray-300"}`}
									/>
									{errors.address && (
										<p className="text-red-600 text-xs mt-1">
											{errors.address}
										</p>
									)}
								</div>
								<div>
									<label className="block text-sm font-semibold text-gray-900 mb-2">
										Pincode
									</label>
									<input
										type="text"
										placeholder="Pincode"
										inputMode="numeric"
										maxLength={6}
										value={form.pincode}
										onChange={(e) => {
											const onlyNumbers = e.target.value.replace(/\D/g, "");
											handleChange("pincode", onlyNumbers.slice(0, 6));
										}}
										className={`w-full px-4 py-2 border bg-white text-gray-900 placeholder:text-gray-400 focus:outline-none focus:ring-2 focus:ring-[#ca2929]/20 focus:border-[#ca2929] transition-all ${errors.pincode ? "border-red-500" : "border-gray-300"}`}
									/>
									{errors.pincode && (
										<p className="text-red-600 text-xs mt-1">
											{errors.pincode}
										</p>
									)}
								</div>
							</div>

							{/* Submit Button */}
							<div className="flex justify-end mt-2">
								<button
									type="submit"
									disabled={submitting}
									className={`bg-[#ca2929] text-white px-6 py-2 font-semibold transition-colors flex items-center gap-2 ${submitting ? "opacity-70 cursor-not-allowed" : "hover:bg-red-700"}`}>
									<span>{submitting ? "Sending..." : "Send Message"}</span>
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
