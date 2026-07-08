"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import clsx from "clsx";

import {
  LayoutDashboard,
  Compass,
  Users,
  Brain,
  Bell,
  Settings,
} from "lucide-react";

import Logo from "@/components/ui/logo";
import {
  navigation,
  type NavigationIcon,
} from "@/lib/navigation";

const icons: Record<NavigationIcon, React.ElementType> = {
  dashboard: LayoutDashboard,
  markets: Compass,
  "smart-money": Users,
  research: Brain,
  alerts: Bell,
  settings: Settings,
};

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="hidden h-screen w-[272px] shrink-0 flex-col border-r border-slate-200 bg-[#FCFCFD] lg:flex">
      <div className="text-xl font-bold">PolySignal</div>
      <div className="border-b border-slate-200 px-8 py-7">
        <Logo />
      </div>

      {/* Navigation */}
      <nav className="flex-1 px-5 py-6">
        {/* MAIN */}
        <div>
          <p className="mb-3 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Main
          </p>

          <div className="space-y-1">
            {navigation
              .filter((item) =>
                ["Dashboard", "Markets"].includes(item.label)
              )
              .map((item) => {
                console.log(item.icon, icons[item.icon]);
                const Icon = icons[item.icon];

                const active =
                  item.href === "/"
                    ? pathname === "/"
                    : pathname.startsWith(item.href);

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-150",
                      active
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    {active && (
                      <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-blue-600" />
                    )}

                    <Icon
                      className={clsx(
                        "h-5 w-5",
                        active
                          ? "text-blue-600"
                          : "text-slate-400 group-hover:text-slate-700"
                      )}
                    />

                    <span>{item.label}</span>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* Intelligence */}
        <div className="mt-8">
          <p className="mb-3 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            Intelligence
          </p>

          <div className="space-y-1">
            {navigation
              .filter((item) =>
                ["Smart Money", "Research", "Alerts"].includes(
                  item.label
                )
              )
              .map((item) => {
                const Icon = icons[item.icon];

                const active =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-150",
                      active
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    {active && (
                      <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-blue-600" />
                    )}

                    <Icon
                      className={clsx(
                        "h-5 w-5",
                        active
                          ? "text-blue-600"
                          : "text-slate-400 group-hover:text-slate-700"
                      )}
                    />

                    <span>{item.label}</span>
                  </Link>
                );
              })}
          </div>
        </div>

        {/* System */}
        <div className="mt-8">
          <p className="mb-3 px-4 text-[11px] font-semibold uppercase tracking-[0.18em] text-slate-400">
            System
          </p>

          <div className="space-y-1">
            {navigation
              .filter((item) => item.label === "Settings")
              .map((item) => {
                const Icon = icons[item.icon];

                const active =
                  pathname === item.href ||
                  pathname.startsWith(item.href + "/");

                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={clsx(
                      "group relative flex items-center gap-3 rounded-2xl px-4 py-3 text-sm font-medium transition-all duration-150",
                      active
                        ? "bg-blue-50 text-blue-700"
                        : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
                    )}
                  >
                    {active && (
                      <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-blue-600" />
                    )}

                    <Icon
                      className={clsx(
                        "h-5 w-5",
                        active
                          ? "text-blue-600"
                          : "text-slate-400 group-hover:text-slate-700"
                      )}
                    />

                    <span>{item.label}</span>
                  </Link>
                );
              })}
          </div>
        </div>
      </nav>

      {/* Footer */}
      <div className="border-t border-slate-200 p-5">
        <div className="rounded-3xl border border-slate-200 bg-white p-5 shadow-sm">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-600">
            Road to Launch
          </p>

          <h3 className="mt-3 text-sm font-semibold text-slate-900">
            Sprint 1
          </h3>

          <p className="mt-1 text-xs text-slate-500">
            Dashboard Refactor
          </p>

          <div className="mt-4 h-2 overflow-hidden rounded-full bg-slate-200">
            <div className="h-full w-[18%] rounded-full bg-blue-600" />
          </div>

          <p className="mt-2 text-xs text-slate-500">
            18% Complete
          </p>
        </div>
      </div>
    </aside>
  );
}