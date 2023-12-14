import {
  APPEND_SKILL_NUMBERS,
  ASCENSION_LEVELS,
  SKILL_NUMBERS,
} from "../_utils/constants";

export type AscensionLevel = (typeof ASCENSION_LEVELS)[number];
export type AscensionLevelKey = `${AscensionLevel}`;

/**
 * Mapping of ascension levels to their respective maximum servant levels.
 */
export type AscensionMaxLevels = {
  [level in AscensionLevelKey]: number;
};

export type SkillNum = (typeof SKILL_NUMBERS)[number] | null;

export type ParsedSkill = {
  num: SkillNum;
  name: string;
  detail: string;
  icon: string;
  cooldown: number[];
};

export type AppendSkillNum = (typeof APPEND_SKILL_NUMBERS)[number];
export type AppendSkillNumKey = `${AppendSkillNum}`;
export type ParsedAppendSkillData = {
  name: string;
  detail: string;
  icon: string;
  unlockMaterials: ParsedItemAmount[];
} | null;
export type ParsedAppendSkills = {
  [key in AppendSkillNumKey]: ParsedAppendSkillData;
};

export interface ParsedItem {
  id: number;
  name: string;
  icon: string;
}

export interface ParsedItemAmount {
  item: ParsedItem;
  amount: number;
}

export interface ParsedLvlUpMaterials {
  [levelOrCostumeID: string]: {
    items: ParsedItemAmount[];
    qp: number;
  };
}

export interface ParsedServant {
  /**
   * svt's internal ID. Note that this is different from the 1~300 IDs shown in
   * "Spirit Origin list", which is `.collectionNo`. This ID is unique accross
   * svt items (servants, CEs, EXPs, enemies, …)
   */
  id: number;
  /**
   * The ID number shown in "Spirit Origin list". The community usually means
   * this number when they talk about servant or CE IDs.
   */
  collectionNo: number;
  name: string;
  className: string;
  atkBase: number;
  hpBase: number;
  /**
   * ATK value per level, including grail levels.
   */
  atkGrowth: number[];
  /**
   * HP value per level, including grail levels.
   */
  hpGrowth: number[];
  /**
   * Total EXP needed per level. Equivalent to the "Accumulated EXP" value when feeding CE into another CE.
   */
  expGrowth: number[];
  ascensionLevels: AscensionMaxLevels;
  ascensionMaterials: ParsedLvlUpMaterials;
  skills: ParsedSkill[];
  skillMaterials: ParsedLvlUpMaterials;
  appendSkills: ParsedAppendSkills;
  appendSkillMaterials: ParsedLvlUpMaterials;
  costumeMaterials: ParsedLvlUpMaterials;
  /**
   * Face images for ascensions and costumes.
   */
  faces: { [levelOrCostumeID: string]: string };
}
