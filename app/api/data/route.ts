import { getData } from "../../_utils/getData";

export async function GET() {
  const data = await getData();

  const blob = new Blob([JSON.stringify(data)], {
    type: "application/json",
  });

  return new Response(blob, {
    headers: { "blob-size": blob.size.toString() },
  });
}
