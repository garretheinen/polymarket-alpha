"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  Target,
  TrendingUp,
  BarChart3,
  Trophy,
  Bell,
  Search,
} from "lucide-react";

const links = [
  {
    name: "Overview",
    href: "/",
    icon: LayoutDashboard,
  },
  {
    name: "Signals",
    href: "/consensus",
    icon: Target,
  },
  {
    name: "Momentum",
    href: "/momentum",
    icon: TrendingUp,
  },
  {
    name: "Performance",
    href: "/performance",
    icon: BarChart3,
  },
  {
    name: "Leaderboard",
    href: "/wallets",
    icon: Trophy,
  },
  {
    name: "Alerts",
    href: "/alerts",
    icon: Bell,
  },
];

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 border-r border-zinc-800 bg-zinc-950 flex flex-col">
      <div className="px-6 py-6 border-b border-zinc-800">
        <h1 className="text-xl font-semibold tracking-tight">
          Alpha
        </h1>

        <p className="text-xs text-zinc-500 mt-1">
          Prediction Market Intelligence
        </p>
      </div>

      <nav className="flex-1 px-3 py-4 space-y-1">
        {links.map((link) => {
          const Icon = link.icon;

          const active = pathname === link.href;

          return (
            <Link
              key={link.name}
              href={link.href}
              className={`flex items-center gap-3 rounded-xl px-3 py-2 text-sm transition ${
                active
                  ? "bg-zinc-900 text-white"
                  : "text-zinc-400 hover:bg-zinc-900 hover:text-white"
              }`}
            >
              <Icon size={18} />

              {link.name}
            </Link>
          );
        })}
      </nav>

      <div className="border-t border-zinc-800 p-4 text-xs text-zinc-500">
        Alpha v0.1
      </div>
    </aside>
  );
}