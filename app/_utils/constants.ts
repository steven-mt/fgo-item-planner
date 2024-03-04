export const DRAWER_WIDTH = 240 as const;

export const PAGE_ITEMS = ["Inputs", "Materials"] as const;

export const ATLAS_VERSION_URL = "https://api.atlasacademy.io/info";
export const ATLAS_JP_SVT_URL =
  "https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json";
export const ATLAS_NA_SVT_URL =
  "https://api.atlasacademy.io/export/NA/nice_servant.json";
export const ATLAS_GRAIL_URL =
  "https://api.atlasacademy.io/export/JP/NiceSvtGrailCost.json";

export const ATLAS_NA_SVT_QUERY_URL =
  "https://api.atlasacademy.io/nice/NA/servant/";

export const MIN_SERVANT_LEVEL = 1 as const;
export const MAX_SERVANT_LEVEL = 120 as const;

export const ASCENSION_LEVELS = [0, 1, 2, 3, 4] as const;

export const MIN_ASCENSION_LEVEL = ASCENSION_LEVELS.reduce(
  (previousValue, currentValue) =>
    previousValue < currentValue ? previousValue : currentValue,
);

export const MAX_ASCENSION_LEVEL = ASCENSION_LEVELS.reduce(
  (previousValue, currentValue) =>
    previousValue > currentValue ? previousValue : currentValue,
);

export const MIN_SKILL_LEVEL = 1 as const;
export const MAX_SKILL_LEVEL = 10 as const;

export const MIN_APPEND_LEVEL = 0 as const;
export const MAX_APPEND_LEVEL = 10 as const;

export const SKILL_NUMBERS = [1, 2, 3] as const;

export const APPEND_SKILL_NUMBERS = [100, 101, 102] as const;

export const QP_ITEM_ID = 1 as const;
export const GRAIL_ITEM_ID = 7999 as const;

export const EXP_CLASS_BONUS = 1.2;
export const EXP_4_ID = 9770400 as const;
export const EXP_5_ID = 9770500 as const;

export const MASH_SVT_ID = 800100 as const;
