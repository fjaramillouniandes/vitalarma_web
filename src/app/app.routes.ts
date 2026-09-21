import { Routes } from '@angular/router';

import { AppShell } from './layout/app-shell/app-shell';
import { Dashboard } from './pages/dashboard/dashboard';

export const routes: Routes = [
  {
    path: '',
    component: AppShell,
    children: [
      {
        path: 'hoy',
        component: Dashboard,
      },
      {
        path: '',
        pathMatch: 'full',
        redirectTo: 'hoy',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'hoy',
  },
];