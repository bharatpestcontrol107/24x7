import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/lib/constants";
import { Toaster } from "react-hot-toast";
import StickyCallBar from "@/components/StickyCallBar";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: SITE_METADATA.title,
	description: SITE_METADATA.description,
	keywords: SITE_METADATA.keywords,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>
				{children}
				<StickyCallBar />
				<Toaster position="top-right" />
			</body>
		</html>
	);
}
