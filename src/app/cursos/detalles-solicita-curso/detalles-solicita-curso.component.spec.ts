import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetallesSolicitaCursoComponent } from './detalles-solicita-curso.component';

describe('DetallesSolicitaCursoComponent', () => {
  let component: DetallesSolicitaCursoComponent;
  let fixture: ComponentFixture<DetallesSolicitaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetallesSolicitaCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetallesSolicitaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
