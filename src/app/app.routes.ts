import { Routes } from '@angular/router';
import { LoginComponent } from './authentication/login/login.component';
import { LayoutComponent } from './layout/layout.component';

export const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
  {
    path: 'layout',
    component: LayoutComponent,
  },
];
