"use client";

import type { Opportunity } from "@/lib/domain/opportunity";

interface OpportunityIdentityProps {
  opportunity: Opportunity;
}

export default function OpportunityIdentity({
  opportunity,
}: OpportunityIdentityProps) {
  return (
    <section>

      {/* Label */}

      <p className="text-xs font-bold uppercase tracking-[0.22em] text-blue-600">
        Top Opportunity
      </p>

      {/* Title */}

      <h1 className="mt-5 text-5xl font-bold tracking-tight text-slate-950">
        {opportunity.title}
      </h1>

      {/* Executive Summary */}

      <p className="mt-5 max-w-3xl text-lg leading-9 text-slate-600">
        Highest conviction opportunity based on elite trader consensus,
        capital commitment, and supporting intelligence.
      </p>

      {/* Metadata */}

      <div className="mt-8 flex flex-wrap gap-3">

        <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-semibold capitalize text-slate-700">
          {opportunity.category}
        </span>

        {/* TODO: Event Domain */}

        <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
          Spain vs Brazil
        </span>

        {/* TODO: Resolution Domain */}

        <span className="rounded-full border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-600">
          Resolves in 6h
        </span>

      </div>

    </section>
  );
}