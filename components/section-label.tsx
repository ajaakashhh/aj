import { cn } from "@/lib/utils";

export function SectionLabel({
  index,
  title,
  theme = "dark",
}: {
  index: string;
  title: string;
  theme?: "dark" | "light";
}) {
  const onDark = theme === "dark";
  return (
    <div
      className={cn(
        "mb-10 flex items-baseline gap-4 border-b-2 pb-4",
        onDark ? "border-paper" : "border-ink"
      )}
    >
      <span className={cn("font-display text-lg", onDark ? "text-beam" : "text-signal")}>
        {index}
      </span>
      <h2
        className={cn(
          "font-display text-3xl uppercase tracking-tight sm:text-4xl",
          onDark ? "text-paper" : "text-ink"
        )}
      >
        {title}
      </h2>
    </div>
  );
}
