import { ReactNode } from "react";

export type ModuleItem = {
  type: string;
  element: ReactNode
}

export type ModuleTypes = ["perceptiveModule", "skillModule", "selectiveModule"]

export const ModuleTypeList: ModuleTypes = ["perceptiveModule", "skillModule", "selectiveModule"];

export type ReactFlowNode = {
  id: string;
  type: string;
  data: {
    label: string;
    children: ReactNode
  };
  position: {
    x: number;
    y: number;
  };
}