import { getGrailCostData } from "@/app/_services/atlasacademy/get-grail";

export const GET = async () => {
  const data = await getGrailCostData();

  const blob = new Blob([JSON.stringify(data)], { type: "application/json" });

  return new Response(blob, { headers: { "blob-size": blob.size.toString() } });
};
