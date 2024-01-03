import { AtlasVersion } from "@/app/_types/atlas-version";
import { ATLAS_VERSION_URL } from "@/app/_utils/constants";
import { fetchWithRetry } from "@/app/_utils/utils";
import { revalidatePath } from "next/cache";
import { NextRequest } from "next/server";

export const runtime = "edge";

export async function GET(request: NextRequest) {
  let hasRevalidated = false;

  if (
    request.headers.get("Authorization") !== `Bearer ${process.env.CRON_SECRET}`
  ) {
    return new Response("Unauthorized", { status: 401 });
  }

  const cachedVersion: AtlasVersion = await (
    await fetch("/api/atlas-version")
  ).json();

  const newVersion: AtlasVersion = await (
    await fetchWithRetry(ATLAS_VERSION_URL, 5, 1000)
  ).json();

  if (newVersion.JP.timestamp > cachedVersion.JP.timestamp) {
    revalidatePath("/api/data");
    revalidatePath("/api/atlas-version");
    hasRevalidated = true;
  }

  return Response.json({ success: true, revalidated: hasRevalidated });
}
