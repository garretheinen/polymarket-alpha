/**
 * PolySignal Mapper
 *
 * Converts external data into
 * PolySignal Opportunity domain objects.
 */

import type { Opportunity } from "@/lib/domain/opportunity";

/**
 * Temporary Sprint 3 API shape.
 *
 * This will eventually become
 * the real API response.
 */
export interface OpportunityResponse {
  id: string;

  title: string;

  category: Opportunity["category"];

  narrative: string;

  polyScore: Opportunity["conviction"]["polyScore"];

  consensus: number;

  trackedCapital: number;

  supportingSignals: number;

  convictionTrend: Opportunity["conviction"]["trend"];
}

/**
 * Maps an API response into
 * a PolySignal Opportunity.
 */
export function mapOpportunity(
  response: OpportunityResponse
): Opportunity {
  return {
    id: response.id,

    title: response.title,

    category: response.category,

    intelligence: {
      id: response.id,

      narrative: response.narrative,

      rationale: "",

      evidence: [],

      updatedAt: new Date(),
    },

    conviction: {
      polyScore: response.polyScore,

      consensus: response.consensus,

      trackedCapital: response.trackedCapital,

      supportingSignals: response.supportingSignals,

      trend: response.convictionTrend,

      confidence: response.consensus,

      updatedAt: new Date(),
    },

    lifecycle: {
      stage: "active",

      health: "stable",

      createdAt: new Date(),

      updatedAt: new Date(),

      events: [],
    },
  };
}