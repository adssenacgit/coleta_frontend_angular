import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcColetasAgendadasComponent } from './dc-coletas-agendadas.component';

describe('DcColetasAgendadasComponent', () => {
  let component: DcColetasAgendadasComponent;
  let fixture: ComponentFixture<DcColetasAgendadasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcColetasAgendadasComponent]
    });
    fixture = TestBed.createComponent(DcColetasAgendadasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
