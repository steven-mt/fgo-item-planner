import { useContext } from "react";
import {
  OwnedMaterialsContext,
  OwnedMaterialsProvider,
} from "./OwnedMaterialsProvider";

export const useOwnedMaterialsContext = () => {
  const ownedMaterialsContext = useContext(OwnedMaterialsContext);

  if (ownedMaterialsContext === null)
    throw new Error(
      `${useOwnedMaterialsContext.name} must be inside a ${OwnedMaterialsProvider.name}`,
    );

  return ownedMaterialsContext;
};
