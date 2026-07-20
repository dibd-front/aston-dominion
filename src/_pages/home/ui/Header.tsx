"use client";

import { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { useMotionValueEvent, useScroll } from "motion/react";

import { ButtonLink } from "@/shared/ui/button-link";
import { BrandLogo } from "@/shared/ui/brand-logo";
import { Container } from "@/shared/ui/container";

import { navigationItems } from "../model/home-content";
import {
  desktopNavStyles,
  headerInnerStyles,
  headerLogoLinkStyles,
  headerStyles,
  mobileCloseButtonStyles,
  mobileCtaStyles,
  mobileDialogInnerStyles,
  mobileDialogStyles,
  mobileDialogTopStyles,
  mobileMenuButtonStyles,
  mobileMenuIconStyles,
  mobileNavLinkStyles,
  mobileNavListStyles,
  mobileNavStyles,
  navLinkStyles,
  navListStyles,
} from "./HeaderStyles";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const dialogRef = useRef<HTMLDialogElement>(null);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (latest) => {
    const nextIsScrolled = latest > 24;
    setIsScrolled((current) =>
      current === nextIsScrolled ? current : nextIsScrolled,
    );
  });

  useEffect(() => {
    const dialog = dialogRef.current;
    if (!dialog) return;

    if (isMenuOpen && !dialog.open) {
      dialog.showModal();
    } else if (!isMenuOpen && dialog.open) {
      dialog.close();
    }
  }, [isMenuOpen]);

  const closeMenu = () => setIsMenuOpen(false);

  return (
    <header className={headerStyles({ scrolled: isScrolled })}>
      <Container>
        <div className={headerInnerStyles()}>
          <Link href="/" aria-label="Aston Dominion home" className={headerLogoLinkStyles()}>
            <BrandLogo eager />
          </Link>

          <nav aria-label="Primary" className={desktopNavStyles()}>
            <ul role="list" className={navListStyles()}>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={navLinkStyles()}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <ButtonLink href="/contact" variant="outlineLight">
              Start a Conversation
            </ButtonLink>
          </nav>

          <button
            type="button"
            aria-label="Open navigation menu"
            aria-expanded={isMenuOpen}
            aria-controls="mobile-navigation"
            className={mobileMenuButtonStyles()}
            onClick={() => setIsMenuOpen(true)}
          >
            <Menu aria-hidden="true" className={mobileMenuIconStyles()} strokeWidth={1.6} />
          </button>
        </div>
      </Container>

      <dialog
        ref={dialogRef}
        id="mobile-navigation"
        aria-label="Mobile navigation"
        className={mobileDialogStyles()}
        onClose={closeMenu}
      >
        <div className={mobileDialogInnerStyles()}>
          <div className={mobileDialogTopStyles()}>
            <Link href="/" aria-label="Aston Dominion home" className={headerLogoLinkStyles()} onClick={closeMenu}>
              <BrandLogo eager />
            </Link>
            <button
              type="button"
              aria-label="Close navigation menu"
              className={mobileCloseButtonStyles()}
              onClick={closeMenu}
            >
              <X aria-hidden="true" className={mobileMenuIconStyles()} strokeWidth={1.6} />
            </button>
          </div>

          <nav aria-label="Mobile primary" className={mobileNavStyles()}>
            <ul role="list" className={mobileNavListStyles()}>
              {navigationItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className={mobileNavLinkStyles()} onClick={closeMenu}>
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className={mobileCtaStyles()}>
              <ButtonLink href="/contact" onClick={closeMenu}>
                Start a Conversation
              </ButtonLink>
            </div>
          </nav>
        </div>
      </dialog>
    </header>
  );
}
