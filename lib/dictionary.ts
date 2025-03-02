import "server-only"

const dictionaries = {
  en: () => import("@/lib/dictionaries/en.json").then((module) => module.default),
  es: () => import("@/lib/dictionaries/es.json").then((module) => module.default),
}

export const getDictionary = async (locale: string) => {
  if (!Object.keys(dictionaries).includes(locale)) {
    locale = "en"
  }
  return dictionaries[locale as keyof typeof dictionaries]()
}
