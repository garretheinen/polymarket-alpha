export interface Position {
  id: string;

  marketId: string;

  traderId: string;

  snapshotTime: string;

  outcome: string;

  shares: number;

  averagePrice: number;

  currentPrice: number;

  positionValue: number;

  unrealizedPnL: number;

  isOpen: boolean;
}