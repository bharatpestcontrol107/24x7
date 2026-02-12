"use client";

import { COMPANY_INFO } from "@/lib/constants";
import Link from "next/link";

export default function StickyCallBar() {
	return (
		<div className="fixed bottom-0 left-0 right-0 z-50 bg-[#ca2929] shadow-2xl overflow-hidden">
			<div className="max-w-7xl mx-auto px-3 py-3 md:px-4 md:py-4">
				<Link
					href={`tel:${COMPANY_INFO.phone}`}
					className="flex items-center justify-center gap-2 md:gap-4 text-white hover:opacity-90 transition-opacity">
					<div className="flex items-center justify-center w-6 h-6 md:w-7 md:h-7 shrink-0">
						<svg
							className="w-6 h-6 md:w-7 md:h-7 text-white animate-ring"
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
					<div className="flex items-center gap-1 md:gap-2">
						<span className="text-lg md:text-xl font-normal">Call Now:</span>
						<span className="text-xl md:text-2xl font-extrabold tracking-wide">
							{COMPANY_INFO.phoneDisplay}
						</span>
					</div>
				</Link>
			</div>
		</div>
	);
}
