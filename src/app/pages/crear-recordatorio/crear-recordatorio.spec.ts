import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrearRecordatorio } from './crear-recordatorio';

describe('CrearRecordatorio', () => {
  let component: CrearRecordatorio;
  let fixture: ComponentFixture<CrearRecordatorio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CrearRecordatorio],
    }).compileComponents();

    fixture = TestBed.createComponent(CrearRecordatorio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
