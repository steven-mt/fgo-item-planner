import { useContext } from "react";
import { UserContext, UserProvider } from "./UserProvider";

export const useUserContext = () => {
  const userContext = useContext(UserContext);

  if (userContext === undefined) {
    throw new Error(
      `${useUserContext.name} must be inside a ${UserProvider.name}`,
    );
  }

  return userContext;
};
