import type { Metadata } from "next";

import { Container } from "@/shared/ui/container";
import { SiteHeader } from "@/widgets/site-header";

import { ContactForm } from "./ContactForm";
import {
  contactAtmosphereStyles,
  contactCopyStyles,
  contactEyebrowRuleStyles,
  contactEyebrowStyles,
  contactGridStyles,
  contactInnerStyles,
  contactIntroStyles,
  contactMainStyles,
  contactOrbitInnerStyles,
  contactOrbitStyles,
  contactPageStyles,
  contactSectionStyles,
  contactSignalItemStyles,
  contactSignalListStyles,
  contactSkipLinkStyles,
  contactTitleStyles,
} from "./ContactPageStyles";

export const contactMetadata: Metadata = {
  title: "Contact — Aston Dominion",
  description:
    "Start a conversation with Aston Dominion about market entry, partnerships, supply chains, and retail expansion across emerging consumer markets.",
  openGraph: {
    type: "website",
    url: "/contact",
    title: "Contact — Aston Dominion",
    description:
      "Tell us where you want to grow. We will help chart the market, operating model, and route to scale.",
  },
};

const contactSignals = ["Market entry", "Partnerships", "Operational scale"] as const;

export function ContactPage() {
  return (
    <div className={contactPageStyles()}>
      <a href="#contact-main" className={contactSkipLinkStyles()}>
        Skip to contact form
      </a>
      <SiteHeader />
      <main id="contact-main" tabIndex={-1} className={contactMainStyles()}>
        <section aria-labelledby="contact-heading" className={contactSectionStyles()}>
          <div aria-hidden="true" className={contactAtmosphereStyles()} />
          <div aria-hidden="true" className={contactGridStyles()} />
          <div aria-hidden="true" className={contactOrbitStyles()}>
            <span className={contactOrbitInnerStyles()} />
          </div>

          <Container>
            <div className={contactInnerStyles()}>
              <div className={contactCopyStyles()}>
                <p className={contactEyebrowStyles()}>
                  <span aria-hidden="true" className={contactEyebrowRuleStyles()} />
                  Contact / New coordinates
                </p>
                <h1 id="contact-heading" className={contactTitleStyles()}>
                  Let&apos;s chart what comes next.
                </h1>
                <p className={contactIntroStyles()}>
                  Tell us the market, timing, and ambition. We will help turn an
                  unfamiliar frontier into a clear operating path.
                </p>
                <ul aria-label="Advisory focus" className={contactSignalListStyles()}>
                  {contactSignals.map((signal) => (
                    <li key={signal} className={contactSignalItemStyles()}>
                      {signal}
                    </li>
                  ))}
                </ul>
              </div>

              <ContactForm />
            </div>
          </Container>
        </section>
      </main>
    </div>
  );
}
