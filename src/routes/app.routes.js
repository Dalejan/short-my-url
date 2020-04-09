import Home from "../containers/Home/Home";

const appRoutes = [
  {
    path: "/home",
    component: Home,
  },
  { redirect: true, path: "/", to: "/home" },
];

export default appRoutes;
