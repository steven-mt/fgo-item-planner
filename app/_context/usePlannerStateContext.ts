import { useContext } from "react";
import {
  PlannerStateContext,
  PlannerStateProvider,
} from "./PlannerStateProvider";

export const usePlannerStateContext = () => {
  const plannerStateContext = useContext(PlannerStateContext);

  if (plannerStateContext === null)
    throw new Error(
      `"${usePlannerStateContext.name} must be inside a ${PlannerStateProvider.name}"`,
    );

  return plannerStateContext;
};
