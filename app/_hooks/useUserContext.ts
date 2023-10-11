import { useContext } from "react";
import { UserContext } from "../_components/UserProvider";

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    throw new Error("useUserContext must be inside a UserProvider");
  }

  return userContext;
};
