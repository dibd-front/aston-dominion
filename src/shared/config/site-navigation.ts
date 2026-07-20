export interface SiteNavigationItem {
  readonly label: string;
  readonly href: `/${string}`;
}

export const siteNavigationItems = [
  { label: "Markets", href: "/#markets" },
  { label: "Services", href: "/#services" },
  { label: "Impact", href: "/#impact" },
  { label: "Articles", href: "/articles" },
] as const satisfies readonly SiteNavigationItem[];
