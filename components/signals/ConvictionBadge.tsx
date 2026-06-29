import { cn } from "@/lib/utils";

type Rating = "A+" | "A" | "B" | "C" | "D";

const colors = {
  "A+": "bg-emerald-500/10 text-emerald-400 border-emerald-500/30",
  A: "bg-green-500/10 text-green-400 border-green-500/30",
  B: "bg-yellow-500/10 text-yellow-400 border-yellow-500/30",
  C: "bg-orange-500/10 text-orange-400 border-orange-500/30",
  D: "bg-red-500/10 text-red-400 border-red-500/30",
};

export default function ConvictionBadge({
  rating,
}: {
  rating: Rating;
}) {
  return (
    <div
      className={cn(
        "inline-flex h-10 w-10 items-center justify-center rounded-xl border font-semibold",
        colors[rating]
      )}
    >
      {rating}
    </div>
  );
}