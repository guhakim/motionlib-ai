export function MotionsitesLogo() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" aria-hidden="true">
      <defs>
        <linearGradient id="ms-lg1" x1="0" y1="0" x2="9" y2="9" gradientUnits="userSpaceOnUse">
          <stop stopColor="#a855f7"/><stop offset="1" stopColor="#ec4899"/>
        </linearGradient>
        <linearGradient id="ms-lg2" x1="0" y1="0" x2="9" y2="9" gradientUnits="userSpaceOnUse">
          <stop stopColor="#6366f1"/><stop offset="1" stopColor="#a855f7"/>
        </linearGradient>
        <linearGradient id="ms-lg3" x1="0" y1="0" x2="9" y2="9" gradientUnits="userSpaceOnUse">
          <stop stopColor="#ec4899"/><stop offset="1" stopColor="#f97316"/>
        </linearGradient>
      </defs>
      <rect width="9" height="9" rx="1.5" fill="url(#ms-lg1)"/>
      <rect x="11" width="9" height="9" rx="1.5" fill="url(#ms-lg2)"/>
      <rect y="11" width="9" height="9" rx="1.5" fill="url(#ms-lg3)"/>
    </svg>
  );
}
