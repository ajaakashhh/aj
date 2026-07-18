export function Footer() {
  return (
    <footer className="relative z-[110] border-t-2 border-ink bg-paper">
      <div className="container flex flex-col gap-4 py-8 sm:flex-row sm:items-center sm:justify-between">
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
