import { ApplicationConfig, Component } from '@angular/core';
import { provideRouter } from '@angular/router';

import { routes } from './app.routes';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';

export const appConfig: ApplicationConfig = {
  providers: [provideRouter(routes)]
};
