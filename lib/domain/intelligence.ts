/**
 * PolySignal Domain
 *
 * Intelligence represents PolySignal's explainable understanding
 * of a market based on curated evidence.
 *
 * Intelligence interprets evidence.
 * It does not score confidence or rank opportunities.
 */

import type { Evidence } from "./evidence";

/**
 * Explainable understanding derived from evidence.
 */
export interface Intelligence {
  /**
   * Unique intelligence assessment.
   */
  id: string;

  /**
   * Executive explanation presented to the user.
   *
   * Example:
   * "Elite capital has steadily increased conviction
   * over the last 48 hours..."
   */
  narrative: string;

  /**
   * Human-readable reasoning explaining
   * why this narrative exists.
   *
   * This eventually powers the
   * "Conviction Drivers" section.
   */
  rationale: string;

  /**
   * Curated evidence supporting
   * this intelligence assessment.
   */
  evidence: Evidence[];

  /**
   * Last time the intelligence
   * assessment was regenerated.
   */
  updatedAt: Date;
}