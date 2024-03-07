import {
  CardActionArea,
  Collapse,
  Grid,
  TableSortLabel,
  TextField,
  Typography,
} from "@mui/material";
import Image from "next/image";
import { useState } from "react";
import { Virtuoso } from "react-virtuoso";
import { ParsedItem } from "../_types/material";
import { Materials } from "../_types/planner";

export const MaterialsTable = ({
  itemData,
  totalMats,
}: {
  itemData: ParsedItem[];
  totalMats: Materials;
}) => {
  const rows: {
    item: { id: number; name: string; icon: string };
    amount: number;
  }[] = [];

  itemData.forEach((item) => {
    if (
      (item.type === "qp" ||
        item.type === "skillLvUp" ||
        item.type === "tdLvUp") &&
      !(50 <= item.id && item.id <= 5003)
      // exclude items for class score and code openers
    ) {
      rows.push({ item: item, amount: 0 });
    }
  });

  totalMats.items.forEach((itemAndAmount) => {
    const foundItemIndex = rows.findIndex(
      (row) => row.item.id === itemAndAmount.item.id,
    );

    if (foundItemIndex !== -1) {
      rows[foundItemIndex].amount += itemAndAmount.amount;
    } else {
      rows.push({ item: itemAndAmount.item, amount: itemAndAmount.amount });
    }
  });

  totalMats.expCards.forEach((expCard) => {
    rows.push({ item: expCard.card, amount: expCard.amount });
  });

  rows.sort((a, b) => a.item.id - b.item.id);

  const [currentOpenIndex, setCurrentOpenIndex] = useState<number>(-1);

  const HEADER_HEIGHT = "32.97px";

  return (
    <>
      <Grid container paddingBottom={1}>
        <Grid item xs={8}>
          <TableSortLabel
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Typography variant="body1">Item</Typography>
          </TableSortLabel>
        </Grid>

        <Grid item xs={2}>
          <TableSortLabel
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Typography variant="body1">Owned</Typography>
          </TableSortLabel>
        </Grid>

        <Grid item xs={2}>
          <TableSortLabel
            sx={{ width: "100%", display: "flex", justifyContent: "center" }}
          >
            <Typography variant="body1">Total</Typography>
          </TableSortLabel>
        </Grid>
      </Grid>

      <Virtuoso
        style={{ height: `calc(100% - ${HEADER_HEIGHT})` }}
        data={rows}
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
                      src={data.item.icon}
                      width={48}
                      height={48}
                    />

                    <Typography variant="body1">{data.item.name}</Typography>
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

              <Grid item xs={2}>
                <Typography
                  padding={1}
                  variant="body1"
                  width="100%"
                  overflow="auto"
                  textAlign="end"
                >
                  {data.amount}
                </Typography>
              </Grid>
            </Grid>

            <Collapse in={index === currentOpenIndex} unmountOnExit>
              placeholder text
            </Collapse>
          </>
        )}
      />
    </>
  );
};
