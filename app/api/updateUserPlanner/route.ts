import { UserUpdatePlannerData } from "@/app/_types/drizzle";
import { updateUserPlanner } from "@/db/queries";

export const POST = async (request: Request) => {
  const data: UserUpdatePlannerData = await request.json();

  const updatedID = await updateUserPlanner(data);

  return Response.json(updatedID);
};
