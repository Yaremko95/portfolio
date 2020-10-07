import Home from "../pages/Home";
import MainLayout from "../layout/MainLayout";
export default [
  {
    path: "/",
    exact: true,
    component: Home,
    layout: MainLayout,
  },
];
