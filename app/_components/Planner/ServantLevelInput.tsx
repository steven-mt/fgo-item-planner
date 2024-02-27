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

    const inputNumber =
      event.target.value === "" ? null : parseInt(event.target.value, 10);

    if (inputNumber !== null && isNaN(inputNumber))
      return setDisplayValue(displayValueFromCardData);

    if (inputNumber === null || inputNumber < MIN_SERVANT_LEVEL) {
      setDisplayValue("");

      if (cardDataValue === null) return;

      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newLevel: null,
      });
    } else if (inputNumber > MAX_SERVANT_LEVEL) {
      setDisplayValue(MAX_SERVANT_LEVEL.toString());

      if (cardDataValue === MAX_SERVANT_LEVEL) return;

      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newLevel: MAX_SERVANT_LEVEL,
      });
    } else {
      setDisplayValue(inputNumber.toString());

      if (cardDataValue === inputNumber) return;

      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newLevel: inputNumber,
      });
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
