import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionarInformacionUsComponent } from './gestionar-informacion-us.component';

describe('GestionarInformacionUsComponent', () => {
  let component: GestionarInformacionUsComponent;
  let fixture: ComponentFixture<GestionarInformacionUsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionarInformacionUsComponent ]
    })
    .compileComponents();
    console.log("hola2");
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionarInformacionUsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
