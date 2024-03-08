import { PAGE_ITEMS } from "../_utils/constants";
import { ExpCard, ParsedItem } from "./material";
import { AscensionLevel, AscensionMaxLevels } from "./servant";

export type Page = (typeof PAGE_ITEMS)[number];

export type Priority = null | "Low" | "Medium" | "High";

interface BaseCardData {
  cardID: number;
  priority: Priority;
  level: { from: number | null; to: number | null };
  ascension: { from: number | null; to: number | null };
  skill1: { from: number | null; to: number | null };
  skill2: { from: number | null; to: number | null };
  skill3: { from: number | null; to: number | null };
  append1: { from: number | null; to: number | null };
  append2: { from: number | null; to: number | null };
  append3: { from: number | null; to: number | null };
}

interface EmptyCard extends BaseCardData {
  servantID: null;
}

interface FilledCard extends BaseCardData {
  servantID: number;
  ascensionLevels: AscensionMaxLevels;
}

export type CardData = EmptyCard | FilledCard;

export type PlannerState = CardData[];

type ActionServantChange = "servantChange";
type ActionPriorityChange = "priorityChange";
export type ActionLevelChange = "levelFrom" | "levelTo";
export type ActionAscensionChange = "ascensionFrom" | "ascensionTo";
export type ActionSkillChange =
  | "skill1From"
  | "skill1To"
  | "skill2From"
  | "skill2To"
  | "skill3From"
  | "skill3To";
export type ActionAppendChange =
  | "append1From"
  | "append1To"
  | "append2From"
  | "append2To"
  | "append3From"
  | "append3To";
type ActionAddServant = "addServant";
type ActionRemoveServant = "removeServant";
type ActionMoveServant = "moveServant";

export type Action =
  | {
      type: ActionServantChange;
      cardID: number;
      newServantID: number;
      newAscensionLevels: AscensionMaxLevels;
    }
  | {
      type: ActionServantChange;
      cardID: number;
      newServantID: null;
    }
  | { type: ActionPriorityChange; cardID: number; newPriority: Priority }
  | { type: ActionLevelChange; cardID: number; newLevel: number | null }
  | {
      type: ActionAscensionChange;
      cardID: number;
      newAscensionLevel: AscensionLevel | null;
    }
  | { type: ActionSkillChange; cardID: number; newSkillLevel: number | null }
  | { type: ActionAppendChange; cardID: number; newAppendLevel: number | null }
  | { type: ActionAddServant; newCardID: number }
  | { type: ActionRemoveServant; cardID: number }
  | {
      type: ActionMoveServant;
      cardID: number;
      direction: "forward" | "backward";
    };

export type MaterialUse = "ascension" | "grail" | "skill" | "append";

export type ItemRequirements = {
  item: ParsedItem;
  amount: number;
  use: MaterialUse;
}[];

export type ExpRequirements = {
  expCard: ExpCard;
  amount: number;
}[];

export interface CombinedRequirements {
  items: {
    item: ParsedItem;
    totalAmount: number;
    uses: { [use in MaterialUse]?: number };
  }[];
  expCards: { card: ExpCard; amount: number }[];
}

export interface CardMaterials {
  cardID: number;
  materials: CombinedRequirements;
}

export type OwnedMaterials = {
  id: number;
  amount: number;
}[];
