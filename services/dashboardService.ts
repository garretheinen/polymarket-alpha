import { getMarkets } from "@/repositories/marketRepository";
import { convictionEngine } from "@/engines/convictionEngine";
import { opportunityEngine } from "@/engines/opportunityEngine";
import { researchEngine } from "@/engines/researchEngine";

export const dashboardService = {
  async getDashboard() {
    const markets = await getMarkets();

    const convictions =
      convictionEngine.calculate(markets);

    const research =
      researchEngine.build(
        markets,
        convictions
      );

    const featured =
      opportunityEngine.getTopOpportunity(
        convictions
      );

    return {
      featured,
      convictions,
      research,
      markets,
    };
  },
};