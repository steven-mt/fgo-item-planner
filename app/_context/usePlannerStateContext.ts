import { useContext } from "react";
import { PlannerStateContext } from "./PlannerStateProvider";

export const usePlannerStateContext = () => {
  const plannerStateContext = useContext(PlannerStateContext);

  if (plannerStateContext === null)
    throw new Error(
      "usePlannerStateContext must be inside a PlannerStateProvider",
    );

  return plannerStateContext;
};
