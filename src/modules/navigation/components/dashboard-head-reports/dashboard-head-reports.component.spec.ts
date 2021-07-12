import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeadReportsComponent } from './dashboard-head-reports.component';

@Component({
  template: `
      <sb-dashboard-head-reports
          [someInput]="someInput"
          (someFunction)="someFunction($event)"
      ></sb-dashboard-head-reports>
  `,
})
class TestHostComponent {
  // someInput = 1;
  // someFunction(event: Event) {}
}

describe('DashboardHeadReportsComponent', () => {
  let component: DashboardHeadReportsComponent;
  let fixture: ComponentFixture<DashboardHeadReportsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHeadReportsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeadReportsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
