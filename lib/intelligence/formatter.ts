import type { Opportunity } from "@/lib/domain/opportunity";
import type { IntelligenceBrief } from "./briefing";

function formatOpportunityTitle(title: string): string {
  const spreadMatch = title.match(
    /^Spread:\s*(.+?)\s*\(([+-]?\d+(?:\.\d+)?)\):\s*(.+)$/i
  );

  if (spreadMatch) {
    const [, team, spread] = spreadMatch;

    return `${team} ${spread}`;
  }

  return title;
}

export function createIntelligenceBrief(
  opportunity: Opportunity
): IntelligenceBrief {
  return {
    masthead: "POLYSIGNAL INTELLIGENCE",

    sectionTitle: "TODAY'S TOP OPPORTUNITY",

    title: formatOpportunityTitle(opportunity.title),

    metadata: [
      {
        label: "World Cup",
      },
      {
        label: "Spain vs Brazil",
      },
      {
        label: "Resolves Today",
      },
    ],

    summary:
      "Elite conviction continues strengthening as institutional capital remains concentrated ahead of market resolution.",

    explanation:
      "Three top wallets increased exposure with minimal opposing activity. Comparable conviction profiles have historically produced a 92% win rate.",

    polyScore: opportunity.conviction.polyScore,

    verdict: "Exceptional Conviction",

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