import Image from "next/image";

export default function Portrait({
  src,
  alt,
  ratio = "aspect-[4/5]",
  tone = "beige",
  priority = false,
}: {
  src: string;
  alt: string;
  ratio?: string;
  tone?: "beige" | "charcoal" | "ochre";
  priority?: boolean;
}) {
  const toneClasses =
    tone === "charcoal"
      ? "border-ivory/15"
      : tone === "ochre"
      ? "border-charcoal/15"
      : "border-charcoal/10";

  return (
    <div
      className={`relative ${ratio} w-full overflow-hidden rounded-sm border ${toneClasses}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        priority={priority}
        sizes="(min-width: 1024px) 40vw, 90vw"
        className="object-cover"
      />
    </div>
  );
}
