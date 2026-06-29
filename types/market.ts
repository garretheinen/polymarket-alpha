export type MarketStatus =
  | "active"
  | "resolved"
  | "closed";

export type MarketCategory =
  | "sports"
  | "politics"
  | "crypto"
  | "economics"
  | "other";

export interface Market {
  id: string;

  title: string;

  slug: string;

  category: MarketCategory;

  status: MarketStatus;

  createdAt: string;

  resolvedAt?: string;

  winningOutcome?: string;
}