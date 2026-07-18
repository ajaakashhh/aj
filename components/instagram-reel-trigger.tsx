"use client";
import { useState, type ReactNode } from "react";
import { ExternalLink, X } from "lucide-react";
import { cn } from "@/lib/utils";

function getShortcode(url: string): string | null {
  const match = url.match(/\/reel\/([^/?]+)/);
  return match ? match[1] : null;
}

export function InstagramReelTrigger({
  url,
  title,
  children,
  className,
}: {
  url: string;
  title: string;
  children: ReactNode;
  className?: string;
}) {
  const [open, setOpen] = useState(false);
  const shortcode = getShortcode(url);

  return (
    <>
      <button type="button" onClick={() => setOpen(true)} className={cn("text-left", className)}>
        {children}
      </button>

      {open && shortcode && (
        <div
          className="fixed inset-0 z-[200] flex items-center justify-center bg-ink/90 p-4 sm:p-8"
          onClick={() => setOpen(false)}
        >
          <div
            className="relative w-full max-w-sm overflow-hidden rounded-xl border-2 border-beam bg-ink"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="relative aspect-[9/16] w-full">
              <iframe
                src={`https://www.instagram.com/reel/${shortcode}/embed`}
                title={title}
                allow="autoplay; encrypted-media"
                allowFullScreen
                className="absolute inset-0 h-full w-full"
              />
            </div>
            <div className="flex items-center justify-between gap-4 p-3">
              <p className="truncate font-serif text-sm text-paper">{title}</p>
              <div className="flex shrink-0 items-center gap-2">
                <a
                  href={url}
                  target="_blank"
                  rel="noreferrer"
                  aria-label="Watch on Instagram"
                  title="Watch on Instagram"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-paper text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  <ExternalLink className="h-4 w-4" />
                </a>
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  aria-label="Close"
                  className="flex h-9 w-9 items-center justify-center rounded-full border-2 border-paper text-paper transition-colors hover:bg-paper hover:text-ink"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
