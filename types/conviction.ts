export type ConvictionGrade =
  | "A+"
  | "A"
  | "B"
  | "C"
  | "D";

export interface ConvictionFactors {
  traderAgreement: number;

  traderQuality: number;

  capitalCommitment: number;

  momentum: number;

  historicalSimilarity: number;

  marketLiquidity: number;
}

export interface Conviction {
  id: string;

  marketId: string;

  timestamp: string;

  grade: ConvictionGrade;

  score: number;

  confidence: number;

  factors: ConvictionFactors;

  modelVersion: string;

  insight: string;
}