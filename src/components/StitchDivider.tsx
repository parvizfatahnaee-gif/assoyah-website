type Props = {
  className?: string;
  tone?: "light" | "dark";
};

/**
 * The site's signature motif: a fine running-stitch line, evoking the seam
 * of a garment, used as the sole recurring transition device between
 * sections instead of generic rules or gold dividers.
 */
export default function StitchDivider({ className = "", tone = "dark" }: Props) {
  const color = tone === "dark" ? "#1C1A17" : "#F8F6F1";
  return (
    <div className={`w-full flex justify-center ${className}`} aria-hidden="true">
      <svg
        width="120"
        height="10"
        viewBox="0 0 120 10"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0 5 Q 7.5 0, 15 5 T 30 5 T 45 5 T 60 5 T 75 5 T 90 5 T 105 5 T 120 5"
          stroke={color}
          strokeWidth="1"
          strokeDasharray="4 4"
          strokeOpacity="0.55"
        />
      </svg>
    </div>
  );
}
