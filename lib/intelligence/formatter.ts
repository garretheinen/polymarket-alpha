import type { Opportunity } from "@/lib/domain/opportunity";
import type { IntelligenceBrief } from "./briefing";

export function createIntelligenceBrief(
  opportunity: Opportunity
): IntelligenceBrief {
  return {
    // Brand

    masthead: "POLYSIGNAL INTELLIGENCE",

    sectionTitle: "TODAY'S TOP OPPORTUNITY",

    // Opportunity

    title: opportunity.title,

    metadata: [
      {
        label: opportunity.category,
      },
      {
        label: "Spain vs Brazil",
      },
      {
        label: "Resolves Today",
      },
    ],

    // Executive Brief

    summary:
      "Elite conviction continues strengthening as institutional capital remains concentrated ahead of market resolution.",

    explanation:
      "Three top wallets increased exposure with minimal opposing activity. Comparable conviction profiles have historically produced a 92% win rate.",

    // Verdict

    polyScore: opportunity.conviction.polyScore,

    verdict: "Exceptional Conviction",

    // Evidence

    evidence: [
      {
        label: "Consensus",
        value: `${opportunity.conviction.consensus}%`,
      },
      {
        label: "Tracked Capital",
        value: `$${opportunity.conviction.trackedCapital.toLocaleString()}`,
      },
      {
        label: "Historical Win Rate",
        value: "92%",
      },
    ],
  };
}