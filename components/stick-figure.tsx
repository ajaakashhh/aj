export function StickFigurePushingBoulder({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* boulder */}
      <circle cx="106" cy="60" r="27" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="5" />
      <path d="M90 52 Q106 42 122 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
      <path d="M93 71 Q106 78 119 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />

      {/* stick man, leaning in to push */}
      <circle cx="38" cy="36" r="9" stroke="currentColor" strokeWidth="5" />
      <line x1="38" y1="45" x2="57" y2="70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      {/* trailing leg */}
      <path d="M57 70 L48 83 L35 89" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* pushing leg */}
      <path d="M57 70 L68 85 L80 90" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      {/* arms braced against the boulder */}
      <path d="M45 51 L68 56 L80 58" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />

      {/* effort lines */}
      <line x1="10" y1="40" x2="20" y2="40" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.5" />
      <line x1="6" y1="52" x2="18" y2="52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}
