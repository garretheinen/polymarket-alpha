"use client";

import { forwardRef } from "react";
import clsx from "clsx";

import { SignalCompassState } from "./signalCompassState";

interface CompassNodeProps {
  name: string;
  grade: string;
  signals: number;

  interactionState: SignalCompassState;

  className?: string;

  onClick?: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

const CompassNode = forwardRef<HTMLButtonElement, CompassNodeProps>(
  (
    {
      name,
      grade,
      signals,

      interactionState,

      className,

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
          "group flex w-36 flex-col items-center rounded-3xl p-3 transition-all duration-300 ease-out cursor-pointer",
          className
        )}
      >
        {/* Orb */}

        <div
          className={clsx(
            "relative flex h-18 w-18 items-center justify-center rounded-full border bg-white transition-all duration-300 ease-out",

            focused
              ? "scale-105 border-blue-500 shadow-lg ring-2 ring-blue-200 ring-offset-4 ring-offset-white"
              : observed
              ? "scale-[1.02] border-blue-300 shadow-md"
              : updated
              ? "border-blue-200 shadow-md"
              : critical
              ? "border-blue-500 shadow-lg"
              : "border-slate-200 shadow-sm"
          )}
        >
          {/* Focus Glow */}

          {focused && (
            <div className="absolute inset-0 scale-125 rounded-full bg-blue-500/5 blur-2xl" />
          )}

          {/* Reserved for Updated Resonance */}

          {updated && (
            <div className="absolute inset-0 rounded-full border border-blue-300/40" />
          )}

          {/* Reserved for Critical */}

          {critical && (
            <div className="absolute inset-0 rounded-full bg-blue-500/5 blur-xl" />
          )}

          {/* Grade */}

          <span
            className={clsx(
              "relative text-xl font-black tracking-tight transition-all duration-300",

              focused
                ? "text-emerald-500"
                : observed
                ? "text-emerald-500"
                : updated
                ? "text-emerald-500"
                : critical
                ? "text-emerald-400"
                : "text-emerald-600"
            )}
          >
            {grade}
          </span>
        </div>

        {/* Name */}

        <h3
          className={clsx(
            "mt-4 text-sm font-semibold tracking-tight transition-colors duration-300",

            focused || observed
              ? "text-slate-950"
              : updated
              ? "text-slate-950"
              : "text-slate-900"
          )}
        >
          {name}
        </h3>

        {/* Signals */}

        <p
          className={clsx(
            "mt-1 text-xs font-medium transition-colors duration-300",

            focused || observed
              ? "text-slate-600"
              : updated
              ? "text-slate-600"
              : "text-slate-500"
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