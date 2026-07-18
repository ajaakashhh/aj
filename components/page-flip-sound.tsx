"use client";
import { useEffect, useRef } from "react";

export function PageFlipSound() {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const activeIdRef = useRef<string | null>(null);
  const mountedAtRef = useRef<number>(Date.now());

  useEffect(() => {
    const sections = Array.from(
      document.querySelectorAll<HTMLElement>("main > section[id]")
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const id = entry.target.id;
          if (activeIdRef.current === id) continue;
          activeIdRef.current = id;

          const isInitialLoad = Date.now() - mountedAtRef.current < 300;
          if (isInitialLoad) continue;

          const audio = audioRef.current;
          if (audio) {
            audio.currentTime = 0;
            audio.volume = 0.5;
            audio.play().catch(() => {});
          }
        }
      },
      { threshold: 0, rootMargin: "-50% 0px -50% 0px" }
    );

    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  return <audio ref={audioRef} src="/page-flip.mp3" preload="auto" className="hidden" />;
}
