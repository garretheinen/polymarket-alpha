"use client";

import { useEffect, useState } from "react";

import OpportunityHero from "@/components/dashboard/v2/OpportunityHero/index";
console.log(OpportunityHero);
import SignalCompass from "@/components/dashboard/v2/SignalCompass";

import type { DashboardResponse } from "@/types/dashboard";

export default function Home() {
  const [dashboard, setDashboard] =
    useState<DashboardResponse | null>(null);

  useEffect(() => {
    fetch("/api/dashboard")
      .then((res) => res.json())
      .then((data: DashboardResponse) => setDashboard(data))
      .catch(console.error);
  }, []);
console.log(dashboard);
  if (!dashboard) {
    return (
      <main className="flex min-h-screen items-center justify-center bg-[#0B0D10] text-white">
        <div className="text-2xl font-semibold">
          Loading PolySignal...
        </div>
      </main>
    );
  }

  return (
    <main className="flex w-full flex-col gap-8">

      {/* Opportunity Overview */}
      <OpportunityHero
  opportunity={dashboard.featured}
/>

      {/* Signal Compass */}
      <SignalCompass />

      {/* Sprint 1 Roadmap */}

      <section className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          PolySignal Insight
        </h2>

        <p className="mt-2 text-slate-500">
          Coming next...
        </p>
      </section>

      <section className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Market Pulse
        </h2>

        <p className="mt-2 text-slate-500">
          Coming in Sprint 1...
        </p>
      </section>

      <section className="rounded-[28px] border border-dashed border-slate-300 bg-slate-50 p-12 text-center">
        <h2 className="text-2xl font-bold text-slate-900">
          Top Opportunities
        </h2>

        <p className="mt-2 text-slate-500">
          Coming in Sprint 1...
        </p>
      </section>

    </main>
  );
}