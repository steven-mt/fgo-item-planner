import {
  UserInsert,
  UserSelect,
  UserUpdateOwnedMaterials,
  UserUpdatePlannerData,
} from "@/app/_types/drizzle";
import { eq } from "drizzle-orm";
import { db } from "./db";
import { users } from "./schema";

export const insertUser = async (
  newUser: UserInsert,
): Promise<UserSelect | null> => {
  const insertedUsers = await db
    .insert(users)
    .values(newUser)
    .onConflictDoNothing()
    .returning();

  return insertedUsers.length === 0 ? null : insertedUsers[0];
};

export const getUser = async (id: string): Promise<UserSelect | null> => {
  const user = await db.select().from(users).where(eq(users.id, id));

  return user.length === 0 ? null : user[0];
};

export const updateUserPlanner = async (
  updateData: UserUpdatePlannerData,
): Promise<string | null> => {
  const updatedIDs = await db
    .update(users)
    .set({ plannerState: updateData.newPlannerState })
    .where(eq(users.id, updateData.targetUserID))
    .returning({ updatedID: users.id });

  return updatedIDs.length === 0 ? null : updatedIDs[0].updatedID;
};

export const updateUserOwnedMaterials = async (
  updateData: UserUpdateOwnedMaterials,
): Promise<string | null> => {
  const updatedIDs = await db
    .update(users)
    .set({ ownedMaterials: updateData.newOwnedMaterials })
    .where(eq(users.id, updateData.targetUserID))
    .returning({ updatedID: users.id });

  return updatedIDs.length === 0 ? null : updatedIDs[0].updatedID;
};
