import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const badgeVariants = cva(
  "inline-flex items-center border-2 px-2.5 py-0.5 font-sans text-xs font-bold uppercase tracking-wider transition-colors",
  {
    variants: {
      variant: {
        default: "border-ink bg-transparent text-ink",
        signal: "border-ink bg-signal text-paper",
        beam: "border-ink bg-beam text-ink",
        solid: "border-ink bg-ink text-paper",
      },
    },
    defaultVariants: { variant: "default" },
  }
);

export interface BadgeProps
  extends React.HTMLAttributes<HTMLDivElement>,
    VariantProps<typeof badgeVariants> {}

function Badge({ className, variant, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant }), className)} {...props} />;
}

export { Badge, badgeVariants };
