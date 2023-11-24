import type {
  NiceItemAmount,
  NiceLvlUpMaterial,
  NiceServant,
} from "../_types/apiNiceSvtTypes";
import type {
  ParsedItemAmount,
  ParsedLvlUpMaterials,
  ParsedServant,
} from "../_types/types";
import { fetchWithRetry, isEmpty } from "./utils";

const jpAtlasSvtUrl =
  "https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json";
const naAtlasSvtUrl = "https://api.atlasacademy.io/export/NA/nice_servant.json";

const fetchApiData = async (url: string) => {
  try {
    const response = await fetchWithRetry(url, 5, 1000, { cache: "no-store" });
    const data = await response.json();

    if (isEmpty(data)) throw new Error("data is empty");

    return data;
  } catch (error) {
    console.group("Fetch error: ");
    if (error instanceof Error) console.log(error.message);
    else console.log(error);
    console.groupEnd();
  }
};

export const getData = async () => {
  const jpAtlasServants = (await fetchApiData(jpAtlasSvtUrl)) as NiceServant[];

  const naAtlasServants = (await fetchApiData(naAtlasSvtUrl)) as NiceServant[];

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
      return {
        id: atlasServant.id,
        name: atlasServant.name,
        className: atlasServant.className,
        atkBase: atlasServant.atkBase,
        hpBase: atlasServant.hpBase,
        atkGrowth: atlasServant.atkGrowth,
        hpGrowth: atlasServant.hpGrowth,
        expGrowth: atlasServant.expGrowth,

        ascensionLevels: Object.fromEntries(
          Object.entries(atlasServant.ascensionAdd.lvMax.ascension).map(
            ([ascensionLevel, maxLvl]) => [ascensionLevel, maxLvl],
          ),
        ),

        ascensionMaterials: parseSkillMaterials(
          atlasServant.ascensionMaterials,
        ),

        skills: atlasServant.skills.map((niceSkill) => ({
          num: niceSkill.num!,
          name: niceSkill.name,
          detail: niceSkill.detail!,
          icon: niceSkill.icon!,
          cooldown: niceSkill.coolDown,
          strengthStatus: niceSkill.strengthStatus!,
        })),

        skillMaterials: parseSkillMaterials(atlasServant.skillMaterials),

        appendSkills: atlasServant.appendPassive.map((appendSkill) => ({
          name: appendSkill.skill.name,
          detail: appendSkill.skill.detail!,
          icon: appendSkill.skill.icon!,
          unlockMaterials: parseItemAmount(appendSkill.unlockMaterials),
        })),

        appendSkillMaterials: parseSkillMaterials(
          atlasServant.appendSkillMaterials,
        ),

        costumeMaterials: parseSkillMaterials(atlasServant.costumeMaterials),

        faces: {
          ...atlasServant.extraAssets.faces.ascension,
          ...atlasServant.extraAssets.faces.costume,
        },
      };
    });
  };

  const parsedJPSvts = parseServant(jpAtlasServants) as ParsedServant[];

  const parsedNASvts = parseServant(naAtlasServants) as ParsedServant[];

  const mergedSvt = parsedJPSvts.map((parsedJPSvt) => {
    const foundNASvt = parsedNASvts.find(
      (parsedNASvt) => parsedNASvt.id === parsedJPSvt.id,
    );

    return foundNASvt ?? parsedJPSvt;
  });

  return mergedSvt;
};
