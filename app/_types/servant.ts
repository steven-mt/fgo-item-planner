import { z } from "zod";
import { zodNumericEnum, zodStrictRecord } from "../_utils";
import {
  APPEND_SKILL_NUMBERS,
  ASCENSION_LEVELS,
  SKILL_NUMBERS,
} from "../_utils/constants";

const svtItemAmountSchema = z.object({
  id: z.number(),
  amount: z.number(),
});
export type SvtItemAmount = z.infer<typeof svtItemAmountSchema>;

const svtItemsAndQPSchema = z.object({
  items: z.array(svtItemAmountSchema),
  qp: z.number(),
});
export type SvtItemsAndQP = z.infer<typeof svtItemsAndQPSchema>;

const levelOrCostumeIDSchema = z.string();
const svtLvlUpMaterialsSchema = z.record(
  levelOrCostumeIDSchema,
  svtItemsAndQPSchema,
);
export type SvtLvlUpMaterials = z.infer<typeof svtLvlUpMaterialsSchema>;

export const ascensionLevelSchema = zodNumericEnum(ASCENSION_LEVELS);
export type AscensionLevel = z.infer<typeof ascensionLevelSchema>;

export const ascensionMaxLevelsRecordSchema = zodStrictRecord(
  ascensionLevelSchema,
  z.number(),
);
export type AscensionMaxLevels = z.infer<typeof ascensionMaxLevelsRecordSchema>;

const skillNumberSchema = zodNumericEnum(SKILL_NUMBERS);
const svtSkillSchema = z.object({
  num: skillNumberSchema,
  name: z.string(),
  detail: z.string(),
  icon: z.string().url(),
  cooldown: z.array(z.number().int()),
});
export const parsedSkillArraySchema = z.array(svtSkillSchema);
export type ParsedSkills = z.infer<typeof parsedSkillArraySchema>;

const appendSkillNumberSchema = zodNumericEnum(APPEND_SKILL_NUMBERS);
export type AppendSkillNumber = z.infer<typeof appendSkillNumberSchema>;

const appendSkillSchema = z.object({
  name: z.string(),
  detail: z.string(),
  icon: z.string().url(),
  unlockMaterials: z.array(svtItemAmountSchema),
});
export type ParsedAppendSkillData = z.infer<typeof appendSkillSchema>;

export const parsedAppendSkillRecordSchema = zodStrictRecord(
  appendSkillNumberSchema,
  appendSkillSchema,
);
export type ParsedAppendSkills = z.infer<typeof parsedAppendSkillRecordSchema>;

export const parsedServantSchema = z.object({
  /**
   * svt's internal ID. Note that this is different from the 1~300 IDs shown in
   * "Spirit Origin list", which is `.collectionNo`. This ID is unique accross
   * svt items (servants, CEs, EXPs, enemies, …)
   */
  id: z.number(),
  /**
   * The ID number shown in "Spirit Origin list". The community usually means
   * this number when they talk about servant or CE IDs.
   */
  collectionNo: z.number(),
  name: z.string(),
  className: z.string(),
  rarity: z.number(),
  atkBase: z.number(),
  hpBase: z.number(),
  /**
   * ATK value per level, including grail levels.
   */
  atkGrowth: z.array(z.number()),
  /**
   * HP value per level, including grail levels.
   */
  hpGrowth: z.array(z.number()),
  /**
   * Total EXP needed per level. Equivalent to the "Accumulated EXP" value when feeding CE into another CE.
   */
  expGrowth: z.array(z.number()),
  ascensionLevels: ascensionMaxLevelsRecordSchema,
  ascensionMaterials: svtLvlUpMaterialsSchema,
  skills: parsedSkillArraySchema,
  skillMaterials: svtLvlUpMaterialsSchema,
  appendSkills: parsedAppendSkillRecordSchema,
  appendSkillMaterials: svtLvlUpMaterialsSchema,
  costumeMaterials: svtLvlUpMaterialsSchema,
  /**
   * Face images for ascensions and costumes.
   */
  faces: z.record(levelOrCostumeIDSchema, z.string()),
});
export type ParsedServant = z.infer<typeof parsedServantSchema>;
