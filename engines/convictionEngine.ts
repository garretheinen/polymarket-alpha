import { Conviction } from "@/types/conviction";
import { Market } from "@/types/market";

export const convictionEngine = {
  calculate(markets: Market[]): Conviction[] {
    return markets.map((market) => ({
      id: market.id,
      marketId: market.id,
      timestamp: new Date().toISOString(),

      grade: "B",

      score: 500,

      confidence: 50,

      modelVersion: "1.0.0",

      insight:
        "Conviction has not yet been calculated.",

      factors: {
        traderAgreement: 0,
        traderQuality: 0,
        capitalCommitment: 0,
        momentum: 0,
        historicalSimilarity: 0,
        marketLiquidity: 0,
      },
    }));
  },
};