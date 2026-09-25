import type { ConvictionGrade } from "@/types/conviction";

/** Confidence fields consumed by the opportunity mapper and Hero. */
export interface Conviction {
  polyScore: ConvictionGrade;
  consensus: number;
  trackedCapital: number;
  supportingSignals: number;
  trend: string;
  confidence: number;
  updatedAt: Date;
}
