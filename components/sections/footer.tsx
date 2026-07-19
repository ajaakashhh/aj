import { WaterGlass } from "@/components/water-glass";

export function Footer() {
  return (
    <footer className="relative z-[110] border-t-2 border-ink bg-paper">
      <div className="container flex flex-col items-center gap-4 py-14 text-center sm:py-20">
        <WaterGlass className="h-24 w-auto sm:h-28" />
        <p className="font-serif text-xl italic leading-snug text-ink sm:text-2xl">
          You&apos;ve scrolled a long way.
          <br />
          Here, have some water.
        </p>
      </div>

      <div className="container flex flex-col gap-4 border-t border-ink/15 py-8 sm:flex-row sm:items-center sm:justify-between">
        <p className="font-display text-xl uppercase tracking-tight">
          Aakash Srividhya
        </p>
        <p className="font-sans text-xs uppercase tracking-widest text-muted-foreground">
          © {new Date().getFullYear()}
        </p>
      </div>
    </footer>
  );
}
