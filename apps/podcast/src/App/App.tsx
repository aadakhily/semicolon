import { Component } from "solid-js";
import { RouteSectionProps, useLocation } from "@solidjs/router";

import "./App.css";

const App: Component<RouteSectionProps<unknown>> = ({ children }) => {
  useLocation();

  return <div>{children}</div>;
};

export default App;
