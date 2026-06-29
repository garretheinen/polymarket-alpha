import { Conviction } from "@/types/conviction";
import { Market } from "@/types/market";
import { ResearchRecord } from "@/types/research";

export const researchEngine = {
  build(
    markets: Market[],
    convictions: Conviction[]
  ): ResearchRecord[] {
    return markets.map((market) => {
      const conviction = convictions.find(
        (c) => c.marketId === market.id
      );

      return {
        id: market.id,

        market,

        conviction: conviction!,

        timeline: [],

        positions: [],

        notes: [],
      };
    });
  },
};