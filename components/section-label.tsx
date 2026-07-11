export function SectionLabel({ index, title }: { index: string; title: string }) {
  return (
    <div className="mb-10 flex items-baseline gap-4 border-b-2 border-ink pb-4">
      <span className="font-display text-lg text-signal">{index}</span>
      <h2 className="font-display text-3xl uppercase tracking-tight sm:text-4xl">{title}</h2>
    </div>
  );
}
