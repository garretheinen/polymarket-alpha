/**
 * PolySignal Domain
 *
 * A Signal represents the smallest meaningful market observation
 * that can contribute to intelligence.
 *
 * Signals contain observations—not conclusions.
 */

export type SignalCategory =
  | "capital"
  | "consensus"
  | "volume"
  | "liquidity"
  | "price"
  | "news"
  | "trader"
  | "market";

/**
 * Current direction of the observation.
 */
export type SignalDirection =
  | "increasing"
  | "decreasing"
  | "stable"
  | "new";

/**
 * Individual market observation.
 */
export interface Signal {
  id: string;

  category: SignalCategory;

  title: string;

  description: string;

  direction: SignalDirection;

  observedAt: Date;

  source: string;

  confidence: number;
}