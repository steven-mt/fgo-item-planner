"use client";

import { usePlannerStateContext } from "@/app/_context/usePlannerStateContext";
import { Action, CardMaterials, PlannerState } from "@/app/_types/planner";
import { Add } from "@mui/icons-material";
import {
  Card,
  CardContent,
  IconButton,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import React, { memo } from "react";
import AutoSizer from "react-virtualized-auto-sizer";
import { FixedSizeList } from "react-window";
import { ParsedServant } from "../../_types/servant";
import { InputCard } from "./InputCard";

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

export const Planner = ({
  allSvtData,
  plannerMats,
}: {
  allSvtData: ParsedServant[];
  plannerMats: CardMaterials[];
}) => {
  const { plannerState, dispatch } = usePlannerStateContext();

  return (
    <CardList
      plannerState={plannerState}
      plannerMats={plannerMats}
      allServants={allSvtData}
      dispatch={dispatch}
    />
  );
};
