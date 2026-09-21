import { Component, inject } from '@angular/core';
import {
  FormBuilder,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatButtonToggleModule } from '@angular/material/button-toggle';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTimepickerModule } from '@angular/material/timepicker';

@Component({
  selector: 'app-crear-recordatorio',
  standalone: true,
  imports: [
    ReactiveFormsModule,
    MatButtonModule,
    MatButtonToggleModule,
    MatDatepickerModule,
    MatFormFieldModule,
    MatInputModule,
    MatSlideToggleModule,
    MatTimepickerModule,
  ],
  templateUrl: './crear-recordatorio.html',
  styleUrl: './crear-recordatorio.scss',
})
export class CrearRecordatorio {
  private readonly formBuilder = inject(FormBuilder);
  private readonly router = inject(Router);

  readonly dias = [
    {
      value: 'lunes',
      label: 'L',
      name: 'Lunes',
    },
    {
      value: 'martes',
      label: 'M',
      name: 'Martes',
    },
    {
      value: 'miercoles',
      label: 'X',
      name: 'Miércoles',
    },
    {
      value: 'jueves',
      label: 'J',
      name: 'Jueves',
    },
    {
      value: 'viernes',
      label: 'V',
      name: 'Viernes',
    },
    {
      value: 'sabado',
      label: 'S',
      name: 'Sábado',
    },
    {
      value: 'domingo',
      label: 'D',
      name: 'Domingo',
    },
  ];

  readonly formulario = this.formBuilder.nonNullable.group({
    nombre: [
      'Cita médica',
      [
        Validators.required,
        Validators.maxLength(60),
      ],
    ],

    fecha: [
      new Date(2026, 8, 5),
      Validators.required,
    ],

    hora: [
      new Date(2026, 8, 5, 15, 0),
      Validators.required,
    ],

    repetir: true,

    dias: [[
      'lunes',
      'martes',
      'miercoles',
      'jueves',
      'viernes',
      'sabado',
    ]],
  });

  submitted = false;

  get nombreControl() {
    return this.formulario.controls.nombre;
  }

  cancelar(): void {
    this.router.navigate(['/hoy']);
  }

  continuar(): void {
    this.submitted = true;

    if (this.formulario.invalid) {
      this.formulario.markAllAsTouched();
      this.nombreControl.markAsTouched();
      return;
    }

    console.log(
      'Formulario válido:',
      this.formulario.getRawValue(),
    );

    this.router.navigate(['/crear/avisos']);
  }
}