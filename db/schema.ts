import { PlannerState } from "@/app/_types/planner";
import { jsonb, pgEnum, pgTable, text, uuid } from "drizzle-orm/pg-core";

export const themeEnum = pgEnum("theme", ["light", "dark", "system"]);

export const users = pgTable("users", {
  id: uuid("id").primaryKey().notNull(),
  username: text("username"),
  email: text("email").notNull(),
  theme: themeEnum("theme").default("system").notNull(),
  plannerState: jsonb("planner_state").$type<PlannerState>(),
});
