import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilColetaComponent } from './perfil-coleta.component';

describe('PerfilColetaComponent', () => {
  let component: PerfilColetaComponent;
  let fixture: ComponentFixture<PerfilColetaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilColetaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilColetaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
