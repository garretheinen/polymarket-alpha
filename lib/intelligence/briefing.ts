export interface IntelligenceEvidence {
  label: string;
  value: string;
}

export interface IntelligenceBrief {
  // Opportunity

  title: string;

  category: string;

  matchup: string;

  resolution: string;

  // PolyScore

  polyScore: string;

  rating: string;

  // Executive Conclusion

  headline: string;

  summary: string;

  // Conviction Explanation

  explanation: string;

  // Dynamic Evidence

  evidence: IntelligenceEvidence[];
}