"use client";

import { Dispatch, ReactNode, createContext, useMemo, useReducer } from "react";
import { initialCardData } from "../_components/Planner/initial-data";
import { reducer } from "../_components/Planner/reducer";
import { Action, PlannerState } from "../_types/planner";

const initialState: PlannerState = [initialCardData];

export const PlannerStateContext = createContext<{
  plannerState: PlannerState;
  dispatch: Dispatch<Action>;
} | null>(null);

export const PlannerStateProvider = ({ children }: { children: ReactNode }) => {
  const [plannerState, dispatch] = useReducer(reducer, initialState);

  const contextValue = useMemo(
    () => ({ plannerState, dispatch }),
    [plannerState],
  );

  return (
    <PlannerStateContext.Provider value={contextValue}>
      {children}
    </PlannerStateContext.Provider>
  );
};
