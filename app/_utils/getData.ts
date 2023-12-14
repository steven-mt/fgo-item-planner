import {
  NiceItemAmount,
  NiceLvlUpMaterial,
  NiceServant,
} from "../_types/apiNiceSvtTypes";
import {
  AppendSkillNumKey,
  AscensionMaxLevels,
  ParsedAppendSkills,
  ParsedItemAmount,
  ParsedLvlUpMaterials,
  ParsedServant,
  ParsedSkill,
  SkillNum,
} from "../_types/servant";
import { SKILL_NUMBERS } from "./constants";
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
      const ascensionLevels: AscensionMaxLevels = {
        "0": 0,
        "1": 0,
        "2": 0,
        "3": 0,
        "4": 0,
      };

      Object.entries(atlasServant.ascensionAdd.lvMax.ascension).map(
        ([ascLvl, maxLvl]) => {
          if (
            ascLvl === "0" ||
            ascLvl === "1" ||
            ascLvl === "2" ||
            ascLvl === "3" ||
            ascLvl === "4"
          ) {
            switch (ascLvl) {
              case "0":
                ascensionLevels[ascLvl] = maxLvl;
                break;
              case "1":
                ascensionLevels[ascLvl] = maxLvl;
                break;
              case "2":
                ascensionLevels[ascLvl] = maxLvl;
                break;
              case "3":
                ascensionLevels[ascLvl] = maxLvl;
                break;
              case "4":
                ascensionLevels[ascLvl] = maxLvl;
                break;
            }
          }
        },
      );

      const appendSkills: ParsedAppendSkills = {
        "100": null,
        "101": null,
        "102": null,
      };

      atlasServant.appendPassive.map((atlasAppend) => {
        let appendSkillNumKey: AppendSkillNumKey | null = null;

        if (
          atlasAppend.num === 100 ||
          atlasAppend.num === 101 ||
          atlasAppend.num === 102
        ) {
          switch (atlasAppend.num) {
            case 100:
              appendSkillNumKey = "100";
              break;
            case 101:
              appendSkillNumKey = "101";
              break;
            case 102:
              appendSkillNumKey = "102";
              break;
          }
        }

        if (appendSkillNumKey !== null) {
          appendSkills[appendSkillNumKey] = {
            name: atlasAppend.skill.name,
            detail: atlasAppend.skill.detail ?? "",
            icon: atlasAppend.skill.icon ?? "",
            unlockMaterials: parseItemAmount(atlasAppend.unlockMaterials),
          };
        }
      });

      return {
        id: atlasServant.id,
        collectionNo: atlasServant.collectionNo,
        name: atlasServant.name,
        className: atlasServant.className,
        atkBase: atlasServant.atkBase,
        hpBase: atlasServant.hpBase,
        atkGrowth: atlasServant.atkGrowth,
        hpGrowth: atlasServant.hpGrowth,
        expGrowth: atlasServant.expGrowth,

        ascensionLevels: ascensionLevels,

        ascensionMaterials: parseSkillMaterials(
          atlasServant.ascensionMaterials,
        ),

        skills: atlasServant.skills.map<ParsedSkill>((niceSkill) => {
          let skillNum: SkillNum = null;

          for (const number of SKILL_NUMBERS) {
            if (niceSkill.num === number) skillNum = number;
          }

          return {
            num: skillNum,
            name: niceSkill.name,
            detail: niceSkill.detail ?? "",
            icon: niceSkill.icon ?? "",
            cooldown: niceSkill.coolDown,
          };
        }),

        skillMaterials: parseSkillMaterials(atlasServant.skillMaterials),

        appendSkills: appendSkills,

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
