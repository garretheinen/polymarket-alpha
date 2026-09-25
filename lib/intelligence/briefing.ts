export interface IntelligenceEvidence {
  label: string;
  value: string;
}

/** The briefing currently produced by the formatter and rendered by the Hero. */
export interface IntelligenceBrief {
  masthead: string;
  sectionTitle: string;
  title: string;
  metadata: { label: string }[];
  summary: string;
  explanation: string;
  polyScore: string;
  verdict: string;
  evidence: IntelligenceEvidence[];
}
