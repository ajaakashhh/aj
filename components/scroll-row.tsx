import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

export function ScrollRow({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={cn(
        "no-scrollbar -mx-6 flex snap-x snap-mandatory gap-4 overflow-x-auto scroll-smooth px-6 pb-2 sm:gap-5",
        className
      )}
    >
      {children}
    </div>
  );
}
