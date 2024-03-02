import { Action, PlannerState } from "@/app/_types/planner";
import { AscensionLevel, AscensionMaxLevels } from "@/app/_types/servant";
import {
  MAX_ASCENSION_LEVEL,
  MAX_SERVANT_LEVEL,
  MIN_ASCENSION_LEVEL,
  MIN_SERVANT_LEVEL,
} from "@/app/_utils/constants";
import { initialCardData } from "./initial-data";

const getAscensionFromLevel = (
  ascensionMap: AscensionMaxLevels,
  servantLevel: number,
) => {
  const ascensions = Object.keys(ascensionMap);

  for (const ascLevel of ascensions) {
    const ascLevelNumber = Number(ascLevel) as AscensionLevel;

    if (
      servantLevel <= ascensionMap[ascLevelNumber] &&
      ascLevelNumber < ascensions.length - 1
    )
      return ascLevelNumber;
    else if (ascLevelNumber === ascensions.length - 1) return ascLevelNumber;
  }
};

const getAscensionLevelLimits = (
  ascensionMap: AscensionMaxLevels,
  ascensionLevel: AscensionLevel,
) => {
  const minLevel =
    ascensionLevel === MIN_ASCENSION_LEVEL
      ? MIN_SERVANT_LEVEL
      : ascensionMap[(ascensionLevel - 1) as AscensionLevel];

  const maxLevel =
    ascensionLevel === MAX_ASCENSION_LEVEL
      ? MAX_SERVANT_LEVEL
      : ascensionMap[ascensionLevel];

  return { minLevel, maxLevel };
};

export const reducer = (state: PlannerState, action: Action): PlannerState => {
  switch (action.type) {
    case "addServant":
      return [...state, { ...initialCardData, cardID: action.newCardID }];
    case "removeServant":
      const result = state.filter(
        (cardData) => cardData.cardID !== action.cardID,
      );

      return result;
    case "moveServant":
      const cardIndex = state.findIndex(
        (cardData) => cardData.cardID === action.cardID,
      );

      if (cardIndex === -1) return state;

      switch (action.direction) {
        case "forward":
          if (cardIndex === state.length - 1) return state;

          if (
            state[cardIndex].servantID === null &&
            state[cardIndex + 1].servantID === null
          )
            return state;

          [state[cardIndex], state[cardIndex + 1]] = [
            state[cardIndex + 1],
            state[cardIndex],
          ];

          break;
        case "backward":
          if (cardIndex === 0) return state;

          if (
            state[cardIndex].servantID === null &&
            state[cardIndex - 1].servantID === null
          )
            return state;

          [state[cardIndex - 1], state[cardIndex]] = [
            state[cardIndex],
            state[cardIndex - 1],
          ];

          break;
      }

      return [...state];
    case "servantChange":
      return state.map((cardData) => {
        return cardData.cardID === action.cardID
          ? action.newServantID === null
            ? {
                ...cardData,
                servantID: action.newServantID,
              }
            : {
                ...cardData,
                servantID: action.newServantID,
                ascensionLevels: action.newAscensionLevels,
              }
          : cardData;
      });
    case "priorityChange":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? { ...cardData, priority: action.newPriority }
          : cardData,
      );
    case "levelFrom":
      return state.map((cardData) => {
        let calculatedAscension = cardData.ascension.from;

        const currentAscension = cardData.ascension.from ?? MIN_ASCENSION_LEVEL;

        // Only attempts to calculate the ascension level if the card has a
        // selected servant
        if (cardData.servantID !== null) {
          const ascensionLevelMap = cardData.ascensionLevels;

          const ascensionFromLevel = getAscensionFromLevel(
            ascensionLevelMap,
            action.newLevel ?? MIN_SERVANT_LEVEL,
          );

          if (
            typeof ascensionFromLevel !== "undefined" &&
            ascensionFromLevel !== currentAscension
          )
            calculatedAscension = ascensionFromLevel;
        }

        return cardData.cardID === action.cardID
          ? {
              ...cardData,
              level: { ...cardData.level, from: action.newLevel },
              ascension: { ...cardData.ascension, from: calculatedAscension },
            }
          : cardData;
      });
    case "levelTo":
      return state.map((cardData) => {
        // Do the same ascension level calculation for levelTo
        let calculatedAscension = cardData.ascension.to;

        const currentAscension = cardData.ascension.to ?? MIN_ASCENSION_LEVEL;

        if (cardData.servantID !== null) {
          const ascensionLevelMap = cardData.ascensionLevels;

          const ascensionFromLevel = getAscensionFromLevel(
            ascensionLevelMap,
            action.newLevel ?? MIN_SERVANT_LEVEL,
          );

          if (
            typeof ascensionFromLevel !== "undefined" &&
            currentAscension !== ascensionFromLevel
          )
            calculatedAscension = ascensionFromLevel;
        }

        return cardData.cardID === action.cardID
          ? {
              ...cardData,
              level: { ...cardData.level, to: action.newLevel },
              ascension: { ...cardData.ascension, to: calculatedAscension },
            }
          : cardData;
      });
    case "ascensionFrom":
      return state.map((cardData) => {
        let calculatedLevel = cardData.level.from;

        const currentLevel = cardData.level.from ?? MIN_SERVANT_LEVEL;

        if (cardData.servantID !== null) {
          const { minLevel, maxLevel } = getAscensionLevelLimits(
            cardData.ascensionLevels,
            action.newAscensionLevel ?? MIN_ASCENSION_LEVEL,
          );

          // Only assign the minimum required level for the ascension if the
          // current level is not in the range of levels for the ascension
          if (!(currentLevel >= minLevel && currentLevel <= maxLevel))
            calculatedLevel = minLevel;
        }

        return cardData.cardID === action.cardID
          ? {
              ...cardData,
              ascension: {
                ...cardData.ascension,
                from: action.newAscensionLevel,
              },
              level: { ...cardData.level, from: calculatedLevel },
            }
          : cardData;
      });
    case "ascensionTo":
      return state.map((cardData) => {
        let calculatedLevel = cardData.level.to;

        const currentLevel = cardData.level.to ?? MIN_SERVANT_LEVEL;

        if (cardData.servantID !== null) {
          const { minLevel, maxLevel } = getAscensionLevelLimits(
            cardData.ascensionLevels,
            action.newAscensionLevel ?? MIN_ASCENSION_LEVEL,
          );

          if (!(currentLevel >= minLevel && currentLevel <= maxLevel))
            calculatedLevel = minLevel;
        }

        return cardData.cardID === action.cardID
          ? {
              ...cardData,
              ascension: {
                ...cardData.ascension,
                to: action.newAscensionLevel,
              },
              level: { ...cardData.level, to: calculatedLevel },
            }
          : cardData;
      });
    case "skill1From":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? {
              ...cardData,
              skill1: { ...cardData.skill1, from: action.newSkillLevel },
            }
          : cardData,
      );
    case "skill1To":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? {
              ...cardData,
              skill1: { ...cardData.skill1, to: action.newSkillLevel },
            }
          : cardData,
      );
    case "skill2From":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? {
              ...cardData,
              skill2: { ...cardData.skill2, from: action.newSkillLevel },
            }
          : cardData,
      );
    case "skill2To":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? {
              ...cardData,
              skill2: { ...cardData.skill2, to: action.newSkillLevel },
            }
          : cardData,
      );
    case "skill3From":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? {
              ...cardData,
              skill3: { ...cardData.skill3, from: action.newSkillLevel },
            }
          : cardData,
      );
    case "skill3To":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? {
              ...cardData,
              skill3: { ...cardData.skill3, to: action.newSkillLevel },
            }
          : cardData,
      );
    case "append1From":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? {
              ...cardData,
              append1: { ...cardData.append1, from: action.newAppendLevel },
            }
          : cardData,
      );
    case "append1To":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? {
              ...cardData,
              append1: { ...cardData.append1, to: action.newAppendLevel },
            }
          : cardData,
      );
    case "append2From":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? {
              ...cardData,
              append2: { ...cardData.append2, from: action.newAppendLevel },
            }
          : cardData,
      );
    case "append2To":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? {
              ...cardData,
              append2: { ...cardData.append2, to: action.newAppendLevel },
            }
          : cardData,
      );
    case "append3From":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? {
              ...cardData,
              append3: { ...cardData.append3, from: action.newAppendLevel },
            }
          : cardData,
      );
    case "append3To":
      return state.map((cardData) =>
        cardData.cardID === action.cardID
          ? {
              ...cardData,
              append3: { ...cardData.append3, to: action.newAppendLevel },
            }
          : cardData,
      );
  }
};
