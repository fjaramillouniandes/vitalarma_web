import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

interface Recordatorio {
  variante: 'overdue' | 'upcoming';
  estado: string;
  titulo: string;
  programacion: string;
  proximaAlerta: string;
  avisos: string;
}

@Component({
  selector: 'app-pendientes',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
  ],
  templateUrl: './pendientes.html',
  styleUrl: './pendientes.scss',
})
export class Pendientes {
  readonly vencidos: Recordatorio[] = [
    {
      variante: 'overdue',
      estado: 'Vencido',
      titulo: 'Cita médica',
      programacion: 'Ayer · 3:00 p. m.',
      proximaAlerta: 'Próxima alerta: 2:45 p. m.',
      avisos: 'Avisos: 15 mins y 1 hora',
    },
  ];

  readonly proximos: Recordatorio[] = [
    {
      variante: 'upcoming',
      estado: 'Próximo',
      titulo: 'Cita médica',
      programacion: 'Mañana · 3:00 p. m.',
      proximaAlerta: 'Próxima alerta: 2:45 p. m.',
      avisos: 'Avisos: 15 mins y 1 hora',
    },
  ];

  readonly diagnostico: string[] = [
    'Hora y zona horaria correctas',
    'No molestar activo',
    'Notificaciones sin confirmar',
  ];

  corregirAjustes(): void {
    console.log('Corregir ajustes del diagnóstico');
  }
}
