interface Props {
  distribution?: {
    strong?: number;
    moderate?: number;
    weak?: number;
  };
}

export default function ConvictionDistribution({
  distribution,
}: Props) {
  const strong = distribution?.strong ?? 8;
  const moderate = distribution?.moderate ?? 14;
  const weak = distribution?.weak ?? 6;

  const total = strong + moderate + weak;

  return (
    <section className="rounded-3xl border border-zinc-800 bg-zinc-900 p-8">

      <div className="text-sm font-semibold uppercase tracking-wider text-emerald-400">
        Conviction Distribution
      </div>

      <div className="mt-8 space-y-6">

        <Bar
          label="Strong"
          value={strong}
          total={total}
          color="#22c55e"
        />

        <Bar
          label="Moderate"
          value={moderate}
          total={total}
          color="#f59e0b"
        />

        <Bar
          label="Weak"
          value={weak}
          total={total}
          color="#ef4444"
        />

      </div>

    </section>
  );
}

function Bar({
  label,
  value,
  total,
  color,
}: {
  label: string;
  value: number;
  total: number;
  color: string;
}) {
  return (
    <div>
      <div className="mb-2 flex justify-between text-white">
        <span>{label}</span>
        <span>{value}</span>
      </div>

      <div className="h-3 rounded-full bg-zinc-800">
        <div
          style={{
            width: `${(value / total) * 100}%`,
            background: color,
            height: "100%",
            borderRadius: 999,
          }}
        />
      </div>
    </div>
  );
}