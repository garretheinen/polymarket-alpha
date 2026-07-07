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
    <section className="rounded-3xl border border-slate-200 bg-white p-8 shadow-sm">
      <div>
        <h3 className="text-lg font-semibold text-slate-900">
          Conviction Distribution
        </h3>

        <p className="mt-1 text-sm text-slate-500">
          Distribution of tracked opportunities by conviction strength.
        </p>
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
  const percent = Math.round((value / total) * 100);

  return (
    <div className="space-y-2">
      <div className="flex items-center justify-between">
        <span className="text-sm font-medium text-slate-600">
          {label}
        </span>

        <span className="text-sm font-semibold text-slate-900">
          {value}{" "}
          <span className="text-slate-500">
            ({percent}%)
          </span>
        </span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-slate-100">
        <div
          className="h-full rounded-full transition-all duration-500"
          style={{
            width: `${percent}%`,
            backgroundColor: color,
          }}
        />
      </div>
    </div>
  );
}