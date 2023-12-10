import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilEnderecoComponent } from './perfil-endereco.component';

describe('PerfilEnderecoComponent', () => {
  let component: PerfilEnderecoComponent;
  let fixture: ComponentFixture<PerfilEnderecoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilEnderecoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PerfilEnderecoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
