"use client";

import { ArrowRight, TrendingUp, Users, DollarSign, Target } from "lucide-react";
import type { FeaturedOpportunity } from "@/types/dashboard";

interface OpportunityHeroProps {
  opportunity: FeaturedOpportunity | null;
}

function formatCurrency(value: number) {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }

  if (value >= 1_000) {
    return `$${(value / 1_000).toFixed(1)}K`;
  }

  return `$${value.toLocaleString()}`;
}

export default function OpportunityHero({
  opportunity,
}: OpportunityHeroProps) {
  if (!opportunity) {
    return (
      <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">
        <h2 className="text-xl font-semibold text-white">
          No Live Opportunity
        </h2>

        <p className="mt-2 text-zinc-400">
          PolySignal couldn't identify a qualifying opportunity.
        </p>
      </section>
    );
  }

  // Demo values until backend calculates these
  const polyScore = "A+";
  const roi = "+18.4%";
  const accuracy = "91.2%";

  return (
    <section className="overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900">
      <div className="flex items-start justify-between border-b border-zinc-800 px-8 py-7">
        <div>
          <div className="flex items-center gap-2">
            <span className="h-2.5 w-2.5 rounded-full bg-emerald-500" />

            <span className="text-xs font-semibold uppercase tracking-[0.25em] text-emerald-400">
              Live Opportunity
            </span>
          </div>

          <h1 className="mt-5 text-4xl font-bold tracking-tight text-white">
            {opportunity.market}
          </h1>

          <p className="mt-2 text-xl text-zinc-300">
            {opportunity.outcome}
          </p>

          <p className="mt-6 max-w-2xl text-base leading-7 text-zinc-400">
            Elite traders are showing exceptional alignment with unusually
            strong conviction. Capital allocation continues to increase,
            indicating sustained confidence rather than short-term momentum.
          </p>
        </div>

        <div className="rounded-3xl border border-blue-500/30 bg-blue-500/10 px-8 py-6 text-center">
          <div className="text-xs font-semibold uppercase tracking-[0.25em] text-blue-400">
            PolyScore™
          </div>

          <div className="mt-3 text-5xl font-bold text-white">
            {polyScore}
          </div>

          <div className="mt-2 text-sm text-blue-300">
            Top 2% of signals
          </div>
        </div>
      </div>

      <div className="grid grid-cols-4 divide-x divide-zinc-800">
        <Metric
          icon={<TrendingUp size={18} />}
          label="ROI"
          value={roi}
        />

        <Metric
          icon={<Target size={18} />}
          label="Accuracy"
          value={accuracy}
        />

        <Metric
          icon={<Users size={18} />}
          label="Conviction"
          value={String(opportunity.score)}
        />

        <Metric
          icon={<DollarSign size={18} />}
          label="Capital"
          value={formatCurrency(opportunity.capital)}
        />
      </div>

      <div className="flex items-center justify-between border-t border-zinc-800 px-8 py-6">
        <div className="flex items-center gap-8 text-sm text-zinc-400">
          <span>
            <strong className="text-white">
              {opportunity.wallets}
            </strong>{" "}
            Elite Wallets
          </span>

          <span>Updated moments ago</span>
        </div>

        <button className="group flex items-center gap-2 font-medium text-blue-400 transition hover:text-blue-300">
          View Analysis

          <ArrowRight
            size={16}
            className="transition group-hover:translate-x-1"
          />
        </button>
      </div>
    </section>
  );
}

interface MetricProps {
  label: string;
  value: string;
  icon: React.ReactNode;
}

function Metric({
  label,
  value,
  icon,
}: MetricProps) {
  return (
    <div className="flex items-center gap-4 px-8 py-7">
      <div className="rounded-xl bg-zinc-800 p-3 text-zinc-300">
        {icon}
      </div>

      <div>
        <div className="text-3xl font-bold text-white">
          {value}
        </div>

        <div className="mt-1 text-sm text-zinc-500">
          {label}
        </div>
      </div>
    </div>
  );
}