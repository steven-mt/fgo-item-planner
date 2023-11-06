import { mkdir, writeFile } from "node:fs";
import { readFile } from "node:fs/promises";
import { dirname } from "path";
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

const outDir = `${process.cwd()}/build/data`;
const jpAtlasSvtPath = `${outDir}/atlas_servant_jp.json`;
const jpParsedSvtPath = `${outDir}/parsed_servant_jp.json`;
const naAtlasSvtPath = `${outDir}/atlas_servant_na.json`;
const naParsedSvtPath = `${outDir}/parsed_servant_na.json`;

const fetchApiData = async (url: string) => {
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

const getFromFile = async (path: string) => {
  try {
    const data = JSON.parse(await readFile(path, { encoding: "utf-8" }));

    if (isEmpty(data))
      throw new Error(`error: empty object in file at ${path}`);

    console.log(`file found in ${path}, using file`);

    return data;
  } catch (error) {
    process.stdout.write("readFile error: ");
    if (error instanceof Error) console.log(error.message);
    else console.log(error);

    return null;
  }
};

const saveToFile = (path: string, data: any) => {
  try {
    mkdir(dirname(path), { recursive: true }, (err) => {
      if (err) throw err;

      const writeData = JSON.stringify(data);

      writeFile(path, writeData, (err) => {
        if (err) throw err;

        const writeDataLength = writeData.length;

        console.log(
          `saved file to ${path}\nstring length: ${writeData.length}\n${
            writeDataLength < 50 ? `${writeData}\n` : ""
          }object length: ${Object.keys(data).length}`,
        );
      });
    });
  } catch (error) {
    process.stdout.write("error saving file: ");
    if (error instanceof Error) console.log(error.message);
    else console.log(error);
  }
};

const getFileOrFallback = async (
  path: string,
  fallback: () => any,
  isFallbackAsync: boolean,
) => {
  const fileData = await getFromFile(path);

  if (fileData) {
    return fileData;
  } else {
    const data = isFallbackAsync ? await fallback() : fallback();
    saveToFile(path, data);
    return data;
  }
};

export const getData = async () => {
  const jpAtlasServants = (await getFileOrFallback(
    jpAtlasSvtPath,
    () => {
      return fetchApiData(jpAtlasSvtUrl);
    },
    true,
  )) as NiceServant[];

  const naAtlasServants = (await getFileOrFallback(
    naAtlasSvtPath,
    () => {
      return fetchApiData(naAtlasSvtUrl);
    },
    true,
  )) as NiceServant[];

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

  const parsedJPSvt = (await getFileOrFallback(
    jpParsedSvtPath,
    () => parseServant(jpAtlasServants),
    false,
  )) as ParsedServant[];

  const parsedNASvt = (await getFileOrFallback(
    naParsedSvtPath,
    () => parseServant(naAtlasServants),
    false,
  )) as ParsedServant[];

  return {
    parsedJPSvt: parsedJPSvt,
    parsedNASvt: parsedNASvt,
  };
};
