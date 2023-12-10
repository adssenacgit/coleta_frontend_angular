import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcMinimapaDeColetasComponent } from './dc-minimapa-de-coletas.component';

describe('DcMinimapaDeColetasComponent', () => {
  let component: DcMinimapaDeColetasComponent;
  let fixture: ComponentFixture<DcMinimapaDeColetasComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcMinimapaDeColetasComponent]
    });
    fixture = TestBed.createComponent(DcMinimapaDeColetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
