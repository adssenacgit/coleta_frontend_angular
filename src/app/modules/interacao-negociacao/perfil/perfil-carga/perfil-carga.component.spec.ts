import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilCargaComponent } from './perfil-carga.component';

describe('PerfilCargaComponent', () => {
  let component: PerfilCargaComponent;
  let fixture: ComponentFixture<PerfilCargaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilCargaComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilCargaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
