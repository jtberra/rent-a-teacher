import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaSolicitudComponent } from './tarjeta-solicitud.component';

describe('TarjetaSolicitudComponent', () => {
  let component: TarjetaSolicitudComponent;
  let fixture: ComponentFixture<TarjetaSolicitudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TarjetaSolicitudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TarjetaSolicitudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
