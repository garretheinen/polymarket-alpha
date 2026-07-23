import type { Opportunity } from "@/lib/domain/opportunity";
import type { IntelligenceBrief } from "./briefing";

export function createIntelligenceBrief(
  opportunity: Opportunity
): IntelligenceBrief {
  return {
    // Opportunity

    title: opportunity.title,

    category: opportunity.category,

    matchup: "Spain vs Brazil",

    resolution: "Resolves Today",

    // PolyScore

    polyScore: opportunity.conviction.polyScore,

    // Executive Conclusion

    headline: "Exceptional Conviction",

    summary:
      "PolySignal has identified an unusually strong convergence of elite trader conviction.",

    // Conviction Explanation
    // Placeholder until the Intelligence Engine generates this.

    explanation:
      "Three elite traders independently increased exposure during the latest snapshot while capital concentration continued strengthening. No significant opposing positions were detected, reinforcing the conviction assessment.",

    // Dynamic Evidence
    // Placeholder until the Dynamic Evidence Engine is built.

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
        label: "Historical Performance",
        value: "92%",
      },
    ],
  };
}