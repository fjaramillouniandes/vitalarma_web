import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatCardModule } from '@angular/material/card';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

type Variante =
  | 'active'
  | 'overdue'
  | 'paused'
  | 'upcoming'
  | 'completed';

interface Alarma {
  id: number;
  variante: Variante;
  estado: string;
  titulo: string;
  programacion: string;
  proximaAlerta: string;
  avisos: string;
}

@Component({
  selector: 'app-listado-alarmas',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    RouterLink,
    MatButtonModule,
    MatButtonToggleModule,
    MatCardModule,
    MatFormFieldModule,
    MatInputModule,
  ],
  templateUrl: './listado-alarmas.html',
  styleUrl: './listado-alarmas.scss',
})
export class ListadoAlarmas {
  private readonly formBuilder = inject(FormBuilder);

  readonly filtros = [
    { value: 'todos', label: 'Todos' },
    { value: 'hoy', label: 'Hoy' },
    { value: 'proximos', label: 'Próximos' },
    { value: 'vencidos', label: 'Vencidos' },
    { value: 'pendientes', label: 'Pendientes' },
  ];

  readonly formulario = this.formBuilder.nonNullable.group({
    busqueda: '',
    filtro: 'todos',
  });

  readonly resultados: Alarma[] = [
    {
      id: 1,
      variante: 'active',
      estado: 'Activo',
      titulo: 'Cita médica',
      programacion: 'Hoy · 3:00 p. m.',
      proximaAlerta: 'Próxima alerta: 2:45 p. m.',
      avisos: 'Avisos: 15 mins y 1 hora',
    },
    {
      id: 2,
      variante: 'overdue',
      estado: 'Vencido',
      titulo: 'Cita médica',
      programacion: 'Ayer · 3:00 p. m.',
      proximaAlerta: 'Próxima alerta: 2:45 p. m.',
      avisos: 'Avisos: 15 mins y 1 hora',
    },
    {
      id: 3,
      variante: 'paused',
      estado: 'Paused',
      titulo: 'Cita médica',
      programacion: 'Ayer · 3:00 p. m.',
      proximaAlerta: 'Próxima alerta: 2:45 p. m.',
      avisos: 'Avisos: 15 mins y 1 hora',
    },
    {
      id: 4,
      variante: 'upcoming',
      estado: 'Próximo',
      titulo: 'Cita médica',
      programacion: 'Mañana · 3:00 p. m.',
      proximaAlerta: 'Próxima alerta: 2:45 p. m.',
      avisos: 'Avisos: 15 mins y 1 hora',
    },
    {
      id: 5,
      variante: 'completed',
      estado: 'Completado',
      titulo: 'Cita médica',
      programacion: 'Ayer · 3:00 p. m.',
      proximaAlerta: 'Próxima alerta: 2:45 p. m.',
      avisos: 'Avisos: 15 mins y 1 hora',
    },
  ];
}
