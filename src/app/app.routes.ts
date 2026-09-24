import { Routes } from '@angular/router';

import { AppShell } from './layout/app-shell/app-shell';
import { Dashboard } from './pages/dashboard/dashboard';
import { CrearRecordatorio } from './pages/crear-recordatorio/crear-recordatorio';
import { ConfigurarAvisos } from './pages/configurar-avisos/configurar-avisos';
import { DetalleRecordatorio } from './pages/detalle-recordatorio/detalle-recordatorio';
import { Pendientes } from './pages/pendientes/pendientes';
import { ListadoAlarmas } from './pages/listado-alarmas/listado-alarmas';

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
        path: 'alarmas',
        component: ListadoAlarmas,
      },
      {
        path: 'crear/avisos',
        component: ConfigurarAvisos,
      },
      {
        path: 'crear',
        component: CrearRecordatorio,
      },
      {
        path: 'detalle',
        component: DetalleRecordatorio,
      },
      {
        path: 'pendientes',
        component: Pendientes,
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
