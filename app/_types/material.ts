import { z } from "zod";

export const itemTypeSchema = z.enum([
  "qp",
  "mana", // mana prism
  "skillLvUp", // skill gems, general skill/ascension mats
  "tdLvUp", // pieces and monuments, holy grail and tear
  "eventItem", // includes ascension items for welfares
  "rarePri", // rare prism
  "costumeRelease", // only includes a few wardrobe keys
  "commandCardPrmUp", // beast's footprint
  "svtCoin",
]);

const itemBGTypeSchema = z.enum([
  "zero",
  "bronze",
  "silver",
  "gold",
  "questClearQPReward",
  "aquaBlue",
  "six",
  "unknown",
]);

export const parsedItemSchema = z.object({
  id: z.number(),
  name: z.string(),
  type: itemTypeSchema,
  detail: z.string(),
  icon: z.string().url(),
  background: itemBGTypeSchema,
});
export type ParsedItem = z.infer<typeof parsedItemSchema>;

export const expCardSchema = z.object({
  id: z.number(),
  name: z.string(),
  icon: z.string().url(),
  expFeed: z.number(),
  comment: z.string(),
});
export type ExpCard = z.infer<typeof expCardSchema>;

export const grailCostSchema = z.record(
  z.string(),
  z.record(
    z.string(),
    z.object({ qp: z.number(), addLvMax: z.number(), frameType: z.string() }),
  ),
);
export type GrailCost = z.infer<typeof grailCostSchema>;
