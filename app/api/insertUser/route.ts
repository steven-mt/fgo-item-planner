import { UserInsert } from "@/app/_types/drizzle";
import { insertUser } from "@/db/queries";

export const POST = async (request: Request) => {
  const data: UserInsert = await request.json();

  const insertedUsers = await insertUser(data);

  return Response.json(insertedUsers);
};
