import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcMapaDeColetasComponent } from './dc-mapa-de-coletas.component';

describe('DcMapaDeColetasComponent', () => {
  let component: DcMapaDeColetasComponent;
  let fixture: ComponentFixture<DcMapaDeColetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcMapaDeColetasComponent]
    });
    fixture = TestBed.createComponent(DcMapaDeColetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
