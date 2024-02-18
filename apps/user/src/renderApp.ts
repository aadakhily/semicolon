import App from "./App/App.svelte";

interface RenderAppConfig {
  baseUrl: string;
}

export function renderApp(domNode: HTMLElement, config?: RenderAppConfig) {
  new App({
    target: domNode,
    props: {
      baseUrl: config?.baseUrl,
    },
  });
}

export function renderComponent(domNode: HTMLElement, Component: any) {
  new Component({
    target: domNode,
  });
}
