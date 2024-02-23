"use client";

import { Action, CardData, PlannerState } from "@/app/_types/planner";

import {
  MAX_ASCENSION_LEVEL,
  MAX_SERVANT_LEVEL,
  MIN_ASCENSION_LEVEL,
  MIN_SERVANT_LEVEL,
} from "@/app/_utils/constants";
import { Add } from "@mui/icons-material";
import {
  Autocomplete,
  Avatar,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import Image from "next/image";
import React, { memo, useEffect, useReducer, useState } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import {
  AscensionLevel,
  AscensionMaxLevels,
  ParsedServant,
} from "../../_types/servant";
import { AppendLevelInput } from "./AppendLevelInput";
import { AscensionLevelInput } from "./AscensionLevelInput";
import { ServantLevelInput } from "./ServantLevelInput";
import { SkillLevelInput } from "./SkillLevelInput";

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
  minAscLevel: AscensionLevel,
  maxAscLevel: AscensionLevel,
  minServantLevel: number,
  maxServantLevel: number,
) => {
  const minLevel =
    ascensionLevel === minAscLevel
      ? minServantLevel
      : ascensionMap[(ascensionLevel - 1) as AscensionLevel];

  const maxLevel =
    ascensionLevel === maxAscLevel
      ? maxServantLevel
      : ascensionMap[ascensionLevel];

  return { minLevel, maxLevel };
};

const initialState: PlannerState = [initialCardData];

const reducer = (state: PlannerState, action: Action): PlannerState => {
  switch (action.type) {
    case "addServant":
      return [...state, { ...initialCardData, cardID: action.newCardID }];
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
            MIN_ASCENSION_LEVEL,
            MAX_ASCENSION_LEVEL,
            MIN_SERVANT_LEVEL,
            MAX_SERVANT_LEVEL,
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
            MIN_ASCENSION_LEVEL,
            MAX_ASCENSION_LEVEL,
            MIN_SERVANT_LEVEL,
            MAX_SERVANT_LEVEL,
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

const LevelInputSection = ({
  sectionLabel,
  children,
}: {
  sectionLabel: string;
  children: React.ReactNode;
}) => (
  <Box display="flex" flexDirection="column" gap={2}>
    <Typography variant="body1" component="h6">
      {sectionLabel}
    </Typography>

    <Grid container spacing={2}>
      {children}
    </Grid>
  </Box>
);

const InputCard = memo(
  ({
    allServants,
    cardData,
    dispatch,
  }: {
    allServants: ParsedServant[];
    cardData: CardData;
    dispatch: React.Dispatch<Action>;
  }) => {
    const selectedServant = allServants.find(
      (servant) => servant.id === cardData.servantID,
    );
    const currentSkills = selectedServant?.skills;
    const currentAppendSkills = selectedServant?.appendSkills;

    return (
      <Card variant="outlined">
        <CardContent sx={{ display: "flex", flexDirection: "column", gap: 2 }}>
          <Box sx={{ display: "flex", gap: 1 }}>
            <Avatar
              variant="square"
              src={selectedServant ? selectedServant.faces["1"] : ""}
              sx={{ width: 90, height: 90 }}
            />

            <Box
              sx={{
                flex: 1,
                display: "flex",
                flexDirection: "column",
                gap: 1,
              }}
            >
              <Autocomplete
                size="small"
                autoComplete
                autoHighlight
                options={allServants}
                getOptionLabel={(option) => option.name}
                renderOption={(props, option) => (
                  <Box
                    {...props}
                    key={option.id}
                    component="li"
                    sx={{ "& > img": { mr: 2, flexShrink: 0 } }}
                  >
                    <Image
                      key={option.id}
                      src={option.faces[1]}
                      width={32}
                      height={32}
                      alt=""
                    />
                    {option.name}
                  </Box>
                )}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    label="Name"
                    inputProps={{
                      ...params.inputProps,
                      autoComplete: "new-password",
                    }}
                  />
                )}
                onChange={(_event, value, _reason) => {
                  value
                    ? dispatch({
                        type: "servantChange",
                        cardID: cardData.cardID,
                        newServantID: value.id,
                        newAscensionLevels: value.ascensionLevels,
                      })
                    : dispatch({
                        type: "servantChange",
                        cardID: cardData.cardID,
                        newServantID: value,
                      });
                }}
              />

              <Autocomplete
                size="small"
                options={["low", "high"]}
                renderInput={(params) => (
                  <TextField {...params} label="Priority" />
                )}
              />
            </Box>
          </Box>

          <Grid container spacing={2}>
            <Grid item xs={4} display="flex" flexDirection="column" gap={2}>
              <Typography variant="body1" component="h6">
                Level
              </Typography>
              <Box sx={{ display: "flex" }}>
                <ServantLevelInput
                  label="From"
                  cardData={cardData}
                  actionType="levelFrom"
                  dispatch={dispatch}
                />
                <ServantLevelInput
                  label="To"
                  cardData={cardData}
                  actionType="levelTo"
                  dispatch={dispatch}
                />
              </Box>
            </Grid>

            <Grid item xs={4} display="flex" flexDirection="column" gap={2}>
              <Typography variant="body1" component="h6">
                Ascension
              </Typography>
              <Box sx={{ display: "flex" }}>
                <AscensionLevelInput
                  label="From"
                  cardData={cardData}
                  actionType="ascensionFrom"
                  dispatch={dispatch}
                />
                <AscensionLevelInput
                  label="To"
                  cardData={cardData}
                  actionType="ascensionTo"
                  dispatch={dispatch}
                />
              </Box>
            </Grid>

            <Grid item xs={12}>
              <LevelInputSection sectionLabel="Skills">
                <Grid item xs={4} display="flex" flexDirection="row">
                  <SkillLevelInput
                    label="From"
                    cardData={cardData}
                    skills={currentSkills}
                    actionType="skill1From"
                    dispatch={dispatch}
                  />
                  <SkillLevelInput
                    label="To"
                    cardData={cardData}
                    skills={currentSkills}
                    actionType="skill1To"
                    dispatch={dispatch}
                  />
                </Grid>

                <Grid item xs={4} display="flex" flexDirection="row">
                  <SkillLevelInput
                    label="From"
                    cardData={cardData}
                    skills={currentSkills}
                    actionType="skill2From"
                    dispatch={dispatch}
                  />
                  <SkillLevelInput
                    label="To"
                    cardData={cardData}
                    skills={currentSkills}
                    actionType="skill2To"
                    dispatch={dispatch}
                  />
                </Grid>

                <Grid item xs={4} display="flex" flexDirection="row">
                  <SkillLevelInput
                    label="From"
                    cardData={cardData}
                    skills={currentSkills}
                    actionType="skill3From"
                    dispatch={dispatch}
                  />
                  <SkillLevelInput
                    label="To"
                    cardData={cardData}
                    skills={currentSkills}
                    actionType="skill3To"
                    dispatch={dispatch}
                  />
                </Grid>
              </LevelInputSection>
            </Grid>

            <Grid item xs={12}>
              <LevelInputSection sectionLabel="Append Skills">
                <Grid item xs={4} display="flex" flexDirection="row">
                  <AppendLevelInput
                    label="From"
                    cardData={cardData}
                    appendSkills={currentAppendSkills}
                    actionType="append1From"
                    dispatch={dispatch}
                  />
                  <AppendLevelInput
                    label="To"
                    cardData={cardData}
                    appendSkills={currentAppendSkills}
                    actionType="append1To"
                    dispatch={dispatch}
                  />
                </Grid>

                <Grid item xs={4} display="flex" flexDirection="row">
                  <AppendLevelInput
                    label="From"
                    cardData={cardData}
                    appendSkills={currentAppendSkills}
                    actionType="append2From"
                    dispatch={dispatch}
                  />
                  <AppendLevelInput
                    label="To"
                    cardData={cardData}
                    appendSkills={currentAppendSkills}
                    actionType="append2To"
                    dispatch={dispatch}
                  />
                </Grid>

                <Grid item xs={4} display="flex" flexDirection="row">
                  <AppendLevelInput
                    label="From"
                    cardData={cardData}
                    appendSkills={currentAppendSkills}
                    actionType="append3From"
                    dispatch={dispatch}
                  />
                  <AppendLevelInput
                    label="To"
                    cardData={cardData}
                    appendSkills={currentAppendSkills}
                    actionType="append3To"
                    dispatch={dispatch}
                  />
                </Grid>
              </LevelInputSection>
            </Grid>
          </Grid>

          {/* TODO: add exp and mats */}
        </CardContent>
      </Card>
    );
  },
);
InputCard.displayName = "InputCard";

const AddCard = ({
  plannerState,
  dispatch,
}: {
  plannerState: PlannerState;
  dispatch: React.Dispatch<Action>;
}) => {
  const getNewCardID = (cardArray: PlannerState) => {
    let newCardID = 0;

    cardArray.forEach((cardData) => {
      if (cardData.cardID === newCardID) newCardID++;
    });

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

const CARD_HEIGHT = 418;
const ROW_GAP = 16;

const Row = memo(
  ({
    data,
    index,
    style,
  }: {
    data: {
      itemsPerRow: number;
      plannerState: PlannerState;
      allServants: ParsedServant[];
      dispatch: React.Dispatch<Action>;
    };
    index: number;
    style: React.CSSProperties;
  }) => {
    const { itemsPerRow, plannerState, allServants, dispatch } = data;

    const items = [];
    const fromIndex = index * itemsPerRow;
    const toIndex = Math.min(fromIndex + itemsPerRow, plannerState.length + 1);

    for (let i = fromIndex; i < toIndex; i++) {
      if (i >= plannerState.length) break;

      const svtInput = plannerState[i];

      items.push(
        <div key={i} className="h-fit flex-1 px-1">
          <InputCard
            allServants={allServants}
            cardData={svtInput}
            dispatch={dispatch}
          />
        </div>,
      );
    }

    if (toIndex === plannerState.length + 1) {
      items.push(
        <div key={toIndex} className="h-full flex-1 px-1 py-2">
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

const CardGrid = ({
  plannerState,
  allServants,
  dispatch,
}: {
  plannerState: PlannerState;
  allServants: ParsedServant[];
  dispatch: React.Dispatch<Action>;
}) => {
  const theme = useTheme();

  const mdBreakpoint = useMediaQuery(theme.breakpoints.up("md"));

  const itemsPerRow = mdBreakpoint ? 2 : 1;

  return (
    <>
      <AutoSizer>
        {({ height, width }) => {
          const rowCount = Math.ceil((plannerState.length + 1) / itemsPerRow);

          const itemData = { itemsPerRow, plannerState, allServants, dispatch };

          return (
            <FixedSizeList
              height={height}
              itemCount={rowCount}
              itemData={itemData}
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

export const Planner = () => {
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

  return (
    <>
      {allServants ? (
        <CardGrid
          plannerState={plannerState}
          allServants={allServants}
          dispatch={dispatch}
        />
      ) : (
        <div>loading...</div>
      )}
    </>
  );
};
