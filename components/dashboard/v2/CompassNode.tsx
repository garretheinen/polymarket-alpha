"use client";

import { forwardRef } from "react";
import clsx from "clsx";

interface CompassNodeProps {
  name: string;
  grade: string;
  signals: number;
  active?: boolean;
  className?: string;
  onClick?: () => void;
}

const CompassNode = forwardRef<HTMLButtonElement, CompassNodeProps>(
  (
    {
      name,
      grade,
      signals,
      active = false,
      className,
      onClick,
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type="button"
        onClick={onClick}
        className={clsx(
          "group flex w-36 flex-col items-center rounded-3xl p-3 transition-all duration-500",
          className
        )}
      >
        {/* Orb */}

        <div
          className={clsx(
            "relative flex h-18 w-18 items-center justify-center rounded-full border bg-white shadow-sm transition-all duration-300",
            active
              ? "scale-105 border-blue-500 shadow-md ring-2 ring-blue-200 ring-offset-4 ring-offset-white"
              : "border-slate-200 group-hover:scale-105 group-hover:border-blue-300"
          )}
        >
          {/* Active Glow */}

          {active && (
            <div className="absolute inset-0 scale-125 rounded-full bg-blue-500/5 blur-2xl" />
          )}

          <span className="relative text-xl font-black tracking-tight text-emerald-600">
            {grade}
          </span>
        </div>

        {/* Name */}

        <h3 className="mt-4 text-sm font-semibold tracking-tight text-slate-900">
          {name}
        </h3>

        {/* Signals */}

        <p className="mt-1 text-xs font-medium text-slate-500">
          {signals} Signals
        </p>
      </button>
    );
  }
);

CompassNode.displayName = "CompassNode";

export default CompassNode;