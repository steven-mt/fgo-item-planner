import {
  UserInsert,
  UserSelect,
  UserUpdateOwnedMaterials,
  UserUpdatePlannerData,
} from "../_types/drizzle";

export const getUserFetch = async (
  userID: string,
): Promise<UserSelect | null> => {
  const response = await fetch("/api/getUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userID),
  });

  return response.json();
};

export const insertUserFetch = async (
  userData: UserInsert,
): Promise<UserSelect | null> => {
  const response = await fetch("/api/insertUser", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(userData),
  });

  return response.json();
};

export const updateUserPlannerFetch = async (
  updateData: UserUpdatePlannerData,
): Promise<string | null> => {
  const response = await fetch("/api/updateUserPlanner", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });

  return response.json();
};

export const updateUserMatsFetch = async (
  updateData: UserUpdateOwnedMaterials,
): Promise<string | null> => {
  const response = await fetch("api/updateUserMats", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });

  return response.json();
};
