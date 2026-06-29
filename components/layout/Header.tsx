"use client";

import { Search } from "lucide-react";

export default function Header() {
  return (
    <header className="h-16 border-b border-zinc-800 bg-zinc-950 flex items-center justify-between px-8">
      <h2 className="text-lg font-semibold">
        Today's Opportunities
      </h2>

      <div className="relative w-72">
        <Search
          className="absolute left-3 top-3 text-zinc-500"
          size={16}
        />

        <input
          placeholder="Search traders or markets..."
          className="w-full rounded-xl border border-zinc-800 bg-zinc-900 py-2 pl-10 pr-4 outline-none focus:border-zinc-600"
        />
      </div>
    </header>
  );
}