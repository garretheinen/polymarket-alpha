/**
 * PolySignal Domain
 *
 * Lifecycle represents the evolution of an intelligence object over time.
 *
 * A lifecycle is objective.
 * It describes what has happened—not what the UI should display.
 */

/**
 * Where an opportunity currently exists
 * within its lifecycle.
 */
export type OpportunityLifecycleStage =
  | "detected"
  | "building"
  | "confirmed"
  | "active"
  | "tracking"
  | "resolved"
  | "archived";

/**
 * Current health of the opportunity thesis.
 *
 * This is independent from lifecycle stage.
 */
export type LifecycleHealth =
  | "strengthening"
  | "stable"
  | "weakening"
  | "invalidated";

/**
 * Individual immutable event
 * within the opportunity timeline.
 */
export interface LifecycleEvent {
  id: string;

  occurredAt: Date;

  title: string;

  description: string;
}

/**
 * Represents the complete lifecycle
 * of an opportunity.
 */
export interface OpportunityLifecycle {
  stage: OpportunityLifecycleStage;

  health: LifecycleHealth;

  createdAt: Date;

  updatedAt: Date;

  resolvedAt?: Date;

  archivedAt?: Date;

  events: LifecycleEvent[];
}