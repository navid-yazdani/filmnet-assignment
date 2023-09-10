import { FC } from "react";

export default interface RouteInterface {
  key: string;
  title: string;
  path: string;
  component: FC<object>;
  enabled?: boolean;
  icon?: string;
}
