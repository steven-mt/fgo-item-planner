import { getAtlasVersion } from "@/app/_services/atlasacademy/get-version";

export async function GET() {
  // TODO: trpc
  const timestamp = await getAtlasVersion();

  return Response.json(timestamp);
}
