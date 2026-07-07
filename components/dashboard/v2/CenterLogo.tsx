"use client";

import clsx from "clsx";
import { forwardRef } from "react";

interface CenterLogoProps {
  active?: boolean;
  className?: string;
}

const CenterLogo = forwardRef<HTMLDivElement, CenterLogoProps>(
  (
    {
      active = false,
      className,
    },
    ref
  ) => {
    return (
      <div
        ref={ref}
        className={clsx(
          "relative flex h-40 w-40 items-center justify-center",
          className
        )}
      >
        {/* Organic Glow */}

        <div
          className={clsx(
            "absolute h-36 w-32 rounded-[999px] bg-blue-500/10 blur-3xl transition-all duration-700",
            active &&
              "scale-110 bg-blue-500/20"
          )}
        />

        <div
          className={clsx(
            "absolute h-28 w-36 rounded-[999px] bg-cyan-400/5 blur-[60px]",
            active &&
              "translate-x-2 -translate-y-1"
          )}
        />

        {/* Outer Ring */}

        <div className="absolute h-28 w-28 rounded-full border border-slate-200" />

        {/* Inner Ring */}

        <div className="absolute h-20 w-20 rounded-full border border-slate-300" />

        {/* Core */}

        <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-blue-200 bg-white shadow-sm">

          <div className="h-3 w-3 rounded-full bg-blue-600" />

        </div>

        {/* Brand */}

        <div className="absolute -bottom-14 text-center">

          <div className="text-base font-semibold tracking-tight text-slate-900">
            PolySignal
          </div>

          <div className="mt-1 text-xs uppercase tracking-[0.22em] text-slate-500">
            Intelligence Engine
          </div>

          <div className="mt-4">

            <div className="text-xs uppercase tracking-[0.18em] text-slate-400">
              Analyzing
            </div>

            <div className="mt-1 text-lg font-bold tracking-tight text-slate-800">
              486 Markets
            </div>

          </div>

        </div>

      </div>
    );
  }
);

CenterLogo.displayName = "CenterLogo";

export default CenterLogo;