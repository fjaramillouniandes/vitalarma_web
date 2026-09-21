import { Routes } from '@angular/router';

import { AppShell } from './layout/app-shell/app-shell';
import { Dashboard } from './pages/dashboard/dashboard';
import { CrearRecordatorio } from './pages/crear-recordatorio/crear-recordatorio';

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
        path: 'crear',
        component: CrearRecordatorio,
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