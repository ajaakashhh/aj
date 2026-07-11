export function Marquee({
  items,
  reverse = false,
  className = "",
}: {
  items: string[];
  reverse?: boolean;
  className?: string;
}) {
  const row = [...items, ...items];
  return (
    <div className={`flex overflow-hidden ${className}`}>
      <div
        className={`flex shrink-0 items-center gap-6 pr-6 ${
          reverse ? "animate-marquee-rev" : "animate-marquee"
        }`}
      >
        {row.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center gap-6">
            <span className="font-display text-2xl uppercase tracking-tight">{item}</span>
            <span className="text-signal">✳</span>
          </span>
        ))}
      </div>
    </div>
  );
}
