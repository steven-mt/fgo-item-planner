import { users } from "@/db/schema";
import { InferInsertModel, InferSelectModel } from "drizzle-orm";
import { OwnedMaterials, PlannerState } from "./planner";

export type UserSelect = InferSelectModel<typeof users>;
export type UserInsert = InferInsertModel<typeof users>;

export interface UserUpdatePlannerData {
  targetUserID: string;
  newPlannerState: PlannerState;
}

export interface UserUpdateOwnedMaterials {
  targetUserID: string;
  newOwnedMaterials: OwnedMaterials;
}
