"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";

const links = [
  { href: "#about", label: "About" },
  { href: "#instagram", label: "Instagram" },
  { href: "#video", label: "Video" },
  { href: "#creative", label: "Creative" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-[120] transition-colors duration-300",
        scrolled ? "border-b-2 border-ink bg-paper/95 backdrop-blur" : "border-b-2 border-transparent"
      )}
    >
      <div className="container flex h-16 items-center justify-between">
        <a href="#top" className="flex items-center gap-2.5">
          <span className="relative h-9 w-9 shrink-0 overflow-hidden rounded-full border-2 border-ink">
            <Image src="/aj.png" alt="Aakash Srividhya" fill className="object-cover" />
          </span>
          <span className="font-display text-xl uppercase tracking-tight">
            Aakash <br /> Srividhya
          </span>
        </a>
        <nav className="hidden items-center gap-6 md:flex">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="underline-signal font-sans text-xs font-bold uppercase tracking-wider"
            >
              {l.label}
            </a>
          ))}
        </nav>
        <a
          href="#contact"
          className="rounded-lg border-2 border-ink bg-beam px-4 py-1.5 font-sans text-xs font-bold uppercase tracking-wider shadow-[3px_3px_0_0_hsl(var(--ink))] transition-transform hover:translate-x-[1px] hover:translate-y-[1px]"
        >
          Get in touch
        </a>
      </div>
    </header>
  );
}
