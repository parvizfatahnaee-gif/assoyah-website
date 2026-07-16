import Image from "next/image";

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
      <Image
        src={path}
        alt={label}
        fill
        sizes="(max-width: 768px) 100vw, 50vw"
        className="object-cover"
      />
    </div>
  );
}
