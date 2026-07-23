/**
 * PolySignal Domain
 *
 * An Opportunity represents the highest-value intelligence
 * currently deserving the user's attention.
 *
 * It does not contain raw market data.
 * It composes the domain objects that explain why the
 * opportunity exists and how it should be monitored.
 */

import type { Conviction } from "./conviction";
import type { Intelligence } from "./intelligence";
import type { OpportunityLifecycle } from "./lifecycle";

/**
 * Primary market category.
 *
 * These should remain aligned with the
 * Signal Compass categories.
 */
export type OpportunityCategory =
  | "politics"
  | "sports"
  | "crypto"
  | "weather"
  | "entertainment"
  | "macro"
  | "ai"
  | "economy";

/**
 * Current opportunity.
 */
export interface Opportunity {
  /**
   * Unique identifier.
   */
  id: string;

  /**
   * User-facing title.
   *
   * Example:
   * Spain -2.5
   */
  title: string;

  /**
   * Market category.
   */
  category: OpportunityCategory;

  /**
   * Explainable understanding of
   * why this opportunity exists.
   */
  intelligence: Intelligence;

  /**
   * Quantified confidence behind
   * the intelligence.
   */
  conviction: Conviction;

  /**
   * Current lifecycle and history.
   */
  lifecycle: OpportunityLifecycle;
}