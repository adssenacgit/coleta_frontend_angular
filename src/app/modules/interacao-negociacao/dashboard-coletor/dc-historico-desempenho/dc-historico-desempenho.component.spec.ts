import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcHistoricoDesempenhoComponent } from './dc-historico-desempenho.component';

describe('DcHistoricoDesempenhoComponent', () => {
  let component: DcHistoricoDesempenhoComponent;
  let fixture: ComponentFixture<DcHistoricoDesempenhoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcHistoricoDesempenhoComponent]
    });
    fixture = TestBed.createComponent(DcHistoricoDesempenhoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
