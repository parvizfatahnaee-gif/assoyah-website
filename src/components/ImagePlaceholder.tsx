export default function ImagePlaceholder({
  path,
  label,
  ratio = "aspect-[4/5]",
  tone = "beige",
}: {
  path: string;
  label: string;
  ratio?: string;
  tone?: "beige" | "charcoal" | "ochre";
}) {
  const toneClasses =
    tone === "charcoal"
      ? "bg-charcoal text-ivory/60 border-ivory/15"
      : tone === "ochre"
      ? "bg-ochre/20 text-charcoal/60 border-charcoal/15"
      : "bg-beige text-charcoal/50 border-charcoal/10";

  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden rounded-sm border ${toneClasses}`}
    >
      <div className="absolute inset-0 flex flex-col items-center justify-center gap-2 p-6 text-center">
        <span className="font-display text-sm italic">{label}</span>
        <span className="font-body text-[10px] uppercase tracking-wider2 opacity-70">
          {path}
        </span>
      </div>
      <svg
        className="absolute inset-0 h-full w-full opacity-[0.07]"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <pattern
            id={`diag-${path.replace(/[^a-zA-Z0-9]/g, "")}`}
            width="16"
            height="16"
            patternTransform="rotate(45)"
            patternUnits="userSpaceOnUse"
          >
            <line x1="0" y1="0" x2="0" y2="16" stroke="currentColor" strokeWidth="1" />
          </pattern>
        </defs>
        <rect
          width="100%"
          height="100%"
          fill={`url(#diag-${path.replace(/[^a-zA-Z0-9]/g, "")})`}
        />
      </svg>
    </div>
  );
}
