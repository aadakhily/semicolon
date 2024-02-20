import { createApplication } from '@angular/platform-browser';
import { AppComponent } from './app/app.component';
import 'zone.js';

export function renderApp(domNode: HTMLElement) {
  createApplication()
    .then((appRef) => {
      appRef.bootstrap(AppComponent, domNode);
    })
    .catch(console.error);
}

export function renderComponent(domNode: HTMLElement, Component: any) {}
