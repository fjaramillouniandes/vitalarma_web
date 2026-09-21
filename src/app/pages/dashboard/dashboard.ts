import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';
import { MatIconModule } from '@angular/material/icon';

interface SummaryItem {
  value: number;
  label: string;
}

@Component({
  selector: 'app-dashboard',
  standalone: true,
  imports: [
    RouterLink,
    MatButtonModule,
    MatCardModule,
    MatIconModule,
  ],
  templateUrl: './dashboard.html',
  styleUrl: './dashboard.scss',
})
export class Dashboard {
  readonly summaryItems: SummaryItem[] = [
    {
      value: 3,
      label: 'Pendientes',
    },
    {
      value: 12,
      label: 'Próximas',
    },
    {
      value: 2,
      label: 'Realizadas',
    },
  ];
}