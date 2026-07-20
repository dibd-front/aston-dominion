import Link from "next/link";

import { BrandLogo } from "@/shared/ui/brand-logo";
import { Container } from "@/shared/ui/container";

import { navigationItems } from "../model/home-content";
import {
  footerBottomStyles,
  footerBrandStyles,
  footerDescriptionStyles,
  footerGridStyles,
  footerLinkStyles,
  footerLogoStyles,
  footerNavListStyles,
  footerNavStyles,
  footerStyles,
} from "./FooterStyles";

export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className={footerStyles()}>
      <Container>
        <div className={footerGridStyles()}>
          <div className={footerBrandStyles()}>
            <div className={footerLogoStyles()}>
              <BrandLogo />
            </div>
            <p className={footerDescriptionStyles()}>
              Investment and market expansion advisory for international retail and
              consumer businesses.
            </p>
          </div>
          <nav aria-label="Footer" className={footerNavStyles()}>
            <ul role="list" className={footerNavListStyles()}>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={footerLinkStyles()}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>
        <p className={footerBottomStyles()}>
          © {currentYear} Aston Dominion. All rights reserved.
        </p>
      </Container>
    </footer>
  );
}
