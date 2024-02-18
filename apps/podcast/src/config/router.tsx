import { lazy } from "solid-js";
import { RouteDefinition, Router as SolidRouter } from "@solidjs/router";

import App from "../App/App";

const Podcast = lazy(() => import("../pages/Podcast/Podcast"));
const Podcasts = lazy(() => import("../pages/Podcasts/Podcasts"));

const routes: RouteDefinition[] = [
  {
    path: "/",
    component: Podcasts,
  },
  {
    path: "/:podcastId",
    component: Podcast,
  },
];

function Router({ baseUrl }: { baseUrl?: string }) {
  return (
    <SolidRouter root={App} base={baseUrl}>
      {routes}
    </SolidRouter>
  );
}

export default Router;
