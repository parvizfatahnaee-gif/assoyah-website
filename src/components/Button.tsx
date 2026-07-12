import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "secondary" | "outline";

const base =
  "inline-flex items-center justify-center rounded-full font-body text-[13px] uppercase tracking-wider2 transition-colors duration-300 focus-visible:outline-2 focus-visible:outline-offset-2 disabled:opacity-40 disabled:pointer-events-none";

const variants: Record<Variant, string> = {
  primary: "bg-charcoal px-7 py-3 text-ivory hover:bg-terracotta",
  secondary: "bg-ivory px-7 py-3 text-charcoal hover:bg-terracotta hover:text-ivory",
  outline: "border border-charcoal/25 px-7 py-3 text-charcoal hover:border-charcoal",
};

export default function Button({
  href,
  children,
  variant = "primary",
  className = "",
  onClick,
  type,
}: {
  href?: string;
  children: ReactNode;
  variant?: Variant;
  className?: string;
  onClick?: () => void;
  type?: "button" | "submit";
}) {
  const classes = `${base} ${variants[variant]} ${className}`;

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    );
  }

  return (
    <button type={type ?? "button"} onClick={onClick} className={classes}>
      {children}
    </button>
  );
}
