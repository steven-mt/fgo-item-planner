import {
  CardActionArea,
  Collapse,
  Grid,
  TableSortLabel,
  TextField,
  Typography,
  TypographyProps,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Virtuoso } from "react-virtuoso";
import { usePlannerStateContext } from "../_context/usePlannerStateContext";
import { ParsedItem } from "../_types/material";
import { CardMaterials, MaterialUse } from "../_types/planner";
import { ParsedServant } from "../_types/servant";

interface RowSvtData {
  id: number;
  name: string;
  icon: string;
  uses: { [use in MaterialUse]?: number };
}

interface RowItem {
  id: number;
  name: string;
  icon: string;
  servantData: RowSvtData[];
  totalAmount: number;
}

const HeaderTypography = ({
  children,
  props,
}: {
  props?: TypographyProps;
  children: React.ReactNode;
}) => (
  <Typography
    variant="body1"
    overflow="auto"
    textAlign="center"
    whiteSpace="nowrap"
    {...props}
  >
    {children}
  </Typography>
);

const NumberTypography = ({
  children,
  props,
}: {
  children: React.ReactNode;
  props?: TypographyProps;
}) => {
  return (
    <Typography variant="body1" overflow="auto" textAlign="end" {...props}>
      {children}
    </Typography>
  );
};

export const MaterialsTable = ({
  allSvtData,
  itemData,
  plannerMats,
}: {
  allSvtData: ParsedServant[];
  itemData: ParsedItem[];
  plannerMats: CardMaterials[];
}) => {
  const { plannerState } = usePlannerStateContext();

  const rowItems: RowItem[] = [];

  itemData.forEach((item) => {
    if (
      (item.type === "qp" ||
        item.type === "skillLvUp" ||
        item.type === "tdLvUp") &&
      !(50 <= item.id && item.id <= 5003)
      // exclude items for class score and code openers
    ) {
      rowItems.push(
        structuredClone({ ...item, servantData: [], totalAmount: 0 }),
      );
    }
  });

  for (const cardMats of plannerMats) {
    for (const cardItemAndAmount of cardMats.materials.items) {
      const foundRow = rowItems.find(
        (rowItem) => rowItem.id === cardItemAndAmount.item.id,
      );

      let svtID: number | null = null;
      for (const cardData of plannerState) {
        if (cardData.cardID === cardMats.cardID) svtID = cardData.servantID;
      }

      const foundSvtData = allSvtData.find((svtData) => svtData.id === svtID);
      if (foundSvtData === undefined) throw new Error("Servant data not found");

      const newUses = cardItemAndAmount.uses;

      if (foundRow === undefined) {
        const newRowSvtData: RowSvtData[] = [];

        newRowSvtData.push({
          id: foundSvtData.id,
          icon: foundSvtData.faces[1],
          name: foundSvtData.name,
          uses: newUses,
        });

        rowItems.push(
          structuredClone({
            id: cardItemAndAmount.item.id,
            icon: cardItemAndAmount.item.icon,
            name: cardItemAndAmount.item.name,
            servantData: newRowSvtData,
            totalAmount: cardItemAndAmount.totalAmount,
          }),
        );

        continue;
      }

      // Item already exists in initial rows
      const foundRowSvtData = foundRow.servantData.find(
        (rowSvtData) => rowSvtData.id === svtID,
      );

      foundRow.totalAmount += cardItemAndAmount.totalAmount;

      if (foundRowSvtData === undefined) {
        foundRow.servantData.push(
          structuredClone({
            id: foundSvtData.id,
            name: foundSvtData.name,
            icon: foundSvtData.faces[1],
            uses: newUses,
          }),
        );
        continue;
      }

      const rowSvtUses = foundRowSvtData.uses;

      let usesProperty: keyof typeof newUses;
      for (usesProperty in newUses) {
        const rowSvtUseAmount = rowSvtUses[usesProperty];
        const newUseAmount = newUses[usesProperty];

        if (newUseAmount === undefined) continue;
        if (rowSvtUseAmount === undefined) {
          rowSvtUses[usesProperty] = rowSvtUseAmount;
          continue;
        }
        rowSvtUses[usesProperty] = rowSvtUseAmount + newUseAmount;
      }
    }
  }

  for (const cardMats of plannerMats) {
    for (const cardItemAndAmount of cardMats.materials.expCards) {
      let svtID: number | null = null;
      for (const cardData of plannerState) {
        if (cardData.cardID === cardMats.cardID) svtID = cardData.servantID;
      }
      const foundSvtData = allSvtData.find((svtData) => svtData.id === svtID);

      const newRowSvtData: RowSvtData[] = [];
      if (!foundSvtData) throw new Error("Servant data not found");
      newRowSvtData.push({
        id: foundSvtData.id,
        icon: foundSvtData.faces[1],
        name: foundSvtData.name,
        uses: {},
      });

      rowItems.push(
        structuredClone({
          id: cardItemAndAmount.card.id,
          icon: cardItemAndAmount.card.icon,
          name: cardItemAndAmount.card.name,
          servantData: newRowSvtData,
          totalAmount: cardItemAndAmount.amount,
        }),
      );
    }
  }

  rowItems.sort((a, b) => a.id - b.id);

  const [currentOpenIndex, setCurrentOpenIndex] = useState<number>(-1);

  const HEADER_HEIGHT = "32.97px";

  return (
    <>
      <Grid container paddingBottom={1}>
        <Grid item xs={8}>
          <TableSortLabel
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <HeaderTypography>Item</HeaderTypography>
          </TableSortLabel>
        </Grid>

        <Grid item xs={2}>
          <TableSortLabel
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <HeaderTypography>Owned</HeaderTypography>
          </TableSortLabel>
        </Grid>

        <Grid item xs={2}>
          <TableSortLabel
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <HeaderTypography>Total</HeaderTypography>
          </TableSortLabel>
        </Grid>
      </Grid>

      <Virtuoso
        style={{ height: `calc(100% - ${HEADER_HEIGHT})` }}
        data={rowItems}
        itemContent={(index, data) => (
          <>
            <Grid container alignItems="center">
              <Grid
                item
                xs={8}
                onClick={() =>
                  setCurrentOpenIndex(currentOpenIndex === index ? -1 : index)
                }
              >
                <CardActionArea>
                  <div className="flex items-center gap-1">
                    <Image
                      alt="Icon image"
                      src={data.icon}
                      width={48}
                      height={48}
                    />

                    <Typography variant="body1">{data.name}</Typography>
                  </div>
                </CardActionArea>
              </Grid>

              <Grid item xs={2}>
                <TextField
                  size="small"
                  inputProps={{ style: { padding: 8 } }}
                  sx={{ minWidth: "2rem" }}
                />
              </Grid>

              <Grid item xs={2} padding={1}>
                <NumberTypography>{data.totalAmount}</NumberTypography>
              </Grid>
            </Grid>

            <Collapse
              in={index === currentOpenIndex}
              unmountOnExit
              sx={{
                ".MuiCollapse-wrapperInner": {
                  display: "flex",
                  flexDirection: "column",
                  gap: 1,
                },
              }}
            >
              <Grid container>
                <Grid item xs={4}>
                  <HeaderTypography>Servant</HeaderTypography>
                </Grid>

                <Grid item xs={2} paddingRight={1}>
                  <HeaderTypography props={{ textAlign: "end" }}>
                    Ascension
                  </HeaderTypography>
                </Grid>

                <Grid item xs={2} paddingRight={1}>
                  <HeaderTypography props={{ textAlign: "end" }}>
                    Palingenesis
                  </HeaderTypography>
                </Grid>

                <Grid item xs={2} paddingRight={1}>
                  <HeaderTypography props={{ textAlign: "end" }}>
                    Skills
                  </HeaderTypography>
                </Grid>

                <Grid item xs={2} paddingRight={1}>
                  <HeaderTypography props={{ textAlign: "end" }}>
                    Append Skills
                  </HeaderTypography>
                </Grid>
              </Grid>

              {data.servantData.map((rowSvtData) => {
                return (
                  <Grid key={rowSvtData.id} container>
                    <Grid
                      item
                      xs={4}
                      display="flex"
                      gap={1}
                      alignItems="center"
                    >
                      <Image
                        alt="Face icon"
                        src={rowSvtData.icon}
                        width={32}
                        height={32}
                      />

                      <Typography variant="body1">{rowSvtData.name}</Typography>
                    </Grid>

                    <Grid item xs={2} paddingRight={1}>
                      <NumberTypography>
                        {rowSvtData.uses.ascension}
                      </NumberTypography>
                    </Grid>

                    <Grid item xs={2} paddingRight={1}>
                      <NumberTypography>
                        {rowSvtData.uses.grail}
                      </NumberTypography>
                    </Grid>

                    <Grid item xs={2} paddingRight={1}>
                      <NumberTypography>
                        {rowSvtData.uses.skill}
                      </NumberTypography>
                    </Grid>

                    <Grid item xs={2} paddingRight={1}>
                      <NumberTypography>
                        {rowSvtData.uses.append}
                      </NumberTypography>
                    </Grid>
                  </Grid>
                );
              })}
            </Collapse>
          </>
        )}
      />
    </>
  );
};
