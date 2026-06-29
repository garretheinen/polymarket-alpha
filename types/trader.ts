export interface Trader {
  id: string;

  wallet: string;

  displayName: string;

  joinedTracking: string;

  isActive: boolean;

  overallAccuracy: number;

  averageROI: number;

  totalSignals: number;

  resolvedSignals: number;

  currentRating: number;

  favoriteCategory?:
    | "sports"
    | "politics"
    | "crypto"
    | "economics"
    | "other";
}