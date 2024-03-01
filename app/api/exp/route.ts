import { getExp } from "@/app/_services/atlasacademy/get-exp";

export const GET = async () => {
  const expData = await getExp();

  const blob = new Blob([JSON.stringify(expData)], {
    type: "application/json",
  });

  return new Response(blob, { headers: { "blob-size": blob.size.toString() } });
};
