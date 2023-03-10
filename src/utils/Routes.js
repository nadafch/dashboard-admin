import { NAVIGATION } from "./Navigation";
import * as DASHBOARD_MODULE from "@Modules/index";

const unProtectedRoutes = [
  {
    pathname: NAVIGATION.DASHBOARD.MAIN,
    element: <DASHBOARD_MODULE.Dashboard />,
  },
];
const routes = [
  ...unProtectedRoutes.map((el) => ({
    ...el,
    element: el.element,
  })),
  {
    pathname: "*",
    element: <>404 - Page Not Found</>,
  },
];
export default routes;
