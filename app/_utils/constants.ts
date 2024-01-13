export const ATLAS_VERSION_URL = "https://api.atlasacademy.io/info";
export const ATLAS_JP_SVT_URL =
  "https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json";
export const ATLAS_NA_SVT_URL =
  "https://api.atlasacademy.io/export/NA/nice_servant.json";

export const MIN_SERVANT_LEVEL = 1 as const;
export const MAX_SERVANT_LEVEL = 120 as const;

export const ASCENSION_LEVELS = [0, 1, 2, 3, 4] as const;

export const MIN_ASCENSION_LEVEL = ASCENSION_LEVELS.reduce(
  (previousValue, currentValue) =>
    previousValue < currentValue ? previousValue : currentValue,
);

export const MAX_ASCENSION_LEVEL = ASCENSION_LEVELS.reduce(
  (previousValue, currentValue) =>
    previousValue < currentValue ? previousValue : currentValue,
);

export const MIN_SKILL_LEVEL = 1 as const;
export const MAX_SKILL_LEVEL = 10 as const;

export const MIN_APPEND_LEVEL = 0 as const;
export const MAX_APPEND_LEVEL = 10 as const;

export const SKILL_NUMBERS = [1, 2, 3] as const;

export const APPEND_SKILL_NUMBERS = [100, 101, 102] as const;
