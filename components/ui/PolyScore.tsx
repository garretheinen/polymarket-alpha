"use client";

import clsx from "clsx";

interface PolyScoreProps {
  grade: string;
  score: number;
  percentile: number;
  className?: string;
}

export default function PolyScore({
  grade,
  score,
  percentile,
  className,
}: PolyScoreProps) {
  return (
    <div
      className={clsx(
        "flex flex-col items-center justify-center rounded-3xl border border-slate-200 bg-white px-10 py-8 shadow-sm transition-all duration-200",
        className
      )}
    >
      <div className="text-7xl font-black tracking-tight text-emerald-600">
        {grade}
      </div>

      <p className="mt-2 text-sm font-semibold uppercase tracking-[0.22em] text-slate-500">
        PolyScore™
      </p>

      <div className="mt-5 text-5xl font-bold tracking-tight text-slate-900">
        {score}
      </div>

      <p className="mt-2 text-sm text-slate-500">
        Top {percentile}% of Signals
      </p>
    </div>
  );
}