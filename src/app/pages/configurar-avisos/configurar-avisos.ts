import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { Router } from '@angular/router';
import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';

@Component({
  selector: 'app-configurar-avisos',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatSlideToggleModule,
  ],
  templateUrl: './configurar-avisos.html',
  styleUrl: './configurar-avisos.scss',
})
export class ConfigurarAvisos {
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly opciones = [
    { value: '5-min', label: '5 min' },
    { value: '15-min', label: '15 min' },
    { value: '1-hora', label: '1 hora' },
  ];

  readonly formulario = this.formBuilder.nonNullable.group({
    anticipacion: '5-min',
    repetir: false,
  });

  cancelar(): void {
    this.router.navigate(['/crear']);
  }

  continuar(): void {
    console.log('Configuración de avisos:', this.formulario.getRawValue());
  }
}
