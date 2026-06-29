interface Props {
  percent: number;
}

export default function ConvictionMeter({
  percent,
}: Props) {
  return (
    <div className="w-full">
      <div className="mb-2 flex justify-between text-xs text-zinc-500">
        <span>Low</span>
        <span>High</span>
      </div>

      <div className="h-2 overflow-hidden rounded-full bg-zinc-800">
        <div
          className="h-full rounded-full bg-emerald-500 transition-all"
          style={{
            width: `${percent}%`,
          }}
        />
      </div>
    </div>
  );
}