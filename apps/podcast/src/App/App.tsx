import { Component } from "solid-js";
import { RouteSectionProps } from "@solidjs/router";

import "./App.css";

const App: Component<RouteSectionProps<unknown>> = ({ children }) => {
  return <div>{children}</div>;
};

export default App;
