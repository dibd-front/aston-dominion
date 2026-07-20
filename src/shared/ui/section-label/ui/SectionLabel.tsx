import type { SectionLabelProps } from "../model/section-label";
import { sectionLabelRuleStyles, sectionLabelStyles } from "./SectionLabelStyles";

export function SectionLabel({
  label,
  number,
  tone = "light",
}: SectionLabelProps) {
  return (
    <p className={sectionLabelStyles({ tone })}>
      <span>{number}</span>
      <span aria-hidden="true" className={sectionLabelRuleStyles({ tone })} />
      <span>{label}</span>
    </p>
  );
}
