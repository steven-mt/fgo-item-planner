import { z } from "zod";
import { zodStrictRecord } from "../_utils";

const regionSchema = z.enum(["JP", "NA", "CN", "KR", "TW"]);

export const atlasVersionSchema = zodStrictRecord(
  regionSchema,
  z.object({ hash: z.string(), timestamp: z.number().int() }),
);

export type AtlasVersion = z.infer<typeof atlasVersionSchema>;
