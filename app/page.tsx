import {
	HeroSection,
	Features,
	Brands,
	Services,
	About,
	Statistics,
	Contact,
	Footer,
} from "@/components";
import StickyCallBar from "@/components/StickyCallBar";

export default function Home() {
	return (
		<div className="w-full bg-white">
			<HeroSection />
			<Features />
			<About />
			<Services />
			<Brands />
			<Statistics />
			<Contact />
			<Footer />
			<StickyCallBar />
		</div>
	);
}
