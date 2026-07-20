import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { SplitText } from "gsap/SplitText";

gsap.registerPlugin(ScrollTrigger, SplitText);

const headingSelector = "h1, h2, h3, h4, h5, h6";

export function initializeHeadingReveals() {
  const initializedHeadings = new WeakSet<HTMLHeadingElement>();
  const splitHeadings = new Map<
    HTMLHeadingElement,
    { instance: SplitText; inlineTextWrap: string }
  >();

  const revertHeading = (heading: HTMLHeadingElement) => {
    const splitHeading = splitHeadings.get(heading);

    if (!splitHeading) {
      return;
    }

    splitHeading.instance.revert();

    if (splitHeading.inlineTextWrap) {
      heading.style.textWrap = splitHeading.inlineTextWrap;
    } else {
      heading.style.removeProperty("text-wrap");
    }

    splitHeadings.delete(heading);
  };

  const initializeHeading = (heading: HTMLHeadingElement) => {
    if (initializedHeadings.has(heading) || !heading.textContent?.trim()) {
      return;
    }

    initializedHeadings.add(heading);

    const inlineTextWrap = heading.style.textWrap;
    heading.style.textWrap = "wrap";

    const instance = SplitText.create(heading, {
      type: "lines",
      mask: "lines",
      autoSplit: true,
      aria: "auto",
      linesClass: "heading-reveal-line",
      onSplit(self) {
        return gsap.from(self.lines, {
          yPercent: 110,
          autoAlpha: 0,
          duration: 0.9,
          stagger: 0.09,
          ease: "power4.out",
          clearProps: "transform,opacity,visibility",
          scrollTrigger: {
            trigger: heading,
            start: "top 88%",
            once: true,
          },
        });
      },
    });

    splitHeadings.set(heading, { instance, inlineTextWrap });
  };

  const initializeHeadingsWithin = (root: ParentNode) => {
    if (root instanceof HTMLHeadingElement) {
      initializeHeading(root);
    }

    root
      .querySelectorAll<HTMLHeadingElement>(headingSelector)
      .forEach(initializeHeading);
  };

  initializeHeadingsWithin(document);

  const observer = new MutationObserver((records) => {
    records.forEach((record) => {
      record.addedNodes.forEach((node) => {
        if (node instanceof Element) {
          initializeHeadingsWithin(node);
        }
      });

      record.removedNodes.forEach((node) => {
        if (!(node instanceof Element)) {
          return;
        }

        if (node instanceof HTMLHeadingElement) {
          revertHeading(node);
        }

        node
          .querySelectorAll<HTMLHeadingElement>(headingSelector)
          .forEach(revertHeading);
      });
    });
  });

  observer.observe(document.body, { childList: true, subtree: true });

  return () => {
    observer.disconnect();
    splitHeadings.forEach(({ instance, inlineTextWrap }, heading) => {
      instance.revert();

      if (inlineTextWrap) {
        heading.style.textWrap = inlineTextWrap;
      } else {
        heading.style.removeProperty("text-wrap");
      }
    });
    splitHeadings.clear();
  };
}
