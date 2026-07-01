"use client";

import Link from "next/link";
import clsx from "clsx";
import type { LucideIcon } from "lucide-react";

interface NavItemProps {
  href: string;
  label: string;
  active: boolean;
  Icon: LucideIcon;
}

export default function NavItem({
  href,
  label,
  active,
  Icon,
}: NavItemProps) {
  return (
    <Link
      href={href}
      className={clsx(
        "group relative flex h-11 items-center rounded-xl transition-all duration-150",
        active
          ? "bg-blue-50 text-blue-700"
          : "text-slate-600 hover:bg-slate-100 hover:text-slate-900"
      )}
    >
      {active && (
        <span className="absolute left-0 top-2 bottom-2 w-1 rounded-r-full bg-blue-600" />
      )}

      <div className="flex items-center gap-3 px-4">
        <Icon
          className={clsx(
            "h-5 w-5 transition-colors",
            active
              ? "text-blue-600"
              : "text-slate-400 group-hover:text-slate-700"
          )}
        />

        <span className="font-medium">{label}</span>
      </div>
    </Link>
  );
}