import { getItems } from "@/app/_services/atlasacademy/get-items";

export const GET = async () => {
  const addItems = await getItems();

  const blob = new Blob([JSON.stringify(addItems)], {
    type: "application/json",
  });

  return new Response(blob, { headers: { "blob-size": blob.size.toString() } });
};
