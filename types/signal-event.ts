export type SignalEventType =
  | "POSITION_OPENED"
  | "POSITION_INCREASED"
  | "POSITION_DECREASED"
  | "POSITION_CLOSED"
  | "CONVICTION_UPGRADED"
  | "CONVICTION_DOWNGRADED"
  | "NEW_CONSENSUS"
  | "CAPITAL_MILESTONE"
  | "MARKET_RESOLVED"
  | "MODEL_UPDATED";

export interface SignalEvent {
  id: string;

  marketId: string;

  traderId?: string;

  timestamp: string;

  type: SignalEventType;

  title: string;

  description: string;

  metadata?: Record<string, unknown>;
}