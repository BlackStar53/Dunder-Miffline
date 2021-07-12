import { Component, OnInit, ChangeDetectionStrategy, Input } from '@angular/core';

@Component({
  selector: 'sb-dashboard-head-reports',
  templateUrl: './dashboard-head-reports.component.html',
  styleUrls: ['./dashboard-head-reports.component.scss']
})
export class DashboardHeadReportsComponent implements OnInit {
  @Input() title!: string;
  @Input() hideBreadcrumbs = false;

  model: any;

  constructor() { }

  ngOnInit(): void {
  }

}
