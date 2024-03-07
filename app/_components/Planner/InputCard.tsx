"use client";
import { Action, CardData, CardMaterials } from "@/app/_types/planner";
import { QP_ITEM_ID } from "@/app/_utils/constants";
import {
  Delete,
  KeyboardArrowLeft,
  KeyboardArrowRight,
} from "@mui/icons-material";
import {
  Autocomplete,
  Avatar,
  Badge,
  Box,
  Card,
  CardContent,
  Grid,
  IconButton,
  TextField,
  Tooltip,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { memo } from "react";
import { ParsedServant } from "../../_types/servant";
import { AppendLevelInput } from "./AppendLevelInput";
import { AscensionLevelInput } from "./AscensionLevelInput";
import { ServantLevelInput } from "./ServantLevelInput";
import { SkillLevelInput } from "./SkillLevelInput";

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

export const InputCard = memo(
  ({
    allServants,
    cardData,
    cardMaterials,
    dispatch,
  }: {
    allServants: ParsedServant[];
    cardData: CardData;
    cardMaterials: CardMaterials | undefined;
    dispatch: React.Dispatch<Action>;
  }) => {
    const selectedServant = allServants.find(
      (servant) => servant.id === cardData.servantID,
    );
    const currentSkills = selectedServant?.skills;
    const currentAppendSkills = selectedServant?.appendSkills;

    const autocompleteValue = selectedServant ?? null;

    const qpItem = cardMaterials?.materials.items.find(
      (itemAndAmount) => itemAndAmount.item.id === QP_ITEM_ID,
    );

    return (
      <Card variant="outlined" sx={{ height: "100%" }}>
        <CardContent
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 2,
            height: "100%",
          }}
        >
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
                value={autocompleteValue}
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
                onChange={(_event, newValue, _reason) => {
                  newValue
                    ? dispatch({
                        type: "servantChange",
                        cardID: cardData.cardID,
                        newServantID: newValue.id,
                        newAscensionLevels: newValue.ascensionLevels,
                      })
                    : dispatch({
                        type: "servantChange",
                        cardID: cardData.cardID,
                        newServantID: newValue,
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
                  svtData={selectedServant}
                  actionType="levelFrom"
                  dispatch={dispatch}
                />
                <ServantLevelInput
                  label="To"
                  cardData={cardData}
                  svtData={selectedServant}
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

            <Grid
              item
              xs={4}
              display="flex"
              flexDirection="column"
              alignItems="center"
            >
              <div className="flex w-full justify-evenly">
                <IconButton
                  onClick={() => {
                    dispatch({
                      type: "moveServant",
                      cardID: cardData.cardID,
                      direction: "backward",
                    });
                  }}
                >
                  <KeyboardArrowLeft />
                </IconButton>
                <IconButton
                  onClick={() => {
                    dispatch({
                      type: "moveServant",
                      cardID: cardData.cardID,
                      direction: "forward",
                    });
                  }}
                >
                  <KeyboardArrowRight />
                </IconButton>
              </div>

              <Tooltip title="Remove">
                <IconButton
                  onClick={() => {
                    dispatch({
                      type: "removeServant",
                      cardID: cardData.cardID,
                    });
                  }}
                >
                  <Delete />
                </IconButton>
              </Tooltip>
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

            {cardMaterials && (
              <>
                {cardMaterials.materials.items.map((itemAndAmount, index) => {
                  if (itemAndAmount.item.id === QP_ITEM_ID) return;

                  return (
                    <Grid item xs={1.5} lg={1} key={index}>
                      <Badge
                        badgeContent={itemAndAmount.totalAmount}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        overlap="circular"
                        max={999}
                        color="primary"
                      >
                        <Image
                          alt="Item icon"
                          src={itemAndAmount.item.icon}
                          width={32}
                          height={32}
                        />
                      </Badge>
                    </Grid>
                  );
                })}

                {cardMaterials.materials.expCards.map((expCard, index) => {
                  return (
                    <Grid item xs={2} key={index}>
                      <Badge
                        badgeContent={expCard.amount}
                        anchorOrigin={{
                          vertical: "bottom",
                          horizontal: "right",
                        }}
                        max={9999}
                        color="primary"
                      >
                        <Image
                          alt="Item icon"
                          src={expCard.card.icon}
                          width={32}
                          height={32}
                        />
                      </Badge>
                    </Grid>
                  );
                })}

                {qpItem && (
                  <Grid item xs={3}>
                    <Badge
                      badgeContent={qpItem.totalAmount}
                      anchorOrigin={{
                        vertical: "bottom",
                        horizontal: "right",
                      }}
                      max={2999999999}
                      color="primary"
                    >
                      <Image
                        alt="Item icon"
                        src={qpItem.item.icon}
                        width={32}
                        height={32}
                      />
                    </Badge>
                  </Grid>
                )}
              </>
            )}
          </Grid>
        </CardContent>
      </Card>
    );
  },
);
InputCard.displayName = "InputCard";
