import { getAtlasVersion } from "@/app/_services/atlasacademy/get-version";

export async function GET() {
  const timestamp = await getAtlasVersion();

  return Response.json(timestamp);
}
