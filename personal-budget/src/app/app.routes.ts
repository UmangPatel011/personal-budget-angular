import { Routes, provideRouter } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { AboutComponent } from './about/about.component';
import { LoginComponent } from './login/login.component';



const Route: Routes = [
  {
    path: 'homepage',
    component:  HomepageComponent,
    pathMatch: "full"
  },
  {
    path: 'about',
    component: AboutComponent,
    pathMatch:"full"
  },
  {
    path: 'login',
    component: LoginComponent,
    pathMatch: "full"
  },
]


export const routes: Routes = [];
