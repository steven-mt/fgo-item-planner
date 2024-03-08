"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useMemo,
  useState,
} from "react";
import { OwnedMaterials } from "../_types/planner";

export const OwnedMaterialsContext = createContext<{
  ownedMaterials: OwnedMaterials;
  setOwnedMaterials: Dispatch<SetStateAction<OwnedMaterials>>;
} | null>(null);

export const OwnedMaterialsProvider = ({
  children,
}: {
  children: ReactNode;
}) => {
  const [ownedMaterials, setOwnedMaterials] = useState<OwnedMaterials>([]);

  const contextValue = useMemo(
    () => ({ ownedMaterials, setOwnedMaterials }),
    [ownedMaterials],
  );

  return (
    <OwnedMaterialsContext.Provider value={contextValue}>
      {children}
    </OwnedMaterialsContext.Provider>
  );
};
