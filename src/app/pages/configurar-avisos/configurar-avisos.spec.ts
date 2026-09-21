import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfigurarAvisos } from './configurar-avisos';

describe('ConfigurarAvisos', () => {
  let component: ConfigurarAvisos;
  let fixture: ComponentFixture<ConfigurarAvisos>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ConfigurarAvisos],
    }).compileComponents();

    fixture = TestBed.createComponent(ConfigurarAvisos);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
