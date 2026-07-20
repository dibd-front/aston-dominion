import { cva } from "class-variance-authority";

export const markdownRootStyles = cva([
  "MarkdownRenderer-root",
  "text-text",
]);

export const markdownHeadingTwoStyles = cva([
  "MarkdownRenderer-headingTwo",
  "mt-16",
  "scroll-mt-28",
  "font-serif",
  "text-[clamp(2.2rem,4.5vw,3.45rem)]",
  "font-semibold",
  "leading-[1.02]",
  "tracking-[-0.02em]",
  "text-primary-dark",
  "text-balance",
  "first:mt-0",
]);

export const markdownHeadingThreeStyles = cva([
  "MarkdownRenderer-headingThree",
  "mt-10",
  "scroll-mt-28",
  "font-serif",
  "text-[clamp(1.65rem,3vw,2.25rem)]",
  "font-semibold",
  "leading-[1.1]",
  "text-primary-dark",
  "text-balance",
]);

export const markdownParagraphStyles = cva([
  "MarkdownRenderer-paragraph",
  "mt-5",
  "text-[1.0625rem]",
  "leading-[1.9]",
  "text-[#2e4051]",
  "[text-wrap:pretty]",
  "sm:text-[1.125rem]",
]);

export const markdownUnorderedListStyles = cva([
  "MarkdownRenderer-unorderedList",
  "mt-6",
  "grid",
  "list-disc",
  "gap-3",
  "pl-6",
  "marker:text-accent",
]);

export const markdownOrderedListStyles = cva([
  "MarkdownRenderer-orderedList",
  "mt-6",
  "grid",
  "list-decimal",
  "gap-3",
  "pl-6",
  "marker:font-serif",
  "marker:text-accent",
]);

export const markdownListItemStyles = cva([
  "MarkdownRenderer-listItem",
  "pl-2",
  "text-[1.0625rem]",
  "leading-[1.8]",
  "text-[#2e4051]",
  "[text-wrap:pretty]",
  "sm:text-[1.125rem]",
  "[&>p]:mt-0",
]);

export const markdownStrongStyles = cva([
  "MarkdownRenderer-strong",
  "font-semibold",
  "text-primary-dark",
]);

export const markdownAnchorStyles = cva([
  "MarkdownRenderer-anchor",
  "font-medium",
  "text-primary",
  "underline",
  "decoration-accent",
  "decoration-[0.0625rem]",
  "underline-offset-[0.25rem]",
  "transition-colors",
  "hover:text-[#806b43]",
]);

export const markdownBlockquoteStyles = cva([
  "MarkdownRenderer-blockquote",
  "my-10",
  "border-l-[0.1875rem]",
  "border-accent",
  "bg-[#eeeae2]",
  "px-7",
  "py-5",
  "font-serif",
  "text-xl",
  "italic",
  "[&>p]:mt-0",
]);

export const markdownHorizontalRuleStyles = cva([
  "MarkdownRenderer-horizontalRule",
  "my-12",
  "h-[0.0625rem]",
  "border-0",
  "bg-primary/15",
]);

export const markdownTableStyles = cva([
  "MarkdownRenderer-table",
  "my-9",
  "block",
  "w-full",
  "overflow-x-auto",
  "border-collapse",
  "text-left",
  "text-sm",
]);

export const markdownTableHeadStyles = cva([
  "MarkdownRenderer-tableHead",
  "border-b-[0.0625rem]",
  "border-primary/30",
  "bg-primary-dark",
  "px-4",
  "py-3",
  "font-semibold",
  "text-white",
]);

export const markdownTableCellStyles = cva([
  "MarkdownRenderer-tableCell",
  "border-b-[0.0625rem]",
  "border-primary/12",
  "px-4",
  "py-3",
  "align-top",
]);

export const markdownPreformattedStyles = cva([
  "MarkdownRenderer-preformatted",
  "my-9",
  "overflow-x-auto",
  "rounded-[0.25rem]",
  "bg-primary-dark",
  "p-5",
  "text-sm",
  "leading-7",
  "text-white/88",
]);

export const markdownCodeStyles = cva([
  "MarkdownRenderer-code",
  "rounded-[0.1875rem]",
  "bg-primary/8",
  "px-1.5",
  "py-0.5",
  "font-mono",
  "text-[0.9em]",
  "text-primary-dark",
  "[pre_&]:bg-transparent",
  "[pre_&]:p-0",
  "[pre_&]:text-inherit",
]);
