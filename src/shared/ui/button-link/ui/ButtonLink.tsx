import Link from "next/link";
import { ArrowRight } from "lucide-react";

import type { ButtonLinkProps } from "../model/button-link";
import { buttonLinkIconStyles, buttonLinkStyles } from "./ButtonLinkStyles";

export function ButtonLink({
  children,
  href,
  onClick,
  variant = "accent",
}: ButtonLinkProps) {
  return (
    <Link href={href} className={buttonLinkStyles({ variant })} onClick={onClick}>
      <span>{children}</span>
      <ArrowRight
        aria-hidden="true"
        className={buttonLinkIconStyles()}
        strokeWidth={1.6}
      />
    </Link>
  );
}
