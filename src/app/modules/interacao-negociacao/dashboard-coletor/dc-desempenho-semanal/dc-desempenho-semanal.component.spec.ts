import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcDesempenhoSemanalComponent } from './dc-desempenho-semanal.component';

describe('DcDesempenhoSemanalComponent', () => {
  let component: DcDesempenhoSemanalComponent;
  let fixture: ComponentFixture<DcDesempenhoSemanalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcDesempenhoSemanalComponent]
    });
    fixture = TestBed.createComponent(DcDesempenhoSemanalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
