"use client";

import { Action, ActionLevelChange, CardData } from "@/app/_types/planner";
import { MAX_SERVANT_LEVEL, MIN_SERVANT_LEVEL } from "@/app/_utils/constants";
import React, { useEffect, useState } from "react";
import { WideTooltip } from "../WideTooltip";
import { AscensionLevelTable } from "./AscensionLevelTable";
import { BaseLevelInput } from "./BaseLevelInput";

export const ServantLevelInput = ({
  cardData,
  label,
  actionType,
  dispatch,
}: {
  cardData: CardData;
  label: string;
  actionType: ActionLevelChange;
  dispatch: React.Dispatch<Action>;
}) => {
  const cardDataValue =
    actionType === "levelFrom" ? cardData.level.from : cardData.level.to;

  const displayValueFromCardData = cardDataValue
    ? cardDataValue.toString()
    : "";

  const [displayValue, setDisplayValue] = useState(displayValueFromCardData);

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsTooltipOpen(false);

    const inputNumber = parseInt(event.target.value, 10);

    // TODO: remove unnecessary re-renders by returning early if value is unchanged
    if (isNaN(inputNumber) || inputNumber < MIN_SERVANT_LEVEL) {
      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newLevel: null,
      });
      setDisplayValue("");
    } else if (inputNumber > MAX_SERVANT_LEVEL) {
      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newLevel: MAX_SERVANT_LEVEL,
      });
      setDisplayValue(MAX_SERVANT_LEVEL.toString());
    } else {
      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newLevel: inputNumber,
      });
      setDisplayValue(inputNumber.toString());
    }
  };

  const ascensionMapping = cardData.servantID ? cardData.ascensionLevels : null;

  useEffect(() => {
    setDisplayValue(displayValueFromCardData);
  }, [displayValueFromCardData]);

  return (
    <WideTooltip
      title={
        ascensionMapping ? (
          <AscensionLevelTable ascensionMapping={ascensionMapping} />
        ) : (
          ""
        )
      }
      open={isTooltipOpen}
    >
      <BaseLevelInput
        label={label}
        placeholder={MIN_SERVANT_LEVEL.toString()}
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        handleBlur={handleBlur}
        otherProps={{ onFocus: () => setIsTooltipOpen(true) }}
      />
    </WideTooltip>
  );
};
