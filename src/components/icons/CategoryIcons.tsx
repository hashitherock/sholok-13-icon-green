import type { SVGProps } from "react";
import { categoryIcons } from "./category-icon-data";

export type CategoryIconProps = SVGProps<SVGSVGElement> & { size?: number; title?: string };

function make(slug: string) {
  const def = categoryIcons.find((i) => i.slug === slug)!;
  const Icon = ({ size = 48, title = def.name, ...rest }: CategoryIconProps) => (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 64 64"
      width={size}
      height={size}
      fill="none"
      stroke="currentColor"
      strokeWidth={2.25}
      strokeLinecap="round"
      strokeLinejoin="round"
      role="img"
      aria-label={title}
      {...rest}
      dangerouslySetInnerHTML={{ __html: `<title>${title}</title>${def.body}` }}
    />
  );
  Icon.displayName = def.component;
  return Icon;
}

export const WomensClothingIcon = make("womens-clothing");
export const MensClothingIcon = make("mens-clothing");
export const BeautyMakeupIcon = make("beauty-makeup");
export const PersonalCareIcon = make("personal-care");
export const FashionLifestyleIcon = make("fashion-lifestyle");
export const HealthWellnessIcon = make("health-wellness");
export const BabyCareIcon = make("baby-care");
export const HomeKitchenIcon = make("home-kitchen");
export const CleaningSuppliesIcon = make("cleaning-supplies");
export const StationeryOfficeIcon = make("stationery-office");
export const PetCareIcon = make("pet-care");
export const ToysSportsIcon = make("toys-sports");
export const VehicleEssentialsIcon = make("vehicle-essentials");

export const categoryIconComponents = categoryIcons.map((d) => ({ ...d, Icon: make(d.slug) }));
