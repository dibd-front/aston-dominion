export interface NavigationItem {
  readonly label: string;
  readonly href: `#${string}`;
}

export interface MarketThesisMetric {
  readonly value: string;
  readonly label: string;
  readonly description: string;
  readonly icon:
    | "globe"
    | "growth"
    | "people"
    | "cart"
    | "outlook"
    | "consumer";
}

export interface Service {
  readonly title: string;
  readonly description: string;
  readonly areas: readonly string[];
  readonly icon: "compass" | "handshake" | "network";
}

export interface ImpactMetric {
  readonly value: string;
  readonly label: string;
}

export interface InsightArticle {
  readonly category: string;
  readonly title: string;
  readonly description: string;
  readonly href: `/insights/${string}`;
  readonly image: `/images/${string}`;
  readonly imageAlt: string;
}

export interface ProcessStep {
  readonly title: string;
  readonly description: string;
}

export const navigationItems = [
  { label: "Markets", href: "#markets" },
  { label: "Services", href: "#services" },
  { label: "Insights", href: "#insights" },
  { label: "About", href: "#about" },
] as const satisfies readonly NavigationItem[];

export const marketThesisMetrics = [
  {
    label: "Southeast Asia",
    value: "700M+",
    description: "Consumers by 2030",
    icon: "globe",
  },
  {
    label: "Middle East",
    value: "7%",
    description: "Retail spend CAGR through 2028",
    icon: "growth",
  },
  {
    label: "South Asia",
    value: "~2B",
    description: "People and the next frontier of consumption",
    icon: "people",
  },
  {
    label: "Central Asia",
    value: "$50B+",
    description: "Kazakhstan retail trade turnover by 2026",
    icon: "cart",
  },
  {
    label: "Growth Outlook",
    value: "6.5-7.5%",
    description: "Annual real growth in Kazakhstan",
    icon: "outlook",
  },
  {
    label: "Consumer Shift",
    value: "Middle-Class",
    description: "Expansion across all key markets",
    icon: "consumer",
  },
] as const satisfies readonly MarketThesisMetric[];

export const services = [
  {
    title: "Strategic Market Entry",
    description:
      "We de-risk your expansion. From regulatory landscaping to consumer psychographics, we provide the \"Go/No-Go\" framework tailored to your vertical. We don't guess; we validate through proprietary on-ground intelligence spanning 12+ markets across three regions.",
    areas: [
      "Regulatory landscaping",
      "Consumer intelligence",
      "Competitor mapping",
      "Go/No-Go frameworks",
    ],
    icon: "compass",
  },
  {
    title: "Partner Sourcing & JV Structuring",
    description:
      "Finding the right local partner is 80% of the battle. Our network spans family offices, sovereign funds, and established distributors across SEA, the Gulf, Central Asia, and the Caucasus. We structure Master Franchise and Joint Venture agreements that protect your IP while ensuring local execution velocity.",
    areas: [
      "Partner sourcing",
      "Due diligence",
      "Master Franchise",
      "Joint Venture structuring",
    ],
    icon: "handshake",
  },
  {
    title: "Omnichannel & Supply Chain Engineering",
    description:
      "We transform traditional retail into agile, data-driven ecosystems. From AI-powered inventory management to hyperlocal e-commerce fulfilment, we ensure your margins survive the complexities of cross-border logistics and last-mile delivery.",
    areas: [
      "Supply chain design",
      "Inventory optimisation",
      "E-commerce fulfilment",
      "Omnichannel operations",
    ],
    icon: "network",
  },
] as const satisfies readonly Service[];

export const impactMetrics = [
  { value: "320+", label: "Retail outlets launched" },
  { value: "$2.1B", label: "Combined client revenue growth facilitated" },
  {
    value: "47%",
    label: "Average reduction in supply chain lead time for electronics clients",
  },
  { value: "12", label: "Active markets" },
] as const satisfies readonly ImpactMetric[];

export const processSteps = [
  {
    title: "Validate",
    description: "Market, consumer, regulatory and competitor intelligence.",
  },
  {
    title: "Structure",
    description: "Partner model, investment architecture and governance.",
  },
  {
    title: "Launch",
    description: "Local operations, supply chain and channel execution.",
  },
  {
    title: "Scale",
    description: "Performance optimisation and regional expansion.",
  },
] as const satisfies readonly ProcessStep[];

export const insights = [
  {
    category: "Global Retail Strategy",
    title: "The Great Rebalancing: Why Retail Diversification is No Longer Optional",
    description:
      "Why Southeast Asia, the Middle East, South Asia, Central Asia, and the Caucasus are becoming essential pillars of a resilient international retail portfolio.",
    href: "/insights/the-great-rebalancing",
    image: "/images/great-rebalancing.jpg",
    imageAlt:
      "Retail goods and digital commerce balanced between established and emerging markets",
  },
  {
    category: "Omnichannel",
    title:
      "The Rise of the Hybrid Consumer: Online-Offline Retail Convergence in Emerging Markets",
    description:
      "How smartphone adoption, changing consumer behaviour, logistics investment, and unified commerce are reshaping retail across emerging markets.",
    href: "/insights/the-rise-of-the-hybrid-consumer",
    image: "/images/hybrid-consumer.jpg",
    imageAlt:
      "Consumer moving between mobile commerce and a physical grocery store",
  },
] as const satisfies readonly InsightArticle[];
