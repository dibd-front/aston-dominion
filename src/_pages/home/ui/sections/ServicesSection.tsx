import { Compass, Handshake, Network } from "lucide-react";

import { AnimatedReveal } from "@/shared/ui/animated-reveal";
import { Container } from "@/shared/ui/container";
import { SectionLabel } from "@/shared/ui/section-label";

import type { Service } from "../../model/home-content";
import { services } from "../../model/home-content";
import {
  serviceAreaStyles,
  serviceAreasStyles,
  serviceDescriptionStyles,
  serviceHeadingGroupStyles,
  serviceIconStyles,
  serviceIconWrapStyles,
  serviceIndexStyles,
  serviceRowStyles,
  serviceTitleStyles,
  servicesHeaderStyles,
  servicesListStyles,
  servicesSectionStyles,
  servicesTitleStyles,
} from "./ServicesSectionStyles";

const serviceIcons = {
  compass: Compass,
  handshake: Handshake,
  network: Network,
} satisfies Record<Service["icon"], typeof Compass>;

export function ServicesSection() {
  return (
    <section id="services" aria-labelledby="services-heading" className={servicesSectionStyles()}>
      <Container>
        <AnimatedReveal>
          <header className={servicesHeaderStyles()}>
            <SectionLabel number="02" label="What We Do" />
            <h2 id="services-heading" className={servicesTitleStyles()}>
              From Market Intelligence to Operational Scale.
            </h2>
          </header>
        </AnimatedReveal>

        <ol className={servicesListStyles()}>
          {services.map((service, index) => {
            const Icon = serviceIcons[service.icon];
            return (
              <li key={service.title}>
                <AnimatedReveal delay={index * 0.06}>
                  <article className={serviceRowStyles()}>
                    <p className={serviceIndexStyles()} aria-hidden="true">
                      {String(index + 1).padStart(2, "0")}
                    </p>
                    <div className={serviceHeadingGroupStyles()}>
                      <span className={serviceIconWrapStyles()} aria-hidden="true">
                        <Icon className={serviceIconStyles()} strokeWidth={1.4} />
                      </span>
                      <h3 className={serviceTitleStyles()}>{service.title}</h3>
                    </div>
                    <p className={serviceDescriptionStyles()}>{service.description}</p>
                    {/* <ul role="list" className={serviceAreasStyles()}>
                      {service.areas.map((area) => (
                        <li key={area} className={serviceAreaStyles()}>
                          {area}
                        </li>
                      ))}
                    </ul> */}
                  </article>
                </AnimatedReveal>
              </li>
            );
          })}
        </ol>
      </Container>
    </section>
  );
}
