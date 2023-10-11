"use client";

import { User } from "@supabase/supabase-js";
import { createContext, useMemo, useState } from "react";

export const UserContext = createContext<
  | {
      currentUser: User | null;
      setCurrentUser: React.Dispatch<React.SetStateAction<User | null>>;
    }
  | undefined
>(undefined);

export const UserProvider = ({ children }: { children: React.ReactNode }) => {
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  const contextValue = useMemo(
    () => ({ currentUser, setCurrentUser }),
    [currentUser],
  );

  return (
    <UserContext.Provider value={contextValue}>{children}</UserContext.Provider>
  );
};
