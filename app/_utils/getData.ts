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
import { isEmpty } from "./utils";

const jpAtlasSvtUrl =
  "https://api.atlasacademy.io/export/JP/nice_servant_lang_en.json";
const naAtlasSvtUrl = "https://api.atlasacademy.io/export/NA/nice_servant.json";

const fetchApiData = async (url: string) => {
  console.log(`fetching from ${url}`);

  try {
    const response = await fetch(url, { cache: "no-store" });
    const data = await response.json();

    if (isEmpty(data)) throw new Error("data is empty");

    console.log("fetch success");

    return data;
  } catch (error) {
    process.stdout.write("fetch error: ");
    if (error instanceof Error) console.log(error.message);
    else console.log(error);
  }
};

export const getData = async () => {
  const jpAtlasServants = (await fetchApiData(jpAtlasSvtUrl)) as NiceServant[];

  const naAtlasServants = (await fetchApiData(naAtlasSvtUrl)) as NiceServant[];

  const parseItemAmount = (
    niceItemAmountArray: NiceItemAmount[],
  ): ParsedItemAmount => {
    return Object.fromEntries(
      niceItemAmountArray.map((niceItemAmount) => [
        niceItemAmount.item.name,
        {
          amount: niceItemAmount.amount,
          icon: niceItemAmount.item.icon,
        },
      ]),
    );
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

  const parsedJPSvt = parseServant(jpAtlasServants) as ParsedServant[];

  const parsedNASvt = parseServant(naAtlasServants) as ParsedServant[];

  return {
    parsedJPSvt: parsedJPSvt,
    parsedNASvt: parsedNASvt,
  };
};
