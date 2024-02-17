import { UpdateUserPlannerData } from "@/app/_types/drizzle";
import { updateUserPlanner } from "@/db/queries";

export const POST = async (request: Request) => {
  const data: UpdateUserPlannerData = await request.json();

  const updatedIDs = await updateUserPlanner(data);

  return Response.json(updatedIDs);
};
