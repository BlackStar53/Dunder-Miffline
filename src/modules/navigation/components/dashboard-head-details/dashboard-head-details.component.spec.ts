import { Component, DebugElement, NO_ERRORS_SCHEMA } from '@angular/core';
import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DashboardHeadDetailsComponent } from './dashboard-head-details.component';

@Component({
  template: `
      <sb-dashboard-head-details
          [someInput]="someInput"
          (someFunction)="someFunction($event)"
      ></sb-dashboard-head-details>
  `,
})
class TestHostComponent {
  // someInput = 1;
  // someFunction(event: Event) {}
}

describe('DashboardHeadDetailsComponent', () => {
  let component: DashboardHeadDetailsComponent;
  let fixture: ComponentFixture<DashboardHeadDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DashboardHeadDetailsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DashboardHeadDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
