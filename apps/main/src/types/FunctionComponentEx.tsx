import { FunctionComponent, ReactNode } from "react";

export type FunctionComponentEx<T = unknown> = FunctionComponent<
  { children?: ReactNode } & T
>;
