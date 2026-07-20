import { ApproachSection } from "./sections/ApproachSection";
import { FinalCtaSection } from "./sections/FinalCtaSection";
import { HeroSection } from "./sections/HeroSection";
import { ImpactSection } from "./sections/ImpactSection";
import { ArticlesSection } from "./sections/ArticlesSection";
import { MarketsSection } from "./sections/MarketsSection";
import { ServicesSection } from "./sections/ServicesSection";
import { SiteFooter } from "@/widgets/site-footer";
import { SiteHeader } from "@/widgets/site-header";
import { mainStyles, pageStyles, skipLinkStyles } from "./HomePageStyles";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000";

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Aston Dominion",
  url: siteUrl,
  description:
    "Investment and market expansion advisory for international retail and consumer businesses.",
} as const;

export function HomePage() {
  return (
    <div className={pageStyles()}>
      <a href="#main-content" className={skipLinkStyles()}>
        Skip to main content
      </a>
      <SiteHeader />
      <main id="main-content" tabIndex={-1} className={mainStyles()}>
        <HeroSection />
        <MarketsSection />
        <ServicesSection />
        <ImpactSection />
        {/* <ApproachSection /> */}
        <ArticlesSection />
        <FinalCtaSection />
      </main>
      <SiteFooter />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(organizationSchema).replace(/</g, "\\u003c"),
        }}
      />
    </div>
  );
}
