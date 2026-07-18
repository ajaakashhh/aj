export function WriterIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M70 15 L30 55 L24 76 L45 70 L85 30 Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <path d="M62 23 L77 38" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M24 76 L30 70" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <path d="M12 90 Q35 80 58 90" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.55" />
      <path d="M18 99 Q40 91 60 99" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.35" />
    </svg>
  );
}

export function JournalistIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <path d="M15 25 H85 V80 Q50 88 15 80 Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <line x1="15" y1="25" x2="85" y2="25" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <line x1="24" y1="38" x2="60" y2="38" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
      <line x1="24" y1="50" x2="76" y2="50" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
      <line x1="24" y1="60" x2="76" y2="60" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
      <line x1="24" y1="70" x2="65" y2="70" stroke="currentColor" strokeWidth="4" strokeLinecap="round" opacity="0.65" />
    </svg>
  );
}

export function ProducerIcon({ className = "" }: { className?: string }) {
  return (
    <svg viewBox="0 0 100 100" fill="none" className={className} xmlns="http://www.w3.org/2000/svg">
      <rect x="15" y="40" width="70" height="45" rx="4" stroke="currentColor" strokeWidth="5" />
      <path d="M15 40 L25 20 L85 20 L75 40 Z" stroke="currentColor" strokeWidth="5" strokeLinejoin="round" />
      <line x1="30" y1="20" x2="22" y2="40" stroke="currentColor" strokeWidth="4" />
      <line x1="45" y1="20" x2="37" y2="40" stroke="currentColor" strokeWidth="4" />
      <line x1="60" y1="20" x2="52" y2="40" stroke="currentColor" strokeWidth="4" />
      <line x1="75" y1="20" x2="67" y2="40" stroke="currentColor" strokeWidth="4" />
    </svg>
  );
}
