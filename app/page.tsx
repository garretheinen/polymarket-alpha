"use client";

import { useEffect, useState } from "react";

import OpportunityHero from "@/components/dashboard/v2/OpportunityHero";
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
      <main className="flex min-h-screen items-center justify-center bg-[#0B0D10] text-white">
        <div className="text-2xl font-semibold">
          Loading PolySignal...
        </div>
      </main>
    );
  }

  return (
    <main className="space-y-8">
      <OpportunityHero
        opportunity={dashboard.featured}
      />

      <div
        className="grid gap-6"
        style={{
          gridTemplateColumns: "2fr 1fr",
        }}
      >
        <PolySignalInsight
          opportunity={dashboard.featured}
        />

        <ConvictionDistribution />
      </div>

      <StatsBar stats={dashboard.stats} />
    </main>
  );
}