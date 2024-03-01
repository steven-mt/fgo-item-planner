import { NiceServant } from "@/app/_types/atlas-nice";
import { ExpCard, expCardSchema } from "@/app/_types/material";
import { fetchApiData } from "@/app/_utils";
import {
  ATLAS_NA_SVT_QUERY_URL,
  EXP_4_ID,
  EXP_5_ID,
} from "@/app/_utils/constants";

export const getExp = async (): Promise<ExpCard[]> => {
  const exp5 = (await fetchApiData(
    new URL(EXP_5_ID.toString(), ATLAS_NA_SVT_QUERY_URL),
  )) as NiceServant;

  const exp4 = (await fetchApiData(
    new URL(EXP_4_ID.toString(), ATLAS_NA_SVT_QUERY_URL),
  )) as NiceServant;

  const parseExp = (exp: NiceServant): ExpCard => {
    const result: ExpCard = {
      id: exp.id,
      name: exp.name,
      icon: exp.extraAssets.faces.ascension![0],
      expFeed: exp.expFeed[0],
      comment: exp5.profile?.comments[0].comment ?? "",
    };

    return expCardSchema.parse(result);
  };

  return [parseExp(exp5), parseExp(exp4)];
};
