import {
  NiceItemAmount,
  NiceLvlUpMaterial,
  NiceServant,
} from "@/app/_types/atlas-nice";
import {
  ParsedServant,
  SvtItemAmount,
  SvtLvlUpMaterials,
  ascensionMaxLevelsRecordSchema,
  parsedAppendSkillRecordSchema,
  parsedServantSchema,
  parsedSkillArraySchema,
} from "@/app/_types/servant";
import { fetchApiData } from "@/app/_utils";
import { ATLAS_JP_SVT_URL, ATLAS_NA_SVT_URL } from "@/app/_utils/constants";

export const getData = async (): Promise<ParsedServant[]> => {
  const jpAtlasServants = (await fetchApiData(
    ATLAS_JP_SVT_URL,
  )) as NiceServant[];

  const naAtlasServants = (await fetchApiData(
    ATLAS_NA_SVT_URL,
  )) as NiceServant[];

  const parseItemAmount = (
    niceItemAmountArray: NiceItemAmount[],
  ): SvtItemAmount[] => {
    return niceItemAmountArray.map<SvtItemAmount>((niceItemAmount) => ({
      id: niceItemAmount.item.id,
      amount: niceItemAmount.amount,
    }));
  };

  const parseSkillMaterials = (materials: {
    [k: string]: NiceLvlUpMaterial;
  }): SvtLvlUpMaterials => {
    return Object.fromEntries(
      Object.entries(materials).map(([lvl, niceLvlUpMaterial]) => [
        lvl,
        {
          items: parseItemAmount(niceLvlUpMaterial.items),
          qp: niceLvlUpMaterial.qp,
        },
      ]),
    );
  };

  const parseServant = (atlasServants: NiceServant[]) => {
    return atlasServants.map<ParsedServant>((atlasServant) => {
      const parsedAppendSkills = {};
      atlasServant.appendPassive.forEach((atlasAppend) => {
        Object.assign(parsedAppendSkills, {
          [atlasAppend.num]: {
            name: atlasAppend.skill.name,
            detail: atlasAppend.skill.detail ?? "",
            icon: atlasAppend.skill.icon ?? "",
            unlockMaterials: parseItemAmount(atlasAppend.unlockMaterials),
          },
        });
      });

      return parsedServantSchema.parse({
        id: atlasServant.id,
        collectionNo: atlasServant.collectionNo,
        name: atlasServant.name,
        className: atlasServant.className,
        rarity: atlasServant.rarity,
        atkBase: atlasServant.atkBase,
        hpBase: atlasServant.hpBase,
        atkGrowth: atlasServant.atkGrowth,
        hpGrowth: atlasServant.hpGrowth,
        expGrowth: atlasServant.expGrowth,

        ascensionLevels: ascensionMaxLevelsRecordSchema.parse(
          atlasServant.ascensionAdd.lvMax.ascension,
        ),

        ascensionMaterials: parseSkillMaterials(
          atlasServant.ascensionMaterials,
        ),

        skills: parsedSkillArraySchema.parse(
          atlasServant.skills.map((atlasSkill) => {
            return {
              num: atlasSkill.num,
              name: atlasSkill.name,
              detail: atlasSkill.detail ?? "",
              icon: atlasSkill.icon ?? "",
              cooldown: atlasSkill.coolDown,
            };
          }),
        ),

        skillMaterials: parseSkillMaterials(atlasServant.skillMaterials),

        appendSkills: parsedAppendSkillRecordSchema.parse(parsedAppendSkills),

        appendSkillMaterials: parseSkillMaterials(
          atlasServant.appendSkillMaterials,
        ),

        costumeMaterials: parseSkillMaterials(atlasServant.costumeMaterials),

        faces: {
          ...atlasServant.extraAssets.faces.ascension,
          ...atlasServant.extraAssets.faces.costume,
        },
      });
    });
  };

  const mergedAtlasServant: NiceServant[] = [];
  jpAtlasServants.forEach((jpAtlasSvt) => {
    if (jpAtlasSvt.type !== "enemyCollectionDetail") {
      const foundNAAtlasSvt = naAtlasServants.find(
        (naAtlasSvt) => naAtlasSvt.id === jpAtlasSvt.id,
      );

      mergedAtlasServant.push(foundNAAtlasSvt ?? jpAtlasSvt);
    }
  });

  const mergedSvt = parseServant(mergedAtlasServant).sort(
    (a, b) => a.collectionNo - b.collectionNo,
  );

  return mergedSvt;
};
