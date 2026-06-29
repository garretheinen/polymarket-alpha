interface Opportunity {
  market: string;
  outcome: string;
  wallets: number;
  capital: number;
  confidence: string;
}

interface Props {
  opportunity: Opportunity | null;
}

function formatMoney(value: number) {
  if (value >= 1_000_000) {
    return `$${(value / 1_000_000).toFixed(2)}M`;
  }

  if (value >= 1000) {
    return `$${(value / 1000).toFixed(0)}K`;
  }

  return `$${value}`;
}

export default function PolySignalInsight({
  opportunity,
}: Props) {
  if (!opportunity) return null;

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <div className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
        PolySignal Insight
      </div>

      <h2 className="mt-4 text-3xl font-bold text-white">
        Why this opportunity stands out
      </h2>

      <p className="mt-6 text-lg leading-8 text-zinc-300">
        <strong>{opportunity.wallets}</strong> tracked wallets are
        independently aligned on{" "}
        <strong>{opportunity.outcome}</strong> in{" "}
        <strong>{opportunity.market}</strong>.
      </p>

      <p className="mt-4 text-lg leading-8 text-zinc-300">
        Combined tracked capital currently exceeds{" "}
        <strong>{formatMoney(opportunity.capital)}</strong>,
        giving this opportunity a{" "}
        <strong>{opportunity.confidence}</strong> conviction rating.
      </p>

      <div className="mt-8 rounded-2xl bg-zinc-800 p-5">

        <div className="font-semibold text-white">
          Research Summary
        </div>

        <div className="mt-2 text-zinc-400">
          Multiple independent traders have converged on the same
          outcome. This pattern historically deserves additional
          research rather than immediate execution.
        </div>

      </div>

    </section>
  );
}