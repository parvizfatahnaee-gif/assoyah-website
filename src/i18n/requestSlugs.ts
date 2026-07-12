export const requestSlugs = [
  "consultation",
  "custom-design",
  "private-atelier",
  "corporate-uniform",
  "manufacturing",
  "partnership",
  "meeting",
  "mou",
  "quotation",
  "collaboration",
] as const;

export type RequestSlug = (typeof requestSlugs)[number];
