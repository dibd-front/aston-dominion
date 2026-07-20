export interface NavigationItem {
  readonly label: string;
  readonly href: `#${string}`;
}

export interface MarketFact {
  readonly value: string;
  readonly label: string;
}

export interface MarketRegion {
  readonly id: "southeast-asia" | "middle-east" | "south-asia" | "central-asia";
  readonly label: string;
  readonly summary: string;
  readonly facts: readonly MarketFact[];
  readonly locations: readonly string[];
  readonly accentLabel: string;
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

export const marketRegions = [
  {
    id: "southeast-asia",
    label: "Southeast Asia",
    summary:
      "Southeast Asia is emerging as one of the world's largest consumer corridors, combining population scale with substantial economic weight.",
    facts: [
      { value: "700M+", label: "Consumers across Southeast Asia" },
      { value: "$4T", label: "Combined Southeast Asian GDP" },
    ],
    locations: ["Jakarta"],
    accentLabel: "Consumer scale",
  },
  {
    id: "middle-east",
    label: "Middle East",
    summary:
      "The Middle East is leveraging its sovereign wealth to become a logistics and lifestyle hub, with retail expansion supported by continued market growth.",
    facts: [{ value: "7%", label: "Retail CAGR in the Middle East" }],
    locations: ["Dubai", "Riyadh"],
    accentLabel: "Retail momentum",
  },
  {
    id: "south-asia",
    label: "South Asia",
    summary:
      "South Asia is home to nearly two billion people and represents a major frontier of consumer expansion for international retail operators.",
    facts: [{ value: "Nearly 2B", label: "People across South Asia" }],
    locations: ["Mumbai"],
    accentLabel: "Demographic scale",
  },
  {
    id: "central-asia",
    label: "Central Asia & Caucasus",
    summary:
      "Central Asia and the Caucasus are opening to retail renaissance driven by rising incomes, rapid urbanisation, and digital adoption.",
    facts: [
      {
        value: "$50B+",
        label: "Kazakhstan retail turnover projected for 2026",
      },
      {
        value: "$100B+",
        label: "Combined Central Asian retail market projected for 2026",
      },
    ],
    locations: ["Almaty", "Baku", "Tbilisi"],
    accentLabel: "Emerging corridor",
  },
] as const satisfies readonly MarketRegion[];

export const services = [
  {
    title: "Strategic Market Entry",
    description:
      "We de-risk expansion through regulatory landscaping, consumer intelligence, competitive analysis, and a structured Go/No-Go framework tailored to each retail vertical.",
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
      "We identify and assess local partners, distributors, family offices, and investors, then structure Master Franchise and Joint Venture agreements designed to protect the brand and accelerate execution.",
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
      "We build resilient retail ecosystems spanning inventory management, cross-border logistics, fulfilment, last-mile delivery, and integrated online-offline commerce.",
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
