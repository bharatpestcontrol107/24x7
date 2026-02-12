export type BrandInfo = {
	name: string;
	slug: string;
	logo?: string;
};

const BRAND_NAMES = [
	"All",
	"Samsung",
	"Whirlpool",
	"Godrej",
	"IFB",
	"Bosch",
	"Haier",
	"Panasonic",
	"Sony",
	"Voltas",
	"Blue Star",
	"Daikin",
	"Hitachi",
	"Carrier",
	"Mitsubishi",
	"Toshiba",
	"Siemens",
	"Philips",
	"O-General",
	"Onida",
];

export const BRANDS: BrandInfo[] = BRAND_NAMES.map((name) => ({
	name,
	slug: slugify(name),
	logo: `/brands/${name}.png`,
}));

export function slugify(name: string) {
	return name
		.toLowerCase()
		.replace(/[^a-z0-9]+/g, "-")
		.replace(/(^-|-$)/g, "");
}

export function titleFromSlug(slug: string) {
	return slug
		.split("-")
		.filter(Boolean)
		.map((part) => part.charAt(0).toUpperCase() + part.slice(1))
		.join(" ");
}
