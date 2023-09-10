import Content from "../pages/Content";
import Home from "../pages/Home";
import RouteInterface from "./types";

const Routes: Array<RouteInterface> = [
  {
    key: "home",
    title: "صفحه اصلی",
    path: "/",
    component: Home,
  },
  {
    key: "list",
    title: "لیست",
    path: "/contents",
    component: Content,
  },
];

export default Routes;
