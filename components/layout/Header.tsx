"use client";

import { Search, Bell } from "lucide-react";

export default function Header() {
  return (
    <header className="sticky top-0 z-30 flex h-[72px] items-center justify-between border-b border-slate-200 bg-white px-8">
      {/* Left */}
      <div>
        <h1 className="text-2xl font-semibold tracking-tight text-slate-900">
          Dashboard
        </h1>

        <p className="mt-1 text-sm text-slate-500">
          Real-time prediction market intelligence
        </p>
      </div>

      {/* Right */}
      <div className="flex items-center gap-3">
        {/* Search */}
        <button className="flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">
          <Search className="h-5 w-5 text-slate-500" />
        </button>

        {/* Notifications */}
        <button className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-slate-200 bg-white transition hover:bg-slate-50">
          <Bell className="h-5 w-5 text-slate-500" />

          <span className="absolute right-3 top-3 h-2 w-2 rounded-full bg-emerald-500" />
        </button>

        {/* User */}
        <button className="flex items-center gap-3 rounded-xl border border-slate-200 bg-white px-3 py-2 transition hover:bg-slate-50">
          <div className="flex h-9 w-9 items-center justify-center rounded-full bg-slate-900 text-sm font-semibold text-white">
            G
          </div>

          <div className="hidden text-left xl:block">
            <div className="text-sm font-medium text-slate-900">
              Garret
            </div>

            <div className="text-xs text-slate-500">
              Admin
            </div>
          </div>
        </button>
      </div>
    </header>
  );
}