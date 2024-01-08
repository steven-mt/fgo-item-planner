import { AtlasVersion, atlasVersionSchema } from "@/app/_types/atlas-version";
import { fetchWithRetry } from "@/app/_utils";
import { ATLAS_VERSION_URL } from "@/app/_utils/constants";

export const getAtlasVersion = async (): Promise<AtlasVersion> => {
  const response = await fetchWithRetry(ATLAS_VERSION_URL, 5, 1000);

  const versionData = atlasVersionSchema.parse(await response.json());

  return versionData;
};
