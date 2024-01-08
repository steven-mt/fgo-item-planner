import { atlasVersionSchema } from "@/app/_types/atlas-version";
import { fetchWithRetry, getBaseUrl } from "@/app/_utils";
import { ATLAS_VERSION_URL } from "@/app/_utils/constants";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const dynamic = "force-dynamic";

export async function GET(request: NextRequest) {
  let hasRevalidated = false;

  if (
    request.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return new Response("Unauthorized", { status: 401 });
  }

  const cachedVersion = atlasVersionSchema.parse(
    await (await fetch(new URL("api/atlas-version", getBaseUrl()))).json(),
  );

  const newVersion = atlasVersionSchema.parse(
    await (await fetchWithRetry(ATLAS_VERSION_URL, 5, 1000)).json(),
  );

  if (newVersion.JP.timestamp > cachedVersion.JP.timestamp) {
    revalidatePath("/api/data");
    revalidatePath("/api/atlas-version");
    hasRevalidated = true;
  }

  return Response.json({ success: true, revalidated: hasRevalidated });
}
