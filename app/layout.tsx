import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { SITE_METADATA } from "@/lib/constants";

const inter = Inter({
	subsets: ["latin"],
	weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
	title: SITE_METADATA.title,
	description: SITE_METADATA.description,
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={`${inter.className} antialiased`}>{children}</body>
		</html>
	);
}
