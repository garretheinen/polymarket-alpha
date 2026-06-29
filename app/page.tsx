"use client";

import { useEffect, useState } from "react";

import OpportunityHero from "@/components/dashboard/OpportunityHero";
import PolySignalInsight from "@/components/dashboard/PolySignalInsight";
import ConvictionDistribution from "@/components/dashboard/ConvictionDistribution";
import StatsBar from "@/components/dashboard/StatsBar";

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

  if (!dashboard) {
    return (
      <main className="min-h-screen flex items-center justify-center bg-black text-white">
        <div className="text-2xl font-semibold">
          Loading PolySignal...
        </div>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-8">

      {/* Opportunity Hero */}
      <OpportunityHero
        opportunity={dashboard.featured}
      />

      {/* Insight + Distribution */}
      <div
        className="grid gap-6 mt-8"
        style={{
          gridTemplateColumns: "2fr 1fr",
        }}
      >
        <PolySignalInsight
          opportunity={dashboard.featured}
        />

        <ConvictionDistribution />
      </div>

      {/* Stats */}
      <div className="mt-8">
        <StatsBar stats={dashboard.stats} />
      </div>

    </main>
  );
}