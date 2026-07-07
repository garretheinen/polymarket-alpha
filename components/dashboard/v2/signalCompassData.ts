export interface SignalCompassCategory {
  id:
  | "politics"
  | "sports"
  | "crypto"
  | "weather"
  | "entertainment"
  | "macro"
  | "ai"
  | "economy";
  name: string;
  grade: string;
  status: string;
  summary: string;
  strength: number;
  signals: number;
  capital: string;
  topOpportunity: string;
  markets: number;
  position: {
    top?: string;
    bottom?: string;
    left?: string;
    right?: string;
  };
}

export const signalCompassData: SignalCompassCategory[] = [
  {
    id: "politics",
    name: "Politics",
    grade: "A",
    status: "Building Momentum",
    summary:
      "Capital concentration continues increasing ahead of major election events as elite traders maintain above-average conviction.",
    strength: 89,
    signals: 12,
    capital: "$8.7M",
    topOpportunity: "2028 Election",
    markets: 42,
    position: {
      top: "2%",
      left: "42%",
    },
  },

  {
    id: "sports",
    name: "Sports",
    grade: "A+",
    status: "High Conviction",
    summary:
      "Elite trader conviction continues strengthening across international football markets with concentrated capital entering high-confidence opportunities.",
    strength: 96,
    signals: 18,
    capital: "$14.7M",
    topOpportunity: "Spain -2.5",
    markets: 118,
    position: {
      top: "30%",
      right: "4%",
    },
  },

  {
    id: "crypto",
    name: "Crypto",
    grade: "A",
    status: "Building Momentum",
    summary:
      "Institutional-sized positions continue rotating toward Bitcoin while conviction across alternative assets remains mixed.",
    strength: 87,
    signals: 16,
    capital: "$11.3M",
    topOpportunity: "BTC > $150k",
    markets: 73,
    position: {
      bottom: "22%",
      right: "16%",
    },
  },

  {
    id: "ai",
    name: "AI",
    grade: "B+",
    status: "Emerging Opportunity",
    summary:
      "Early conviction is forming around AI infrastructure and semiconductor-related prediction markets.",
    strength: 79,
    signals: 8,
    capital: "$4.6M",
    topOpportunity: "OpenAI Revenue",
    markets: 31,
    position: {
      bottom: "18%",
      left: "24%",
    },
  },

  {
    id: "economy",
    name: "Economy",
    grade: "A-",
    status: "High Conviction",
    summary:
      "Macro positioning remains elevated as traders continue pricing interest rate expectations and inflation data.",
    strength: 91,
    signals: 10,
    capital: "$9.2M",
    topOpportunity: "Fed September Cut",
    markets: 54,
    position: {
      top: "30%",
      left: "4%",
    },
  },

  {
    id: "macro",
    name: "Macro",
    grade: "A-",
    status: "Building Momentum",
    summary:
      "Cross-market positioning continues strengthening across global macro themes with steady institutional participation.",
    strength: 85,
    signals: 9,
    capital: "$6.8M",
    topOpportunity: "US CPI",
    markets: 39,
    position: {
      bottom: "8%",
      left: "36%",
    },
  },

  {
    id: "weather",
    name: "Weather",
    grade: "C+",
    status: "Low Confidence",
    summary:
      "Conviction remains limited as weather-driven markets continue showing fragmented positioning.",
    strength: 61,
    signals: 5,
    capital: "$1.9M",
    topOpportunity: "Atlantic Hurricane Season",
    markets: 17,
    position: {
      bottom: "12%",
      right: "38%",
    },
  },

  {
    id: "entertainment",
    name: "Entertainment",
    grade: "B",
    status: "Mixed Signals",
    summary:
      "Entertainment markets remain active, although capital allocation is dispersed across multiple competing narratives.",
    strength: 73,
    signals: 6,
    capital: "$3.1M",
    topOpportunity: "Best Picture Winner",
    markets: 24,
    position: {
      bottom: "0%",
      left: "43%",
    },
  },
];