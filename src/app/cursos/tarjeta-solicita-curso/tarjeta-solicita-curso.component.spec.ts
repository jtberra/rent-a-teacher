import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaSolicitaCursoComponent } from './tarjeta-solicita-curso.component';

describe('TarjetaSolicitaCursoComponent', () => {
  let component: TarjetaSolicitaCursoComponent;
  let fixture: ComponentFixture<TarjetaSolicitaCursoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaSolicitaCursoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaSolicitaCursoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
