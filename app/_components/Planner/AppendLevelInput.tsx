"use client";

import { Action, ActionAppendChange, CardData } from "@/app/_types/planner";
import {
  ParsedAppendSkillData,
  ParsedAppendSkills,
} from "@/app/_types/servant";
import { MAX_APPEND_LEVEL, MIN_APPEND_LEVEL } from "@/app/_utils/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import { useState } from "react";
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
  let initialValue;
  switch (actionType) {
    case "append1From":
      initialValue = cardData.append1.from;
      break;
    case "append1To":
      initialValue = cardData.append1.to;
      break;
    case "append2From":
      initialValue = cardData.append2.from;
      break;
    case "append2To":
      initialValue = cardData.append2.to;
      break;
    case "append3From":
      initialValue = cardData.append3.from;
      break;
    case "append3To":
      initialValue = cardData.append3.to;
      break;
  }

  const [displayValue, setDisplayValue] = useState(
    initialValue ? initialValue.toString() : "",
  );

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsTooltipOpen(false);

    const inputNumber =
      event.target.value === "" ? NaN : parseInt(event.target.value, 10);

    if (isNaN(inputNumber) || inputNumber < MIN_APPEND_LEVEL) {
      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newAppendLevel: MIN_APPEND_LEVEL,
      });
      setDisplayValue("");
    } else if (inputNumber > MAX_APPEND_LEVEL) {
      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newAppendLevel: MAX_APPEND_LEVEL,
      });
      setDisplayValue(MAX_APPEND_LEVEL.toString());
    } else {
      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newAppendLevel: inputNumber,
      });
      setDisplayValue(inputNumber.toString());
    }
  };

  let appendSkill: ParsedAppendSkillData = null;

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
