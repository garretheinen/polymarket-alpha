"use client";

import clsx from "clsx";
import { ShieldCheck } from "lucide-react";

interface ConsensusBadgeProps {
  wallets: number;
  className?: string;
}

export default function ConsensusBadge({
  wallets,
  className,
}: ConsensusBadgeProps) {
  return (
    <div
      className={clsx(
        "inline-flex items-center gap-3 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2",
        className
      )}
    >
      <ShieldCheck
        className="h-4 w-4 text-emerald-600"
        strokeWidth={2.25}
      />

      <span className="text-sm font-semibold text-emerald-700">
        Elite Consensus
      </span>

      <span className="text-sm text-emerald-600">
        {wallets} wallets
      </span>
    </div>
  );
}