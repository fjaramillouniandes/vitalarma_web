import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface Recordatorio {
  estado: string;
  titulo: string;
  programacion: string;
  proximaAlerta: string;
  avisos: string;
}

@Component({
  selector: 'app-detalle-recordatorio',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './detalle-recordatorio.html',
  styleUrl: './detalle-recordatorio.scss',
})
export class DetalleRecordatorio {
  readonly recordatorio: Recordatorio = {
    estado: 'Activo',
    titulo: 'Cita médica',
    programacion: 'Hoy · 3:00 p. m.',
    proximaAlerta: 'Próxima alerta: 2:45 p. m.',
    avisos: 'Avisos: 15 mins y 1 hora',
  };
}
