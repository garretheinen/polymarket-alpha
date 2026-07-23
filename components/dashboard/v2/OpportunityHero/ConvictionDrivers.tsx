"use client";

import type { Conviction } from "@/lib/domain/conviction";

interface ConvictionDriversProps {
  conviction: Conviction;
}

export default function ConvictionDrivers({
  conviction,
}: ConvictionDriversProps) {
  return (
    <section>

      <p className="text-xs font-bold uppercase tracking-[0.22em] text-slate-500">
        Conviction Drivers
      </p>

      <div className="mt-8 divide-y divide-slate-100 rounded-2xl border border-slate-100 bg-slate-50/40">

        <DriverRow
          label="Consensus"
          value="High Agreement"
          state="excellent"
        />

        <DriverRow
          label="Capital Commitment"
          value="Strong Commitment"
          state="strong"
        />

        <DriverRow
          label="Supporting Intelligence"
          value="Broad Support"
          state="healthy"
        />

        <DriverRow
          label="Contradictory Evidence"
          value="Minimal"
          state="neutral"
        />

      </div>

    </section>
  );
}

interface DriverRowProps {
  label: string;
  value: string;

  state:
    | "excellent"
    | "strong"
    | "healthy"
    | "neutral";
}

function DriverRow({
  label,
  value,
  state,
}: DriverRowProps) {
  return (
    <div className="flex items-center justify-between px-6 py-5">

      <div>

        <p className="text-sm font-medium text-slate-900">
          {label}
        </p>

      </div>

      <span
        className={`
          rounded-full
          px-3
          py-1
          text-sm
          font-semibold

          ${
            state === "excellent"
              ? "bg-emerald-50 text-emerald-700"

            : state === "strong"
              ? "bg-green-50 text-green-700"

            : state === "healthy"
              ? "bg-blue-50 text-blue-700"

            : "bg-slate-100 text-slate-600"
          }
        `}
      >
        {value}
      </span>

    </div>
  );
}