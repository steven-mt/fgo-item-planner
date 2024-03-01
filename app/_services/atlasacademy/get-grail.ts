import { grailCostSchema } from "@/app/_types/material";
import { fetchApiData } from "@/app/_utils";
import { ATLAS_GRAIL_URL } from "@/app/_utils/constants";

export const getGrailCostData = async () => {
  const data = await fetchApiData(ATLAS_GRAIL_URL);

  return grailCostSchema.parse(data);
};
