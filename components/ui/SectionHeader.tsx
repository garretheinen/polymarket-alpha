interface Props {
  eyebrow: string;
  title: string;
  subtitle?: string;
}

export default function SectionHeader({
  eyebrow,
  title,
  subtitle,
}: Props) {
  return (
    <>
      <div className="text-xs uppercase tracking-[0.2em] font-semibold text-emerald-400">
        {eyebrow}
      </div>

      <h2 className="mt-2 text-3xl font-bold text-white">
        {title}
      </h2>

      {subtitle && (
        <p className="mt-2 text-zinc-400">
          {subtitle}
        </p>
      )}
    </>
  );
}