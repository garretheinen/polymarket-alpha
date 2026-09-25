import type { Conviction } from "@/lib/domain/conviction";

/** Featured payload returned by /api/dashboard, distinct from consensus rows. */
export interface DashboardFeaturedOpportunity {
  title: string;
  category: string;
  intelligence: { narrative: string };
  conviction: Pick<
    Conviction,
    "polyScore" | "consensus" | "trackedCapital" | "supportingSignals"
  >;
}

export interface DashboardStats {
  walletsTracked: number;
  totalPositions: number;
  snapshotTime: string;
  alertsGenerated: number;
}

export interface FeaturedOpportunity {
  market: string;
  outcome: string;
  wallets: number;
  capital: number;
  score: number;
  confidence: "Weak" | "Moderate" | "Strong";
  featured: boolean;
}

export interface DashboardAlert {
  wallet: string;
  type:
    | "NEW_POSITION"
    | "INCREASED_POSITION"
    | "DECREASED_POSITION"
    | "CLOSED_POSITION";
  market: string;
  outcome: string;
  size?: number;
  change?: number;
}

export interface DashboardWallet {
  name: string;
  address: string;
  positions: number;
  capital: number;
}

export interface DashboardResponse {
  stats: DashboardStats;
  featured: DashboardFeaturedOpportunity | null;
  consensus: FeaturedOpportunity[];
  alerts: DashboardAlert[];
  topWallets: DashboardWallet[];
}