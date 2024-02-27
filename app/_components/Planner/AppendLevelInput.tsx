"use client";

import { Action, ActionAppendChange, CardData } from "@/app/_types/planner";
import {
  ParsedAppendSkillData,
  ParsedAppendSkills,
} from "@/app/_types/servant";
import { MAX_APPEND_LEVEL, MIN_APPEND_LEVEL } from "@/app/_utils/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useEffect, useState } from "react";
import { WideTooltip } from "../WideTooltip";
import { BaseLevelInput } from "./BaseLevelInput";

export const AppendLevelInput = ({
  cardData,
  label,
  appendSkills,
  actionType,
  dispatch,
}: {
  cardData: CardData;
  label: string;
  appendSkills: ParsedAppendSkills | undefined;
  actionType: ActionAppendChange;
  dispatch: React.Dispatch<Action>;
}) => {
  let cardDataValue: number | null;
  switch (actionType) {
    case "append1From":
      cardDataValue = cardData.append1.from;
      break;
    case "append1To":
      cardDataValue = cardData.append1.to;
      break;
    case "append2From":
      cardDataValue = cardData.append2.from;
      break;
    case "append2To":
      cardDataValue = cardData.append2.to;
      break;
    case "append3From":
      cardDataValue = cardData.append3.from;
      break;
    case "append3To":
      cardDataValue = cardData.append3.to;
      break;
  }

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

    if (inputNumber === null || inputNumber < MIN_APPEND_LEVEL) {
      setDisplayValue("");

      if (cardDataValue === null) return;

      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newAppendLevel: MIN_APPEND_LEVEL,
      });
    } else if (inputNumber > MAX_APPEND_LEVEL) {
      setDisplayValue(MAX_APPEND_LEVEL.toString());

      if (cardDataValue === MAX_APPEND_LEVEL) return;

      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newAppendLevel: MAX_APPEND_LEVEL,
      });
    } else {
      setDisplayValue(inputNumber.toString());

      if (cardDataValue === inputNumber) return;

      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newAppendLevel: inputNumber,
      });
    }
  };

  let appendSkill: ParsedAppendSkillData | null = null;

  if (appendSkills) {
    if (actionType === "append1From" || actionType === "append1To")
      appendSkill = appendSkills[100];
    else if (actionType === "append2From" || actionType === "append2To")
      appendSkill = appendSkills[101];
    else appendSkill = appendSkills[102];
  }

  const tooltipDisplay = appendSkill ? (
    <Box display="flex" mt={0.5} sx={{ "& > img": { mr: 1, mt: 0.5 } }}>
      <Image src={appendSkill.icon} alt="" width={32} height={32} />

      <Box width="100%">
        <Typography variant="body2">{appendSkill.name}</Typography>

        <Typography variant="caption">{appendSkill.detail}</Typography>
      </Box>
    </Box>
  ) : (
    ""
  );

  useEffect(() => {
    setDisplayValue(displayValueFromCardData);
  }, [displayValueFromCardData]);

  return (
    <WideTooltip title={tooltipDisplay} open={isTooltipOpen}>
      <BaseLevelInput
        label={label}
        placeholder={MIN_APPEND_LEVEL.toString()}
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        handleBlur={handleBlur}
        otherProps={{ onFocus: () => setIsTooltipOpen(true) }}
      />
    </WideTooltip>
  );
};
