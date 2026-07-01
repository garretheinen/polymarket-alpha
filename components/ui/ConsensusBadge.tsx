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
        "inline-flex flex-col rounded-2xl border border-emerald-200 bg-emerald-50 px-5 py-4",
        className
      )}
    >
      <div className="flex items-center gap-2">
        <ShieldCheck
          className="h-5 w-5 text-emerald-600"
          strokeWidth={2.25}
        />

        <span className="text-sm font-bold uppercase tracking-[0.18em] text-emerald-700">
          Elite Consensus
        </span>
      </div>

      <p className="mt-2 text-sm text-emerald-700/80">
        Verified by{" "}
        <span className="font-semibold">
          {wallets} Elite Wallets
        </span>
      </p>
    </div>
  );
}