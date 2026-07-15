import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://assoyah.netlify.app"),
  title: "ASSOYAH — Fashion House & Textile Manufacture",
  description:
    "ASSOYAH is a fashion house and textile manufacture based in Abidjan, Côte d'Ivoire, combining artistic direction, tailoring craftsmanship and industrial production capability.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
