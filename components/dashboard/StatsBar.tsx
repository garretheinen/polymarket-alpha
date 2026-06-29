type Stats = {
  walletsTracked: number;
  totalPositions: number;
  alertsGenerated: number;
};

interface Props {
  stats: Stats;
}

export default function StatsBar({ stats }: Props) {
  const cards = [
    {
      title: "Tracked Wallets",
      value: stats.walletsTracked,
    },
    {
      title: "Open Positions",
      value: stats.totalPositions,
    },
    {
      title: "Live Alerts",
      value: stats.alertsGenerated,
    },
  ];

  return (
    <div
      className="grid gap-4"
      style={{
        gridTemplateColumns:
          "repeat(auto-fit,minmax(220px,1fr))",
      }}
    >
      {cards.map((card) => (
        <div
          key={card.title}
          className="rounded-2xl border border-zinc-800 bg-zinc-900 p-6"
        >
          <div className="text-sm text-zinc-400">
            {card.title}
          </div>

          <div className="mt-2 text-4xl font-bold text-white">
            {card.value}
          </div>
        </div>
      ))}
    </div>
  );
}