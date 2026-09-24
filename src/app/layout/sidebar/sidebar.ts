import { Component, computed, inject } from '@angular/core';
import { toSignal } from '@angular/core/rxjs-interop';
import {
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
} from '@angular/router';
import { MatListModule } from '@angular/material/list';
import { filter, map } from 'rxjs';

/** Pantallas que pertenecen a la sección "Alarmas". */
const RUTAS_ALARMAS = ['/crear', '/detalle'];

@Component({
  selector: 'app-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    RouterLinkActive,
    MatListModule,
  ],
  templateUrl: './sidebar.html',
  styleUrl: './sidebar.scss',
})
export class Sidebar {
  private readonly router = inject(Router);

  private readonly urlActual = toSignal(
    this.router.events.pipe(
      filter(
        (evento): evento is NavigationEnd =>
          evento instanceof NavigationEnd,
      ),
      map((evento) => evento.urlAfterRedirects),
    ),
    { initialValue: this.router.url },
  );

  readonly seccionAlarmasActiva = computed(() =>
    RUTAS_ALARMAS.some((ruta) => this.urlActual().startsWith(ruta)),
  );
}
