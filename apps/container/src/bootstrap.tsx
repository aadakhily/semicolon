import { StrictMode, Suspense } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router-dom";

import { router } from "./config/router.tsx";

import "./index.scss";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Suspense fallback={<h3>loading ...</h3>}>
      <RouterProvider router={router} />
    </Suspense>
  </StrictMode>
);
