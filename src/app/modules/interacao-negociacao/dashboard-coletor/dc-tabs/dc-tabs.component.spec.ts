import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DcTabsComponent } from './dc-tabs.component';

describe('DcTabsComponent', () => {
  let component: DcTabsComponent;
  let fixture: ComponentFixture<DcTabsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [DcTabsComponent]
    });
    fixture = TestBed.createComponent(DcTabsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
