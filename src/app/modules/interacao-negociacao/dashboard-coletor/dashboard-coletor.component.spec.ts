import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardColetorComponent } from './dashboard-coletor.component';

describe('DashboardColetorComponent', () => {
  let component: DashboardColetorComponent;
  let fixture: ComponentFixture<DashboardColetorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardColetorComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DashboardColetorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
