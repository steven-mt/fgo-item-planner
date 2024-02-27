"use client";

import { Action, ActionAscensionChange, CardData } from "@/app/_types/planner";
import { ascensionLevelSchema } from "@/app/_types/servant";
import {
  MAX_ASCENSION_LEVEL,
  MIN_ASCENSION_LEVEL,
} from "@/app/_utils/constants";
import { useEffect, useState } from "react";
import { WideTooltip } from "../WideTooltip";
import { AscensionLevelTable } from "./AscensionLevelTable";
import { BaseLevelInput } from "./BaseLevelInput";

export const AscensionLevelInput = ({
  cardData,
  label,
  actionType,
  dispatch,
}: {
  cardData: CardData;
  label: string;
  actionType: ActionAscensionChange;
  dispatch: React.Dispatch<Action>;
}) => {
  const cardDataValue =
    actionType === "ascensionFrom"
      ? cardData.ascension.from
      : cardData.ascension.to;

  const displayValueFromCardData =
    cardDataValue !== null ? cardDataValue.toString() : "";

  let placeholder = cardDataValue ? cardDataValue.toString() : "0";

  const [displayValue, setDisplayValue] = useState(displayValueFromCardData);

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsTooltipOpen(false);

    const inputNumber =
      event.target.value === "" ? null : parseInt(event.target.value, 10);

    if (inputNumber !== null && isNaN(inputNumber))
      return setDisplayValue(displayValueFromCardData);

    if (inputNumber === null || inputNumber < MIN_ASCENSION_LEVEL) {
      setDisplayValue("");

      if (cardDataValue === null) return;

      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newAscensionLevel: null,
      });
    } else if (inputNumber > MAX_ASCENSION_LEVEL) {
      setDisplayValue(MAX_ASCENSION_LEVEL.toString());

      if (cardDataValue === MAX_ASCENSION_LEVEL) return;

      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newAscensionLevel: MAX_ASCENSION_LEVEL,
      });
    } else {
      const inputNumberParsed = ascensionLevelSchema.safeParse(inputNumber);

      if (inputNumberParsed.success) {
        setDisplayValue(inputNumber.toString());

        if (cardDataValue === inputNumberParsed.data) return;

        dispatch({
          type: actionType,
          cardID: cardData.cardID,
          newAscensionLevel: inputNumberParsed.data,
        });
      }
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
        placeholder={placeholder}
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        handleBlur={handleBlur}
        otherProps={{ onFocus: () => setIsTooltipOpen(true) }}
      />
    </WideTooltip>
  );
};
