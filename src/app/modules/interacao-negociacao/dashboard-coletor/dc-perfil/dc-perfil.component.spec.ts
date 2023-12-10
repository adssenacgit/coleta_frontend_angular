import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcPerfilComponent } from './dc-perfil.component';

describe('DcPerfilComponent', () => {
  let component: DcPerfilComponent;
  let fixture: ComponentFixture<DcPerfilComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcPerfilComponent]
    });
    fixture = TestBed.createComponent(DcPerfilComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
