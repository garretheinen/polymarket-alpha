interface Opportunity {
  market: string;
  outcome: string;
  capital: number;
  wallets: number;
  score: number;
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

export default function OpportunityHero({
  opportunity,
}: Props) {
  if (!opportunity) {
    return (
      <section className="rounded-2xl border border-zinc-800 bg-zinc-900 p-8">
        <h1 className="text-3xl font-bold text-white">
          No featured opportunity
        </h1>
      </section>
    );
  }

  return (
    <section className="rounded-3xl border border-emerald-500 bg-zinc-900 p-10">

      <div className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
        Highest Conviction Today
      </div>

      <h1 className="mt-4 text-5xl font-bold text-white">
        {opportunity.market}
      </h1>

      <p className="mt-3 text-xl text-zinc-300">
        Position: <strong>{opportunity.outcome}</strong>
      </p>

      <div className="mt-10 grid grid-cols-4 gap-6">

        <Metric
          label="Capital"
          value={formatMoney(opportunity.capital)}
        />

        <Metric
          label="Wallets"
          value={String(opportunity.wallets)}
        />

        <Metric
          label="Score"
          value={String(opportunity.score)}
        />

        <Metric
          label="Confidence"
          value={opportunity.confidence}
        />

      </div>

    </section>
  );
}

function Metric({
  label,
  value,
}: {
  label: string;
  value: string;
}) {
  return (
    <div className="rounded-2xl bg-zinc-800 p-5">

      <div className="text-sm text-zinc-400">
        {label}
      </div>

      <div className="mt-2 text-3xl font-bold text-white">
        {value}
      </div>

    </div>
  );
}