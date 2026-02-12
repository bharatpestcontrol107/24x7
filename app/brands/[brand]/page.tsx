import { notFound } from "next/navigation";
import { BRANDS } from "@/lib/brands";
import BrandPageClient from "./BrandPageClient";

export const dynamicParams = false;

type BrandPageProps = {
	params: Promise<{ brand: string }>;
};

export default async function BrandPage({ params }: BrandPageProps) {
	const { brand } = await params;
	const brandSlug = brand.toLowerCase();
	const isKnownBrand = BRANDS.some((item) => item.slug === brandSlug);
	if (!isKnownBrand) {
		notFound();
	}
	return <BrandPageClient brand={brandSlug} />;
}

export function generateStaticParams() {
	return BRANDS.map((brand) => ({ brand: brand.slug }));
}
