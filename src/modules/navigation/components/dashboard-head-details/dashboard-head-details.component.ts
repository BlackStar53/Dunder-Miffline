import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'sb-dashboard-head-details',
  templateUrl: './dashboard-head-details.component.html',
  styleUrls: ['./dashboard-head-details.component.scss']
})
export class DashboardHeadDetailsComponent implements OnInit {
  @Input() title!: string;
  @Input() hideBreadcrumbs = false;

  constructor() { }

  ngOnInit(): void {
  }

}
