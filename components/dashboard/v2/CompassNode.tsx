"use client";

import {
  forwardRef,
  type Ref,
} from "react";

import clsx from "clsx";

import type { SignalCompassState } from "./signalCompassState";

interface CompassNodeProps {
  name: string;
  grade: string;
  signals: number;

  interactionState: SignalCompassState;

  className?: string;

  orbRef?: Ref<HTMLDivElement>;

  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const CompassNode = forwardRef<
  HTMLButtonElement,
  CompassNodeProps
>(
  (
    {
      name,
      grade,
      signals,
      interactionState,
      className,
      orbRef,
      onClick,
      onMouseEnter,
      onMouseLeave,
    },
    ref
  ) => {
    const focused =
      interactionState === "focused";

    const observed =
      interactionState === "observed";

    const updated =
      interactionState === "updated";

    const critical =
      interactionState === "critical";

    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={clsx(
          "group flex w-36 cursor-pointer flex-col items-center rounded-3xl p-3 transition-all duration-200 ease-out",
          className
        )}
      >
        {/* Orb */}

        <div
          ref={orbRef}
          className={clsx(
            "relative flex h-18 w-18 items-center justify-center rounded-full border bg-white transition-all duration-200 ease-out",

            focused
              ? "scale-[1.04] border-blue-500 shadow-[0_8px_20px_rgba(37,99,235,.10)] ring-1 ring-blue-300 ring-offset-4 ring-offset-white"
              : observed
                ? "scale-[1.015] border-blue-300 shadow-sm"
                : updated
                  ? "border-blue-200 shadow-sm"
                  : critical
                    ? "border-blue-400 shadow-sm"
                    : "border-slate-200/80 shadow-[0_3px_10px_rgba(15,23,42,.04)]"
          )}
        >
          {/* Focus Glow */}

          {focused && (
            <div className="absolute inset-0 scale-[1.18] rounded-full bg-blue-500/[0.035] blur-xl" />
          )}

          {/* Updated Resonance */}

          {updated && (
            <div className="absolute inset-0 rounded-full border border-blue-300/30" />
          )}

          {/* Critical */}

          {critical && (
            <div className="absolute inset-0 rounded-full bg-blue-500/[0.03] blur-lg" />
          )}

          {/* Grade */}

          <span
            className={clsx(
              "relative text-xl font-extrabold tracking-tight transition-colors duration-200",

              focused
                ? "text-emerald-500"
                : observed
                  ? "text-emerald-500"
                  : updated
                    ? "text-emerald-500"
                    : critical
                      ? "text-emerald-500"
                      : "text-emerald-600"
            )}
          >
            {grade}
          </span>
        </div>

        {/* Name */}

        <h3
          className={clsx(
            "mt-3 text-sm font-semibold tracking-tight transition-colors duration-200",

            focused || observed || updated
              ? "text-slate-950"
              : "text-slate-800"
          )}
        >
          {name}
        </h3>

        {/* Signals */}

        <p
          className={clsx(
            "mt-0.5 text-xs font-medium transition-colors duration-200",

            focused || observed || updated
              ? "text-slate-500"
              : "text-slate-400"
          )}
        >
          {signals} Signals
        </p>
      </button>
    );
  }
);

CompassNode.displayName = "CompassNode";

export default CompassNode;