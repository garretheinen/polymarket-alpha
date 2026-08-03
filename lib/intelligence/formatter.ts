import type { Opportunity } from "@/lib/domain/opportunity";
import type { IntelligenceBrief } from "./briefing";


  export function createIntelligenceBrief(
  opportunity: Opportunity
): IntelligenceBrief {
  return {
    title: "TEST",

    metadata: [
      {
        icon: "🔥",
        label: "IF YOU SEE THIS THE NEW FORMATTER IS RUNNING",
      },
    ],

    polyScore: "A+",

    headline: "TEST",

    summary: "TEST",

    explanation: "TEST",

    evidence: [
      {
        label: "TEST",
        value: "123",
      },
    ],
  };
}