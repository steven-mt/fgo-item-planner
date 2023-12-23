"use client";

import { Action, ActionSkillChange, CardData } from "@/app/_types/planner";
import { ParsedSkills } from "@/app/_types/servant";
import { MAX_SKILL_LEVEL, MIN_SKILL_LEVEL } from "@/app/_utils/constants";
import { Box, Typography } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import { WideTooltip } from "../WideTooltip";
import { BaseLevelInput } from "./BaseLevelInput";

export const SkillLevelInput = ({
  label,
  cardData,
  skills,
  actionType,
  dispatch,
}: {
  label: string;
  cardData: CardData;
  skills: ParsedSkills | undefined;
  actionType: ActionSkillChange;
  dispatch: React.Dispatch<Action>;
}) => {
  let initialValue;
  switch (actionType) {
    case "skill1From":
      initialValue = cardData.skill1.from;
      break;
    case "skill1To":
      initialValue = cardData.skill1.to;
      break;
    case "skill2From":
      initialValue = cardData.skill2.from;
      break;
    case "skill2To":
      initialValue = cardData.skill2.to;
      break;
    case "skill3From":
      initialValue = cardData.skill3.from;
      break;
    case "skill3To":
      initialValue = cardData.skill3.to;
      break;
  }

  const [displayValue, setDisplayValue] = useState(
    initialValue ? initialValue.toString() : "",
  );

  const [isTooltipOpen, setIsTooltipOpen] = useState(false);

  const handleBlur = (event: React.FocusEvent<HTMLInputElement>) => {
    setIsTooltipOpen(false);

    const inputNumber = parseInt(event.target.value, 10);

    if (isNaN(inputNumber) || inputNumber < MIN_SKILL_LEVEL) {
      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newSkillLevel: null,
      });
      setDisplayValue("");
    } else if (inputNumber > MAX_SKILL_LEVEL) {
      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newSkillLevel: MAX_SKILL_LEVEL,
      });
      setDisplayValue(MAX_SKILL_LEVEL.toString());
    } else {
      dispatch({
        type: actionType,
        cardID: cardData.cardID,
        newSkillLevel: inputNumber,
      });
      setDisplayValue(inputNumber.toString());
    }
  };

  const skillVariants: ParsedSkills = [];

  if (skills) {
    if (actionType === "skill1From" || actionType === "skill1To") {
      for (const skill of skills) {
        if (skill.num === 1) skillVariants.push(skill);
      }
    } else if (actionType === "skill2From" || actionType === "skill2To") {
      for (const skill of skills) {
        if (skill.num === 2) skillVariants.push(skill);
      }
    } else {
      for (const skill of skills) {
        if (skill.num === 3) skillVariants.push(skill);
      }
    }
  }

  const tooltipDisplay =
    skillVariants.length > 0 ? (
      <Box display="flex" flexDirection="column" gap={1} mt={0.5}>
        {skillVariants.map((skill, index) => (
          <Box
            key={index}
            sx={{
              "& > img": { mr: 1, mt: 0.5 },
              display: "flex",
              alignItems: "start",
            }}
          >
            <Image src={skill.icon} alt="" width={32} height={32} />

            <Box width="100%">
              <Box display="flex" justifyContent="space-between" gap={1}>
                <Typography variant="body2">{skill.name}</Typography>

                <Typography
                  variant="caption"
                  flexShrink={0}
                >{`Cooldown: ${Math.max(...skill.cooldown)} - ${Math.min(
                  ...skill.cooldown,
                )}`}</Typography>
              </Box>

              <Typography variant="caption">{skill.detail}</Typography>
            </Box>
          </Box>
        ))}
      </Box>
    ) : (
      ""
    );

  return (
    <WideTooltip title={tooltipDisplay} open={isTooltipOpen}>
      <BaseLevelInput
        label={label}
        placeholder={MIN_SKILL_LEVEL.toString()}
        displayValue={displayValue}
        setDisplayValue={setDisplayValue}
        handleBlur={handleBlur}
        otherProps={{ onFocus: () => setIsTooltipOpen(true) }}
      />
    </WideTooltip>
  );
};
