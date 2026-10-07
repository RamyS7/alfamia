
const dictionaries = {
  ar: () => import("./dictionaries/ar.json").then((module) => module.default),
  en: () => import("./dictionaries/en.json").then((module) => module.default),
};

export type Dictionary = Awaited<ReturnType<typeof dictionaries.ar>>;

export const getDictionary = async (locale: "ar" | "en"): Promise<Dictionary> => {
  if (locale === "en") {
    return dictionaries.en();
  }
  return dictionaries.ar();
};