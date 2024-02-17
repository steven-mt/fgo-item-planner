import { users } from "@/db/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { PlannerState } from "./planner";

export interface UpdateUserPlannerData {
  targetUserID: string;
  newPlannerState: PlannerState;
}

export type UserSelect = InferSelectModel<typeof users>;
export type UserInsert = InferInsertModel<typeof users>;
