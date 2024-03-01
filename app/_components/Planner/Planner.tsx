"use client";

import {
  Action,
  CardData,
  CardMaterials,
  Materials,
  PlannerState,
} from "@/app/_types/planner";

import { ExpCard, GrailCost, ParsedItem } from "@/app/_types/material";
import {
  EXP_4_ID,
  EXP_5_ID,
  GRAIL_ITEM_ID,
  MASH_SVT_ID,
  MAX_ASCENSION_LEVEL,
  MAX_SERVANT_LEVEL,
  MIN_ASCENSION_LEVEL,
  MIN_SERVANT_LEVEL,
  MIN_SKILL_LEVEL,
  QP_ITEM_ID,
} from "@/app/_utils/constants";
import { Add } from "@mui/icons-material";
import {
  Card,
  CardContent,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, {
  memo,
  useCallback,
  useEffect,
  useReducer,
  useState,
} from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import {
  AppendSkillNumber,
  AscensionLevel,
  AscensionMaxLevels,
  ParsedServant,
} from "../../_types/servant";
import { InputCard } from "./InputCard";

const initialCardData: CardData = {
  cardID: 0,
  servantID: null,
  priority: null,
  level: { from: null, to: null },
  ascension: { from: null, to: null },
  skill1: { from: null, to: null },
  skill2: { from: null, to: null },
  skill3: { from: null, to: null },
  append1: { from: null, to: null },
  append2: { from: null, to: null },
  append3: { from: null, to: null },
};

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

const initialState: PlannerState = [initialCardData];

const reducer = (state: PlannerState, action: Action): PlannerState => {
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

const AddCard = ({
  plannerState,
  dispatch,
}: {
  plannerState: PlannerState;
  dispatch: React.Dispatch<Action>;
}) => {
  const getNewCardID = (cardArray: PlannerState) => {
    let newCardID = 0;

    for (let index = 0; index < cardArray.length; index++) {
      if (
        cardArray.findIndex((cardData) => cardData.cardID === newCardID) === -1
      ) {
        break;
      }

      newCardID++;
    }

    return newCardID;
  };

  return (
    <Card
      sx={{
        height: "100%",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <CardContent sx={{ alignSelf: "center" }}>
        <IconButton
          sx={{
            backgroundColor: "primary.main",
            "&:hover, &.Mui-focusVisible": {
              backgroundColor: "primary.main",
            },
          }}
          onClick={() => {
            dispatch({
              type: "addServant",
              newCardID: getNewCardID(plannerState),
            });
          }}
        >
          <Add />
        </IconButton>
      </CardContent>
    </Card>
  );
};

// Virtualized grid of cards based on
// https://github.com/kpennell/nytairbnbbucketlist/commit/101a32bb0555f3a7cc29151de195882b249972e8
// from https://www.pluralsight.com/blog/data-professional/airnyt-react-virtualized-material-ui-cards-for-fast-lists

const CARD_HEIGHT = 706;
const ROW_GAP = 8;

const Row = memo(
  ({
    data,
    index,
    style,
  }: {
    data: {
      itemsPerRow: 1 | 2;
      totalItemCount: number;
      plannerState: PlannerState;
      plannerMats: CardMaterials[];
      allServants: ParsedServant[];
      dispatch: React.Dispatch<Action>;
    };
    index: number;
    style: React.CSSProperties;
  }) => {
    const {
      itemsPerRow,
      totalItemCount,
      plannerState,
      plannerMats,
      allServants,
      dispatch,
    } = data;

    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, totalItemCount);

    for (let i = fromIndex; i < toIndex; i++) {
      if (i >= plannerState.length) break;

      const cardData = plannerState[i];
      const mats = plannerMats.find(
        (cardMats) => cardMats.cardID === cardData.cardID,
      );

      items.push(
        <div key={i} className="h-full flex-1 px-1 py-1">
          <InputCard
            allServants={allServants}
            cardData={cardData}
            cardMaterials={mats}
            dispatch={dispatch}
          />
        </div>,
      );
    }

    const widthClass = itemsPerRow === 1 ? "flex-1" : "w-1/2";

    if (toIndex === totalItemCount) {
      items.push(
        <div key={toIndex} className={`h-full px-1 py-1 ${widthClass}`}>
          <AddCard
            key={toIndex}
            plannerState={plannerState}
            dispatch={dispatch}
          />
        </div>,
      );
    }

    return (
      <>
        <div style={style} className="flex items-center">
          {items}
        </div>
      </>
    );
  },
);
Row.displayName = "Row";

const CardList = ({
  plannerState,
  plannerMats,
  allServants,
  dispatch,
}: {
  plannerState: PlannerState;
  plannerMats: CardMaterials[];
  allServants: ParsedServant[];
  dispatch: React.Dispatch<Action>;
}) => {
  const totalItemCount = plannerState.length + 1;

  const theme = useTheme();

  const mdBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  const itemsPerRow = mdBreakpoint ? 2 : 1;

  return (
    <>
      <AutoSizer>
        {({ height, width }) => {
          const rowCount = Math.ceil(totalItemCount / itemsPerRow);

          return (
            <FixedSizeList
              height={height}
              itemCount={rowCount}
              itemData={{
                itemsPerRow,
                totalItemCount,
                plannerState,
                plannerMats,
                allServants,
                dispatch,
              }}
              itemSize={CARD_HEIGHT + ROW_GAP}
              width={width}
            >
              {Row}
            </FixedSizeList>
          );
        }}
      </AutoSizer>
    </>
  );
};

const addMats = (newMats: Materials, matList: Materials) => {
  const foundNewQPItem = newMats.items.find(
    (newItem) => newItem.item.id === QP_ITEM_ID,
  );

  if (foundNewQPItem) {
    matList.items.some((listItem, index) => {
      if (listItem.item.id !== QP_ITEM_ID) return false;

      matList.items[index].amount += foundNewQPItem.amount;
    });
  }

  newMats.expCards.forEach((newExpRequirement) => {
    const foundExpCardIndex = matList.expCards.findIndex(
      (expRequirement) => expRequirement.card.id === newExpRequirement.card.id,
    );

    if (foundExpCardIndex === -1) {
      matList.expCards.push(newExpRequirement);

      return;
    }

    matList.expCards[foundExpCardIndex].amount += newExpRequirement.amount;
  });

  newMats.items.forEach((newItemAndAmount) => {
    const foundItemAndAmount = matList.items.some(
      (itemAndAmount, itemAndAmountIndex) => {
        if (itemAndAmount.item.id !== newItemAndAmount.item.id) return false;

        matList.items[itemAndAmountIndex].amount += newItemAndAmount.amount;
        return true;
      },
    );

    if (foundItemAndAmount) return;

    matList.items.push(newItemAndAmount);
  });
};

export const Planner = ({
  itemData,
  expCardData,
  grailCostData,
}: {
  itemData: ParsedItem[];
  expCardData: ExpCard[];
  grailCostData: GrailCost;
}) => {
  const [plannerState, dispatch] = useReducer(reducer, initialState);

  const [allServants, setAllServants] = useState<ParsedServant[]>();

  useEffect(() => {
    const getData = async () => {
      const res = await fetch("/api/data");
      const data = (await res.json()) as ParsedServant[];
      setAllServants(data);
    };

    getData();
  }, []);

  const getExpMats = useCallback(
    (
      svtData: ParsedServant,
      expCardRarity: 4 | 5,
      from: number | null,
      to: number | null,
    ): Materials => {
      const materials: Materials = { items: [], expCards: [] };

      const fromLevel = from === null ? MIN_SERVANT_LEVEL : from;
      let toLevel = to === null ? MIN_SERVANT_LEVEL : to;

      // Only Mash cannot be leveled to 120 for now so limit level accordingly
      if (svtData.id === MASH_SVT_ID && toLevel > svtData.expGrowth.length)
        toLevel = svtData.expGrowth.length;

      if (fromLevel < toLevel) {
        const expRequired =
          svtData.expGrowth[toLevel - 1] - svtData.expGrowth[fromLevel - 1];

        const expCardID = expCardRarity === 4 ? EXP_4_ID : EXP_5_ID;

        const expCard = expCardData.find((expcard) => expcard.id === expCardID);

        if (expCard)
          materials.expCards.push({
            card: expCard,
            amount: Math.ceil(expRequired / expCard.expFeed),
          });
      }

      return materials;
    },
    [expCardData],
  );

  const getGrailMats = useCallback(
    (
      svtData: ParsedServant,
      from: number | null,
      to: number | null,
    ): Materials => {
      const materials: Materials = { items: [], expCards: [] };

      const fromLevel = from === null ? MIN_SERVANT_LEVEL : from;
      let toLevel = to === null ? MIN_SERVANT_LEVEL : to;

      const maxLevelNoGrail = svtData.ascensionLevels[4];

      if (toLevel <= maxLevelNoGrail) return materials;

      // set upper bound to maximum possible level using expGrowth array for Mash
      if (svtData.id === MASH_SVT_ID && toLevel > svtData.expGrowth.length)
        toLevel = svtData.expGrowth.length;

      if (fromLevel < toLevel) {
        const grailFrom =
          fromLevel > maxLevelNoGrail ? fromLevel : maxLevelNoGrail;

        let nextLvMax: number;

        for (const grailLevel of Object.values(grailCostData[svtData.rarity])) {
          nextLvMax = grailFrom + grailLevel.addLvMax;

          const qpCost = grailLevel.qp;
          if (qpCost > 0) {
            const foundItemData = itemData.find(
              (item) => item.id === QP_ITEM_ID,
            );
            if (foundItemData)
              materials.items.push({ item: foundItemData, amount: qpCost });
          }

          const foundGrailItem = itemData.find(
            (item) => item.id === GRAIL_ITEM_ID,
          );
          if (foundGrailItem)
            materials.items.push({ item: foundGrailItem, amount: 1 });

          if (nextLvMax > 100) {
            const coinID = svtData.appendSkills[100].unlockMaterials[0].id;
            const foundCoin = itemData.find((item) => item.id === coinID);
            if (foundCoin)
              materials.items.push({ item: foundCoin, amount: 30 });
          }

          if (nextLvMax >= toLevel) break;
        }
      }
      return materials;
    },
    [grailCostData, itemData],
  );

  const getAscensionMats = useCallback(
    (
      svtData: ParsedServant,
      from: number | null,
      to: number | null,
    ): Materials => {
      const materials: Materials = { items: [], expCards: [] };

      if (from === to) return materials;

      const fromLevel = from === null ? MIN_ASCENSION_LEVEL : from;
      const toLevel = to === null ? MIN_ASCENSION_LEVEL : to;

      if (fromLevel < toLevel) {
        for (let index = fromLevel; index < toLevel; index++) {
          // Exclude id for Mash who has no ascension materials
          if (svtData.id === MASH_SVT_ID) break;

          svtData.ascensionMaterials[index].items.forEach((newItem) => {
            const foundItemData = itemData.find(
              (item) => item.id === newItem.id,
            );
            if (foundItemData)
              materials.items.push({
                item: foundItemData,
                amount: newItem.amount,
              });
          });

          const qpCost = svtData.ascensionMaterials[index].qp;

          if (qpCost > 0) {
            const foundItemData = itemData.find(
              (item) => item.id === QP_ITEM_ID,
            );

            if (foundItemData)
              materials.items.push({ item: foundItemData, amount: qpCost });
          }
        }
      }
      return materials;
    },
    [itemData],
  );

  const getSkillMats = useCallback(
    (
      svtData: ParsedServant,
      from: number | null,
      to: number | null,
    ): Materials => {
      const materials: Materials = { items: [], expCards: [] };

      if (from === to) return materials;

      const fromLevel = from === null ? MIN_SKILL_LEVEL : from;
      const toLevel = to === null ? MIN_SKILL_LEVEL : to;

      if (fromLevel < toLevel) {
        for (let index = fromLevel; index < toLevel; index++) {
          svtData.skillMaterials[index].items.forEach((newItem) => {
            const foundItemData = itemData.find(
              (item) => item.id === newItem.id,
            );
            if (foundItemData)
              materials.items.push({
                item: foundItemData,
                amount: newItem.amount,
              });
          });

          const qpCost = svtData.skillMaterials[index].qp;
          if (qpCost > 0) {
            const foundItemData = itemData.find(
              (item) => item.id === QP_ITEM_ID,
            );
            if (foundItemData)
              materials.items.push({ item: foundItemData, amount: qpCost });
          }
        }
      }

      return materials;
    },
    [itemData],
  );

  const getAppendMats = useCallback(
    (
      svtData: ParsedServant,
      number: AppendSkillNumber,
      from: number | null,
      to: number | null,
    ): Materials => {
      const materials: Materials = { items: [], expCards: [] };

      if (from === to) return materials;

      const fromLevel = from === null ? MIN_ASCENSION_LEVEL : from;
      const toLevel = to === null ? MIN_ASCENSION_LEVEL : to;

      let startIndex = fromLevel;

      if (fromLevel === 0) {
        startIndex = 1;

        svtData.appendSkills[number].unlockMaterials.forEach((newItem) => {
          const foundItemData = itemData.find((item) => item.id === newItem.id);

          if (foundItemData)
            materials.items.push({
              item: foundItemData,
              amount: newItem.amount,
            });
        });
      }

      if (fromLevel < toLevel) {
        for (let index = startIndex; index < toLevel; index++) {
          svtData.appendSkillMaterials[index].items.forEach((newItem) => {
            const foundItemData = itemData.find(
              (item) => item.id === newItem.id,
            );
            if (foundItemData)
              materials.items.push({
                item: foundItemData,
                amount: newItem.amount,
              });
          });

          const qpCost = svtData.appendSkillMaterials[index].qp;
          if (qpCost > 0) {
            const foundItemData = itemData.find(
              (item) => item.id === QP_ITEM_ID,
            );
            if (foundItemData)
              materials.items.push({ item: foundItemData, amount: qpCost });
          }
        }
      }
      return materials;
    },
    [itemData],
  );

  const plannerMats: CardMaterials[] = [];

  if (allServants) {
    plannerState.forEach((cardData) => {
      if (cardData.servantID === null) return;

      const svtData = allServants.find((svt) => svt.id === cardData.servantID);
      if (!svtData) return;

      const totalMats: Materials = { items: [], expCards: [] };

      let newMats = getExpMats(
        svtData,
        5,
        cardData.level.from,
        cardData.level.to,
      );
      addMats(newMats, totalMats);

      newMats = getAscensionMats(
        svtData,
        cardData.ascension.from,
        cardData.ascension.to,
      );
      addMats(newMats, totalMats);

      newMats = getSkillMats(svtData, cardData.skill1.from, cardData.skill1.to);
      addMats(newMats, totalMats);
      newMats = getSkillMats(svtData, cardData.skill2.from, cardData.skill2.to);
      addMats(newMats, totalMats);
      newMats = getSkillMats(svtData, cardData.skill3.from, cardData.skill3.to);
      addMats(newMats, totalMats);

      newMats = getAppendMats(
        svtData,
        100,
        cardData.append1.from,
        cardData.append1.to,
      );
      addMats(newMats, totalMats);
      newMats = getAppendMats(
        svtData,
        101,
        cardData.append2.from,
        cardData.append2.to,
      );
      addMats(newMats, totalMats);
      newMats = getAppendMats(
        svtData,
        102,
        cardData.append3.from,
        cardData.append3.to,
      );
      addMats(newMats, totalMats);

      newMats = getGrailMats(svtData, cardData.level.from, cardData.level.to);
      addMats(newMats, totalMats);

      plannerMats.push({
        cardID: cardData.cardID,
        materials: totalMats,
      });
    });
  }

  return (
    <>
      {allServants ? (
        <CardList
          plannerState={plannerState}
          plannerMats={plannerMats}
          allServants={allServants}
          dispatch={dispatch}
        />
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};
