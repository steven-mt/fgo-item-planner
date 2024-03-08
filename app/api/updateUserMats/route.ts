import { UserUpdateOwnedMaterials } from "@/app/_types/drizzle";
import { updateUserOwnedMaterials } from "@/db/queries";

export const POST = async (request: Request) => {
  const data: UserUpdateOwnedMaterials = await request.json();

  const updatedID = await updateUserOwnedMaterials(data);

  return updatedID;
};
