/**
 * EG monogram — editorial mark, tints via currentColor (mode-aware).
 * Draft v1 for the brand book; favicon/OG export follows in Phase 3 if approved.
 */
export default function Monogram({
  size = 48,
  className = "",
}: {
  size?: number;
  className?: string;
}) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      role="img"
      aria-label="Eitan Gorodetsky monogram"
      className={className}
    >
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="12"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
      />
      <text
        x="50%"
        y="54%"
        dominantBaseline="middle"
        textAnchor="middle"
        fill="currentColor"
        style={{ fontFamily: "var(--font-serif)", fontWeight: 700, fontSize: "30px", letterSpacing: "-1px" }}
      >
        EG
      </text>
    </svg>
  );
}
