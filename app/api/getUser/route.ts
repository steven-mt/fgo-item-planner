import { getUser } from "@/db/queries";

export const POST = async (request: Request) => {
  const userID: string = await request.json();

  const users = await getUser(userID);

  return Response.json(users);
};
