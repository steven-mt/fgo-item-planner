"use client";

import { User } from "@supabase/supabase-js";
import { createContext, useMemo, useState } from "react";
import { UserSelect } from "../_types/drizzle";

export const UserContext = createContext<
  | {
      currentUser: {
        authData: User | null;
        userData: UserSelect | null;
      };
      setCurrentUser: React.Dispatch<
        React.SetStateAction<{
          authData: User | null;
          userData: UserSelect | null;
        }>
      >;
    }
  | undefined
>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<{
    authData: User | null;
    userData: UserSelect | null;
  }>({
    authData: null,
    userData: null,
  });

  const contextValue = useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser],
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
