export default function Eyebrow({
  children,
  tone = "dark",
}: {
  children: React.ReactNode;
  tone?: "dark" | "light" | "terracotta";
}) {
  const colorClass =
    tone === "light"
      ? "text-ivory/70"
      : tone === "terracotta"
      ? "text-terracotta"
      : "text-stone";

  return (
    <span
      className={`font-body text-[11px] md:text-xs uppercase tracking-wider3 ${colorClass}`}
    >
      {children}
    </span>
  );
}
