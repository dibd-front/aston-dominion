import type { FC } from "react";

import { ButtonLink } from "@/shared/ui/button-link";
import { Container } from "@/shared/ui/container";
import { SiteHeader } from "@/widgets/site-header";

import {
  actionsStyles,
  arcEastStyles,
  arcNorthStyles,
  arcSouthStyles,
  backdropStyles,
  contentStyles,
  descriptionStyles,
  digitStyles,
  eyebrowLineStyles,
  eyebrowStyles,
  layoutStyles,
  mainStyles,
  numberStyles,
  pageStyles,
  skipLinkStyles,
  titleStyles,
  visualFrameStyles,
  visualStyles,
} from "./NotFoundPageStyles";

export const NotFoundPage: FC = () => {
  return (
    <div className={pageStyles()}>
      <a href="#not-found-content" className={skipLinkStyles()}>
        Skip to main content
      </a>

      <SiteHeader />

      <div aria-hidden="true" className={backdropStyles()} />

      <main id="not-found-content" tabIndex={-1} className={mainStyles()}>
        <Container size="wide">
          <div className={layoutStyles()}>
            <section className={contentStyles()} aria-labelledby="not-found-title">
              <p className={eyebrowStyles()}>
                <span aria-hidden="true" className={eyebrowLineStyles()} />
                Error 404
              </p>

              <h1 id="not-found-title" className={titleStyles()}>
                This route ends here.
              </h1>

              <p className={descriptionStyles()}>
                The page may have moved. Let us point you toward a working destination.
              </p>

              <div className={actionsStyles()}>
                <ButtonLink href="/">Return Home</ButtonLink>
                <ButtonLink href="/articles" variant="outlineLight">
                  Browse Articles
                </ButtonLink>
              </div>
            </section>

            <div aria-hidden="true" className={visualStyles()}>
              <div className={visualFrameStyles()}>
                <span className={arcNorthStyles()} />
                <span className={arcEastStyles()} />
                <span className={arcSouthStyles()} />

                <div className={numberStyles()}>
                  <span className={digitStyles()}>4</span>
                  <span className={digitStyles()}>0</span>
                  <span className={digitStyles()}>4</span>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </main>
    </div>
  );
};
