import { lazy } from "react";
import { createBrowserRouter, type RouteObject } from "react-router-dom";

import MainLayout from "../layout/Main";

const Home = lazy(() => import("../Pages/Home/Home"));
const Posts = lazy(() => import("../Pages/Posts/Posts"));
const Users = lazy(() => import("../Pages/Users/Users"));
const Podcasts = lazy(() => import("../Pages/Podcasts/Podcasts"));

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
    ],
  },
];

export const router = createBrowserRouter(routes);
