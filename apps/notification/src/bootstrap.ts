import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { AppComponent } from './app/app.component';
import { renderApp } from './renderApp';

// bootstrapApplication(AppComponent, appConfig).catch((err) =>
//   console.error(err)
// );

const root = document.getElementById('root');
renderApp(root!);
