import type { MetadataRoute } from "next";
import { locales } from "@/i18n/config";
import { requestSlugs } from "@/i18n/requestSlugs";

const BASE_URL = "https://assoyah.netlify.app";

const staticPaths = [
  "",
  "about",
  "fashion",
  "african-heritage",
  "private-atelier",
  "uniforms",
  "manufacturing",
  "journal",
  "contact",
  "legal",
  "request",
];

export default function sitemap(): MetadataRoute.Sitemap {
  const entries: MetadataRoute.Sitemap = [];

  for (const locale of locales) {
    for (const path of staticPaths) {
      entries.push({
        url: `${BASE_URL}/${locale}${path ? `/${path}` : ""}`,
        lastModified: new Date(),
        changeFrequency: path === "" ? "weekly" : "monthly",
        priority: path === "" ? 1 : 0.7,
      });
    }
    for (const slug of requestSlugs) {
      entries.push({
        url: `${BASE_URL}/${locale}/request/${slug}`,
        lastModified: new Date(),
        changeFrequency: "monthly",
        priority: 0.5,
      });
    }
  }

  return entries;
}
