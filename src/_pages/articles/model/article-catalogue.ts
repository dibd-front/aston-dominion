import type { ArticleMeta } from "./article";

export const articleCatalogue = [
  {
    id: "the-great-rebalancing",
    number: "01",
    category: "Global Retail Strategy",
    title: "The Great Rebalancing: Why Retail Diversification is No Longer Optional",
    description:
      "Why Southeast Asia, the Middle East, South Asia, Central Asia, and the Caucasus are becoming essential pillars of a resilient international retail portfolio.",
    fileName: "the-great-rebalancing.md",
    image: "/images/aston1.jpg",
    imageAlt:
      "Retail goods and digital commerce balanced between established and emerging markets",
  },
  {
    id: "the-rise-of-the-hybrid-consumer",
    number: "02",
    category: "Omnichannel",
    title:
      "The Rise of the Hybrid Consumer: Online-Offline Retail Convergence in Emerging Markets",
    description:
      "How smartphone adoption, changing consumer behaviour, logistics investment, and unified commerce are reshaping retail across emerging markets.",
    fileName: "the-rise-of-the-hybrid-consumer.md",
    image: "/images/aston2.jpg",
    imageAlt:
      "Consumer moving between mobile commerce and a physical grocery store",
  },
  {
    id: "the-partner-economy",
    number: "03",
    category: "Market Entry",
    title: "The Partner Economy: Why Joint Ventures Trump Greenfield Investments",
    description:
      "Why local knowledge, regulatory access, and aligned incentives make partnership-led entry more resilient than going it alone.",
    fileName: "the-partner-economy.md",
    image: "/images/aston3.png",
    imageAlt:
      "The Partner Economy",
  },
  {
    id: "navigating-the-goldilocks-zone",
    number: "04",
    category: "Risk & Capital",
    title:
      "Navigating the Goldilocks Zone: Managing Currency, Inflation, and Interest Rate Volatility",
    description:
      "A practical framework for natural hedging, pricing power, and capital deployment across volatile growth markets.",
    fileName: "navigating-the-goldilocks-zone.md",
    image: "/images/aston4.png",
    imageAlt:
      "Navigating the Goldilocks Zone",
  },
  {
    id: "central-and-south-asian-consumer",
    number: "05",
    category: "Consumer Markets",
    title: "The Central Asian & South Asian Consumer: Understanding the New Frontiers",
    description:
      "A closer look at the consumer behaviours, spending patterns, and category shifts shaping Kazakhstan, India, Azerbaijan, and Georgia.",
    fileName: "central-and-south-asian-consumer.md",
    image: "/images/aston5.png",
    imageAlt:
      "The Central Asian & South Asian Consumer",
  },
  {
    id: "digital-commerce-in-emerging-markets",
    number: "06",
    category: "Digital Commerce",
    title: "Digital Commerce in Emerging Markets: Winning the Omnichannel Battle",
    description:
      "How retailers can unify customer data, inventory, fulfilment, and marketplace channels across rapidly digitising regions.",
    fileName: "digital-commerce-in-emerging-markets.md",
    image: "/images/aston6.png",
    imageAlt:
      "Digital Commerce in Emerging Markets",
  },
  {
    id: "azerbaijan-and-georgia",
    number: "07",
    category: "The Caucasus",
    title: "Azerbaijan & Georgia: The Untapped Caucasus Corridor",
    description:
      "The hub-and-spoke opportunity connecting energy-funded consumer growth in Azerbaijan with Georgia's logistics advantage.",
    fileName: "azerbaijan-and-georgia.md",
    image: "/images/aston7.png",
    imageAlt:
      "Azerbaijan & Georgia",
  },
  {
    id: "south-asia-retail-frontier",
    number: "08",
    category: "South Asia",
    title: "South Asia: The Next Trillion-Dollar Retail Frontier",
    description:
      "The scale, digital acceleration, regional diversity, and entry considerations defining the next decade of South Asian retail.",
    fileName: "south-asia-retail-frontier.md",
    image: "/images/aston8.png",
    imageAlt:
      "South Asia: The Next Trillion-Dollar Retail Frontier",
  },
] as const satisfies readonly ArticleMeta[];
