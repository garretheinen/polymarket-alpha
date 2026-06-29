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
  featured: FeaturedOpportunity | null;
  consensus: FeaturedOpportunity[];
  alerts: DashboardAlert[];
  topWallets: DashboardWallet[];
}