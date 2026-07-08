"use client";

interface Point {
  x: number;
  y: number;
}

interface Props {
  points: Record<string, Point>;
}

export default function SignalEditor({
  points,
}: Props) {
  return (
    <>
      {Object.entries(points).map(([name, point]) => (
        <div
          key={name}
          className="absolute z-50 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-red-500"
          style={{
            left: `${point.x / 10}%`,
            top: `${point.y / 10}%`,
          }}
          title={name}
        />
      ))}
    </>
  );
}