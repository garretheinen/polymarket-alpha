"use client";

import { Bell, Search } from "lucide-react";

export default function Header() {
  return (
    <header className="flex h-[72px] items-center justify-between border-b border-slate-200 bg-white px-8">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-bold tracking-tight text-slate-900">
          Dashboard
        </h1>

        <div className="mt-1 flex items-center gap-2 text-sm text-slate-500">
          <span className="h-2 w-2 rounded-full bg-emerald-500" />

          <span>Live Prediction Intelligence</span>
        </div>
      </div>

      {/* Right */}
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search
            className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-slate-400"
          />

          <input
            placeholder="Search markets or traders..."
            className="h-11 w-80 rounded-2xl border border-slate-200 bg-slate-50 pl-10 pr-4 text-sm outline-none transition focus:border-blue-500 focus:bg-white"
          />
        </div>

        <button className="flex h-11 w-11 items-center justify-center rounded-2xl border border-slate-200 transition hover:bg-slate-100">
          <Bell className="h-5 w-5 text-slate-600" />
        </button>

        <div className="flex h-11 w-11 items-center justify-center rounded-2xl bg-blue-600 font-semibold text-white">
          G
        </div>
      </div>
    </header>
  );
}