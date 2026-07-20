import type { Components } from "react-markdown";
import Markdown from "react-markdown";
import remarkGfm from "remark-gfm";

import type { MarkdownRendererProps } from "../model/article";
import {
  markdownAnchorStyles,
  markdownBlockquoteStyles,
  markdownCodeStyles,
  markdownHeadingThreeStyles,
  markdownHeadingTwoStyles,
  markdownHorizontalRuleStyles,
  markdownListItemStyles,
  markdownOrderedListStyles,
  markdownParagraphStyles,
  markdownPreformattedStyles,
  markdownRootStyles,
  markdownStrongStyles,
  markdownTableCellStyles,
  markdownTableHeadStyles,
  markdownTableStyles,
  markdownUnorderedListStyles,
} from "./MarkdownRendererStyles";

function withoutMarkdownNode<T extends { node?: unknown }>(props: T): Omit<T, "node"> {
  const { node, ...elementProps } = props;
  void node;
  return elementProps;
}

const markdownComponents: Components = {
  h2(props) {
    return <h2 className={markdownHeadingTwoStyles()} {...withoutMarkdownNode(props)} />;
  },
  h3(props) {
    return <h3 className={markdownHeadingThreeStyles()} {...withoutMarkdownNode(props)} />;
  },
  p(props) {
    return <p className={markdownParagraphStyles()} {...withoutMarkdownNode(props)} />;
  },
  ul(props) {
    return <ul className={markdownUnorderedListStyles()} {...withoutMarkdownNode(props)} />;
  },
  ol(props) {
    return <ol className={markdownOrderedListStyles()} {...withoutMarkdownNode(props)} />;
  },
  li(props) {
    return <li className={markdownListItemStyles()} {...withoutMarkdownNode(props)} />;
  },
  strong(props) {
    return <strong className={markdownStrongStyles()} {...withoutMarkdownNode(props)} />;
  },
  a(props) {
    return <a className={markdownAnchorStyles()} {...withoutMarkdownNode(props)} />;
  },
  blockquote(props) {
    return <blockquote className={markdownBlockquoteStyles()} {...withoutMarkdownNode(props)} />;
  },
  hr(props) {
    return <hr className={markdownHorizontalRuleStyles()} {...withoutMarkdownNode(props)} />;
  },
  table(props) {
    return <table className={markdownTableStyles()} {...withoutMarkdownNode(props)} />;
  },
  th(props) {
    return <th className={markdownTableHeadStyles()} {...withoutMarkdownNode(props)} />;
  },
  td(props) {
    return <td className={markdownTableCellStyles()} {...withoutMarkdownNode(props)} />;
  },
  pre(props) {
    return <pre className={markdownPreformattedStyles()} {...withoutMarkdownNode(props)} />;
  },
  code(props) {
    return <code className={markdownCodeStyles()} {...withoutMarkdownNode(props)} />;
  },
};

export function MarkdownRenderer({ content }: MarkdownRendererProps) {
  return (
    <div className={markdownRootStyles()}>
      <Markdown remarkPlugins={[remarkGfm]} components={markdownComponents}>
        {content}
      </Markdown>
    </div>
  );
}
