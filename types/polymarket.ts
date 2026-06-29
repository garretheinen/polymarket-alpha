export interface PolymarketPosition {
  proxyWallet: string;

  asset: string;
  conditionId: string;

  size: number;

  avgPrice: number;

  initialValue: number;
  currentValue: number;

  cashPnl: number;
  percentPnl: number;

  totalBought: number;

  realizedPnl: number;
  percentRealizedPnl: number;

  curPrice: number;

  redeemable: boolean;
  mergeable: boolean;

  title: string;
  slug: string;

  icon: string;

  eventId: string;
  eventSlug: string;

  outcome: string;
  outcomeIndex: number;

  oppositeOutcome: string;
  oppositeAsset: string;

  endDate: string;

  negativeRisk: boolean;
}

export interface PolymarketWalletSnapshot {
  name: string;

  address: string;

  positions: PolymarketPosition[];
}

export interface PolymarketSnapshot {
  savedAt: string;

  walletsTracked: number;

  snapshots: PolymarketWalletSnapshot[];
}