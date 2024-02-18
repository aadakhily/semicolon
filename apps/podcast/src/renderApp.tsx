import { render } from "solid-js/web";
import type { JSXElement } from "solid-js";
import Router from "./config/router";

interface RenderAppConfig {
  baseUrl: string;
}

export function renderApp(domNode: HTMLElement, config?: RenderAppConfig) {
  render(() => <Router baseUrl={config?.baseUrl} />, domNode);
}

export function renderComponent(
  domNode: HTMLElement,
  Component: () => JSXElement
) {
  render(Component, domNode);
}
