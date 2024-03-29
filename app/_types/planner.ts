import { AscensionLevel, AscensionMaxLevels } from "./servant";

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

export type ActionServantChange = "servantChange";
export type ActionPriorityChange = "priorityChange";
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
export type ActionAddServant = "addServant";

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
  | { type: ActionAddServant };
