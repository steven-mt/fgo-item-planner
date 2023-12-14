import { AscensionLevel } from "../_types/servant";

export const MIN_SERVANT_LEVEL = 1 as const;
export const MAX_SERVANT_LEVEL = 120 as const;

export const MIN_ASCENSION_LEVEL: AscensionLevel = 0 as const;
export const MAX_ASCENSION_LEVEL: AscensionLevel = 4 as const;

export const MIN_SKILL_LEVEL = 1 as const;
export const MAX_SKILL_LEVEL = 10 as const;

export const MIN_APPEND_LEVEL = 0 as const;
export const MAX_APPEND_LEVEL = 10 as const;

export const SKILL_NUMBERS = [1, 2, 3] as const;

export const APPEND_SKILL_NUMBERS = [100, 101, 102] as const;

export const ASCENSION_LEVELS = [0, 1, 2, 3, 4] as const;
