"use client";

import { Action, ActionAscensionChange, CardData } from "@/app/_types/planner";
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
  const inputValue =
    actionType === "ascensionFrom"
      ? cardData.ascension.from
      : cardData.ascension.to;

  const displayInputValue = inputValue !== null ? inputValue.toString() : "";

  let placeholder = inputValue ? inputValue.toString() : "0";

  const [displayValue, setDisplayValue] = useState<string>(displayInputValue);

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsTooltipOpen(false);

    const inputNumber = parseInt(event.target.value, 10);

    if (isNaN(inputNumber) || inputNumber < MIN_ASCENSION_LEVEL) {
      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newAscensionLevel: null,
      });
      setDisplayValue("");
    } else if (inputNumber > MAX_ASCENSION_LEVEL) {
      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newAscensionLevel: MAX_ASCENSION_LEVEL,
      });
      setDisplayValue(MAX_ASCENSION_LEVEL.toString());
    } else if (
      inputNumber === 0 ||
      inputNumber === 1 ||
      inputNumber === 2 ||
      inputNumber === 3 ||
      inputNumber === 4
    ) {
      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newAscensionLevel: inputNumber,
      });
      setDisplayValue(inputNumber.toString());
    }
  };

  const ascensionMapping = cardData.servantID ? cardData.ascensionLevels : null;

  useEffect(() => {
    setDisplayValue(displayInputValue);
  }, [displayInputValue]);

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
