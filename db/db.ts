import dotenv from "dotenv";
import { drizzle } from "drizzle-orm/postgres-js";
import postgres from "postgres";
import * as schema from "./schema";

dotenv.config({ path: ".env.local" });

if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL is missing");

export const client = postgres(process.env.DATABASE_URL);
export const db = drizzle(client, { schema });
