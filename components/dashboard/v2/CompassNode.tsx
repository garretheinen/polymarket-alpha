"use client";

import { forwardRef } from "react";
import clsx from "clsx";

interface CompassNodeProps {
  name: string;
  grade: string;
  signals: number;

  active?: boolean;
  observed?: boolean;

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

      active = false,
      observed = false,

      className,

      onClick,
      onMouseEnter,
      onMouseLeave,
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        className={clsx(
          "flex w-36 flex-col items-center rounded-3xl p-3 transition-all duration-300 ease-out cursor-pointer",
          className
        )}
      >
        {/* Orb */}

        <div
          className={clsx(
            "relative flex h-18 w-18 items-center justify-center rounded-full border bg-white transition-all duration-300 ease-out",

            active
              ? "scale-105 border-blue-500 shadow-lg ring-2 ring-blue-200 ring-offset-4 ring-offset-white"

              : observed
              ? "scale-[1.02] border-blue-300 shadow-md"

              : "border-slate-200 shadow-sm"
          )}
        >
          {/* Active Glow */}

          {active && (
            <div className="absolute inset-0 scale-125 rounded-full bg-blue-500/5 blur-2xl" />
          )}

          {/* Grade */}

          <span
            className={clsx(
              "relative text-xl font-black tracking-tight transition-all duration-300",

              active
                ? "text-emerald-500"

                : observed
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
            "mt-4 text-sm font-semibold tracking-tight transition-colors duration-300",

            active || observed
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

            active || observed
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