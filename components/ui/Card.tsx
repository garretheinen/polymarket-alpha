import clsx from "clsx";

interface CardProps {
  children: React.ReactNode;
  className?: string;
}

export default function Card({
  children,
  className,
}: CardProps) {
  return (
    <section
      className={clsx(
        "rounded-[28px] border border-slate-200 bg-white shadow-sm",
        className
      )}
    >
      {children}
    </section>
  );
}