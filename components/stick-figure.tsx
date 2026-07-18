export function StickFigurePushingBoulder({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 150 100"
      fill="none"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
    >
      {/* boulder, rolling as it travels */}
      <g>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 106 60"
          to="360 106 60"
          dur="1.1s"
          repeatCount="3"
        />
        <circle cx="106" cy="60" r="27" fill="currentColor" fillOpacity="0.18" stroke="currentColor" strokeWidth="5" />
        <path d="M90 52 Q106 42 122 52" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        <path d="M93 71 Q106 78 119 70" stroke="currentColor" strokeWidth="3" strokeLinecap="round" opacity="0.6" />
        <line x1="80" y1="60" x2="132" y2="60" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" opacity="0.4" />
      </g>

      {/* stick man, leaning in to push */}
      <circle cx="38" cy="36" r="9" stroke="currentColor" strokeWidth="5" />
      <line x1="38" y1="45" x2="57" y2="70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M57 70 L48 83 L35 89" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M57 70 L68 85 L80 90" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
      <path d="M45 51 L68 56 L80 58" stroke="currentColor" strokeWidth="5" fill="none" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}
