import Image from "next/image";

import type { BrandLogoProps } from "../model/brand-logo";
import { brandLogoImageStyles, brandLogoStyles } from "./BrandLogoStyles";

export function BrandLogo({ eager = false }: BrandLogoProps) {
  return (
    <span className={brandLogoStyles()}>
      <Image
        src="/images/aston-dominion-logo.png"
        alt="Aston Dominion"
        width={270}
        height={202}
        sizes="180px"
        loading={eager ? "eager" : "lazy"}
        className={brandLogoImageStyles()}
      />
    </span>
  );
}
