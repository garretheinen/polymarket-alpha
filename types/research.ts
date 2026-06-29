import { Conviction } from "./conviction";
import { Market } from "./market";
import { Position } from "./position";
import { SignalEvent } from "./signal-event";

export interface ResearchRecord {
  id: string;

  market: Market;

  conviction: Conviction;

  timeline: SignalEvent[];

  positions: Position[];

  outcome?: {
    resolved: boolean;

    winningOutcome?: string;

    predictionCorrect?: boolean;

    roi?: number;

    resolvedAt?: string;
  };

  notes?: string[];
}