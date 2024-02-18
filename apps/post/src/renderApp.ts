import { createApp, Component } from "vue";
import App from "./App/App.vue";
import { createRouter } from "./config/router";

interface RenderAppConfig {
  baseUrl: string;
}

export function renderApp(domNode: HTMLElement, config?: RenderAppConfig) {
  const app = createApp(App);
  const router = createRouter(config?.baseUrl);

  app.use(router);
  app.mount(domNode);
}

export function renderComponent(domNode: HTMLElement, Component: Component) {
  createApp(Component).mount(domNode);
}
