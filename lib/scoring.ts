export interface ConsensusTrade {
  market: string;
  outcome: string;
  wallets: number;
  capital: number;
  traders: string[];
}

export interface ConsensusScore {
  score: number;
  confidence: "Weak" | "Moderate" | "Strong";
  featured: boolean;
}

export type RankedConsensusTrade =
  ConsensusTrade & ConsensusScore;

export function scoreConsensus(
  trade: ConsensusTrade
): ConsensusScore {
  // Consensus (0–500)
  const consensusScore = trade.wallets * 100;

  // Capital (0–500)
  const capitalScore = Math.min(
    Math.round(trade.capital / 10000),
    500
  );

  const score = consensusScore + capitalScore;

  let confidence: ConsensusScore["confidence"] = "Weak";

  if (score >= 700) {
    confidence = "Strong";
  } else if (score >= 400) {
    confidence = "Moderate";
  }

  return {
    score,
    confidence,
    featured: confidence === "Strong" && trade.wallets >= 2,
  };
}