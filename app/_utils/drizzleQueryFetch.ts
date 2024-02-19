import {
  UpdateUserPlannerData,
  UserInsert,
  UserSelect,
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

export const updateUserFetch = async (
  updateData: UpdateUserPlannerData,
): Promise<string | null> => {
  const response = await fetch("/api/updateUserPlanner", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(updateData),
  });

  return response.json();
};
