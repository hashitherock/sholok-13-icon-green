// Inner SVG markup for each Sholok category icon (64x64 viewBox, stroke = currentColor).
// "accent" elements use var(--icon-accent) so the icon still reads in a single colour.
export type CategoryIconDef = {
  slug: string;
  name: string;
  component: string;
  body: string;
};

const A = 'fill="var(--icon-accent, none)"';

export const categoryIcons: CategoryIconDef[] = [
  {
    slug: "womens-clothing",
    name: "Women's Clothing",
    component: "WomensClothingIcon",
    body: `<path ${A} stroke="none" d="M22 30h20l8 22H14z"/><path d="M26 8v7M38 8v7"/><path d="M26 15c1.5 4 10.5 4 12 0l3 7-4 8H27l-4-8z"/><path d="M27 30h10l13 22c-11 3-25 3-36 0z"/><path d="M27 30l-2 5M37 30l2 5"/>`,
  },
  {
    slug: "mens-clothing",
    name: "Men's Clothing",
    component: "MensClothingIcon",
    body: `<path d="M24 10l-12 6-5 14 7 3 4-8v29h28V25l4 8 7-3-5-14-12-6"/><path ${A} d="M24 10l8 8 8-8M24 10l-2 7 6 4 4-3M40 10l2 7-6 4-4-3"/><path d="M32 22v30"/><circle cx="32" cy="30" r=".6" fill="currentColor"/><circle cx="32" cy="38" r=".6" fill="currentColor"/><circle cx="32" cy="46" r=".6" fill="currentColor"/>`,
  },
  {
    slug: "beauty-makeup",
    name: "Beauty & Makeup",
    component: "BeautyMakeupIcon",
    body: `<rect x="12" y="34" width="16" height="20" rx="2"/><path d="M14 34v-8h12v8"/><path ${A} d="M16 26V16l8-5v15z"/><circle cx="45" cy="38" r="10" ${A}/><circle cx="45" cy="38" r="6"/><path d="M41 49l-2 5h12l-2-5"/>`,
  },
  {
    slug: "personal-care",
    name: "Personal Care",
    component: "PersonalCareIcon",
    body: `<path d="M26 8h12M30 8v8h-2M38 8l4 3"/><rect x="26" y="16" width="10" height="6" rx="1"/><path d="M22 22h18a4 4 0 0 1 4 4v24a4 4 0 0 1-4 4H22a4 4 0 0 1-4-4V26a4 4 0 0 1 4-4z"/><path ${A} d="M31 32c3 4 5 6.5 5 9a5 5 0 0 1-10 0c0-2.5 2-5 5-9z"/><path d="M52 18c1.6 2.2 2.6 3.5 2.6 4.8a2.6 2.6 0 0 1-5.2 0c0-1.3 1-2.6 2.6-4.8z"/>`,
  },
  {
    slug: "fashion-lifestyle",
    name: "Fashion & Lifestyle",
    component: "FashionLifestyleIcon",
    body: `<path d="M23 24v-4a9 9 0 0 1 18 0v4"/><path ${A} d="M14 24h36l-3 28H17z"/><path d="M14 24h36l-3 28H17z"/><path d="M22 32h20"/><rect x="29" y="29" width="6" height="6" rx="1"/>`,
  },
  {
    slug: "health-wellness",
    name: "Health & Wellness",
    component: "HealthWellnessIcon",
    body: `<path d="M32 54S10 41 10 25a11 11 0 0 1 22-3 11 11 0 0 1 22 3c0 16-22 29-22 29z"/><path ${A} d="M28 26h8v6h6v8h-6v6h-8v-6h-6v-8h6z"/>`,
  },
  {
    slug: "baby-care",
    name: "Baby Care",
    component: "BabyCareIcon",
    body: `<path d="M28 16c0-6 8-6 8 0"/><path ${A} d="M24 16h16v6H24z"/><path d="M24 16h16v6H24z"/><path d="M26 22h12l2 6v20a6 6 0 0 1-6 6h-4a6 6 0 0 1-6-6V28z"/><path d="M24 32h5M24 38h4M24 44h5"/><path d="M35 39c-1.5-2-4 0-2.5 2l2.5 2.5 2.5-2.5c1.5-2-1-4-2.5-2z"/>`,
  },
  {
    slug: "home-kitchen",
    name: "Home & Kitchen",
    component: "HomeKitchenIcon",
    body: `<path d="M32 14v4"/><path ${A} d="M14 24c0-4 8-6 18-6s18 2 18 6z"/><path d="M14 24h36"/><path d="M16 28h32v18a6 6 0 0 1-6 6H22a6 6 0 0 1-6-6z"/><path d="M16 32H9M48 32h7"/><path d="M22 36v8"/>`,
  },
  {
    slug: "cleaning-supplies",
    name: "Cleaning Supplies",
    component: "CleaningSuppliesIcon",
    body: `<path d="M18 10h16l4 6H22z"/><path d="M22 16l-4 8M38 12h6"/><path d="M24 16v6M32 16v6"/><path d="M22 22h12l4 10v18a4 4 0 0 1-4 4H20a4 4 0 0 1-4-4V32z"/><path ${A} d="M18 36h18v10H18z"/><path d="M50 22v8M46 26h8M48 40v4M46 42h4"/>`,
  },
  {
    slug: "stationery-office",
    name: "Stationery & Office",
    component: "StationeryOfficeIcon",
    body: `<rect x="10" y="12" width="28" height="40" rx="3"/><path d="M10 20h-0M18 12v40"/><path d="M24 24h8M24 32h8M24 40h6"/><path ${A} d="M46 14l6 0v30l-3 7-3-7z"/><path d="M46 14h6v30l-3 7-3-7zM46 20h6M46 44h6"/>`,
  },
  {
    slug: "pet-care",
    name: "Pet Care",
    component: "PetCareIcon",
    body: `<path ${A} d="M32 32c-7 0-14 8-14 14 0 5 5 7 9 5 3-1.5 7-1.5 10 0 4 2 9 0 9-5 0-6-7-14-14-14z"/><path d="M32 32c-7 0-14 8-14 14 0 5 5 7 9 5 3-1.5 7-1.5 10 0 4 2 9 0 9-5 0-6-7-14-14-14z"/><ellipse cx="25" cy="17" rx="4.5" ry="6"/><ellipse cx="39" cy="17" rx="4.5" ry="6"/><ellipse cx="14" cy="28" rx="4" ry="5.5" transform="rotate(-25 14 28)"/><ellipse cx="50" cy="28" rx="4" ry="5.5" transform="rotate(25 50 28)"/>`,
  },
  {
    slug: "toys-sports",
    name: "Toys & Sports",
    component: "ToysSportsIcon",
    body: `<circle cx="32" cy="32" r="22"/><path ${A} d="M32 23l8 6-3 9h-10l-3-9z"/><path d="M32 23l8 6-3 9h-10l-3-9z"/><path d="M32 23V10M40 29l12-4M37 38l7 11M27 38l-7 11M24 29l-12-4"/>`,
  },
  {
    slug: "vehicle-essentials",
    name: "Vehicle Essentials",
    component: "VehicleEssentialsIcon",
    body: `<path d="M18 28l4-12a4 4 0 0 1 4-3h12a4 4 0 0 1 4 3l4 12"/><path ${A} d="M22 27l3-9h14l3 9z"/><rect x="10" y="28" width="44" height="16" rx="4"/><circle cx="19" cy="36" r="3"/><circle cx="45" cy="36" r="3"/><path d="M27 38h10"/><path d="M14 44v6h8v-6M42 44v6h8v-6"/>`,
  },
];

export const svgFile = (body: string, color = "#16834A", accent = "#EAF6EE") =>
  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64" width="64" height="64" fill="none" stroke="${color}" stroke-width="2.25" stroke-linecap="round" stroke-linejoin="round" style="--icon-accent:${accent}">${body}</svg>\n`;
