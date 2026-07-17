export type SignalCompassState =
  | "idle"
  | "observed"
  | "focused"
  | "updated"
  | "critical";

export interface SignalCompassStateOptions {
  observed: boolean;
  focused: boolean;

  hasUpdate?: boolean;
  critical?: boolean;
}

export function getSignalCompassState({
  observed,
  focused,
  hasUpdate = false,
  critical = false,
}: SignalCompassStateOptions): SignalCompassState {
  //
  // Highest priority
  //

  if (critical) {
    return "critical";
  }

  //
  // Intelligence changed
  //

  if (hasUpdate) {
    return "updated";
  }

  //
  // User interaction
  //

  if (observed) {
    return "observed";
  }

  if (focused) {
    return "focused";
  }

  //
  // Default
  //

  return "idle";
}