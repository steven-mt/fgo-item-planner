import { NiceItem } from "@/app/_types/atlas-nice";
import {
  ParsedItem,
  itemTypeSchema,
  parsedItemSchema,
} from "@/app/_types/material";
import { fetchApiData } from "@/app/_utils";

export const getItems = async (): Promise<ParsedItem[]> => {
  const [naAtlasItems, jpAtlasItems]: [NiceItem[], NiceItem[]] =
    await Promise.all([
      fetchApiData("https://api.atlasacademy.io/export/NA/nice_item.json"),
      fetchApiData(
        "https://api.atlasacademy.io/export/JP/nice_item_lang_en.json",
      ),
    ]);

  const mergedAtlasItems: NiceItem[] = [];

  jpAtlasItems.forEach((jpItem) => {
    const foundNAItem = naAtlasItems.find((naItem) => naItem.id === jpItem.id);

    mergedAtlasItems.push(foundNAItem ?? jpItem);
  });

  const mergedItem: ParsedItem[] = [];

  mergedAtlasItems.forEach((item) => {
    const parseTypeResult = itemTypeSchema.safeParse(item.type);

    if (!parseTypeResult.success) return;

    const parsedItem: ParsedItem = {
      id: item.id,
      name: item.name,
      type: parseTypeResult.data,
      detail: item.detail,
      icon: item.icon,
      background: item.background,
    };

    mergedItem.push(parsedItemSchema.parse(parsedItem));
  });

  return mergedItem;
};
