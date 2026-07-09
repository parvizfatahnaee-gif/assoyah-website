import type { Locale } from "./config";
import fr from "./dictionaries/fr";
import en from "./dictionaries/en";

const dictionaries = { fr, en };

export type Dictionary = typeof fr;

export function getDictionary(locale: Locale): Dictionary {
  return dictionaries[locale] ?? dictionaries.fr;
}
