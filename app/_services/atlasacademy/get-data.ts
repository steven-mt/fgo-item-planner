import {
  NiceItemAmount,
  NiceLvlUpMaterial,
  NiceServant,
} from "@/app/_types/atlas-nice";
import {
  ParsedItemAmount,
  ParsedLvlUpMaterials,
  ParsedServant,
  ascensionMaxLevelsRecordSchema,
  parsedAppendSkillRecordSchema,
  parsedServantSchema,
  parsedSkillArraySchema,
} from "@/app/_types/servant";
import { fetchWithRetry } from "@/app/_utils";
import { ATLAS_JP_SVT_URL, ATLAS_NA_SVT_URL } from "@/app/_utils/constants";

const fetchApiData = async (url: string) => {
  try {
    const response = await fetchWithRetry(url, 5, 1000, { cache: "no-store" });
    const data = await response.json();

    return data;
  } catch (error) {
    console.group("Fetch API error: ");
    if (error instanceof Error) console.log(error.message);
    else console.log(error);
    console.groupEnd();
  }
};

export const getData = async (): Promise<ParsedServant[]> => {
  const jpAtlasServants = (await fetchApiData(
    ATLAS_JP_SVT_URL,
  )) as NiceServant[];

  const naAtlasServants = (await fetchApiData(
    ATLAS_NA_SVT_URL,
  )) as NiceServant[];

  const parseItemAmount = (
    niceItemAmountArray: NiceItemAmount[],
  ): ParsedItemAmount[] => {
    return niceItemAmountArray.map<ParsedItemAmount>((niceItemAmount) => ({
      item: {
        id: niceItemAmount.item.id,
        name: niceItemAmount.item.name,
        icon: niceItemAmount.item.icon,
      },
      amount: niceItemAmount.amount,
    }));
  };

  const parseSkillMaterials = (materials: {
    [k: string]: NiceLvlUpMaterial;
  }): ParsedLvlUpMaterials => {
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
