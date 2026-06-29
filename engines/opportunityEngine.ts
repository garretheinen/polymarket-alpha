import { Conviction } from "@/types/conviction";

export const opportunityEngine = {
  getTopOpportunity(convictions: Conviction[]) {
    if (convictions.length === 0) {
      return null;
    }

    return [...convictions].sort(
      (a, b) => b.score - a.score
    )[0];
  },
};