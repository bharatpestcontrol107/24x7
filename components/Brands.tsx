"use client";

export default function Brands() {
	const brands = [
		"LG",
		"Samsung",
		"Whirlpool",
		"Voltas",
		"Godrej",
		"IFB",
		"Bosch",
		"Haier",
		"Daikin",
		"Carrier",
		"Panasonic",
	];

	const scrollBrands = [...brands, ...brands];

	return (
		<section className="w-full py-16 bg-white overflow-hidden antialiased">
			<style>{`
        @keyframes scroll-x {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }

        .scroll-track {
          display: flex;
          width: max-content;
          animation: scroll-x 30s linear infinite;
          gap: 8em;
        }
      `}</style>

			<div className="max-w-7xl mx-auto px-6 mb-10">
				<h2 className="text-3xl md:text-4xl font-bold text-gray-900 text-center">
					We Repair All Major <span className="text-[#ca2929]">Brands</span>
				</h2>
				<p className="text-gray-700 text-center mt-4 max-w-2xl mx-auto">
					We provide repair services for a wide range of home
					appliance brands. Our technicians are experienced in repairing washing
					machines, ACs, refrigerators, and other household appliances across
					popular brands.
				</p>
			</div>

			<div className="relative overflow-hidden">
				<div className="scroll-track px-4">
					{scrollBrands.map((brand, index) => (
						<div
							key={`${brand}-${index}`}
							className="flex items-center justify-center py-4">
							<span className="text-4xl md:text-5xl font-extrabold text-gray-500 hover:text-[#ca2929] transition-colors leading-[1.2] whitespace-nowrap">
								{brand}
							</span>
						</div>
					))}
				</div>
			</div>
		</section>
	);
}
