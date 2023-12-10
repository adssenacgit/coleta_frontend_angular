import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcHistoricoDeColetasComponent } from './dc-historico-de-coletas.component';

describe('DcHistoricoDeColetasComponent', () => {
  let component: DcHistoricoDeColetasComponent;
  let fixture: ComponentFixture<DcHistoricoDeColetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcHistoricoDeColetasComponent]
    });
    fixture = TestBed.createComponent(DcHistoricoDeColetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
