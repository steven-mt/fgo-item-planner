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
  id: number;
  name: string;
  className: string;
  atkBase: number;
  hpBase: number;
  atkGrowth: number[];
  hpGrowth: number[];
  expGrowth: number[];
  ascensionLevels: {
    [level: string]: number;
  };
  ascensionMaterials: ParsedLvlUpMaterials;
  skills: {
    num: number;
    name: string;
    detail: string;
    icon: string;
    cooldown: number[];
    strengthStatus: number;
  }[];
  skillMaterials: ParsedLvlUpMaterials;
  appendSkills: {
    name: string;
    detail: string;
    icon: string;
    unlockMaterials: ParsedItemAmount[];
  }[];
  appendSkillMaterials: ParsedLvlUpMaterials;
  costumeMaterials: ParsedLvlUpMaterials;
  faces: { [levelOrCostumeID: string]: string };
}
