import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardDescartadorComponent } from './dashboard-descartador.component';

describe('DashboardDescartadorComponent', () => {
  let component: DashboardDescartadorComponent;
  let fixture: ComponentFixture<DashboardDescartadorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardDescartadorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardDescartadorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
