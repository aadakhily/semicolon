import { lazy } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

import MainLayout from "../layout/Main";

const Home = lazy(() => import("../Pages/Home/Home"));
const Posts = lazy(() => import("../Pages/Posts/Posts"));
const Users = lazy(() => import("../Pages/Users/Users"));
const Podcasts = lazy(() => import("../Pages/Podcasts/Podcasts"));
const Notifications = lazy(
  () => import("../Pages/Notifications/Notifications")
);

// import Home from "../Pages/Home/Home";
// import Posts from "../Pages/Posts/Posts";
// import Users from "../Pages/Users/Users";
// import Podcasts from "../Pages/Podcasts/Podcasts";

const routes: RouteObject[] = [
  {
    path: "",
    element: <MainLayout />,
    children: [
      {
        path: "",
        element: <Home />,
      },
      {
        path: "posts/*",
        element: <Posts />,
      },
      {
        path: "podcasts/*",
        element: <Podcasts />,
      },
      {
        path: "users/*",
        element: <Users />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
    ],
  },
];

export const router = createBrowserRouter(routes);
