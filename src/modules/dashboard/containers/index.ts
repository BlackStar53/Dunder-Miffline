import { DashboardComponent } from './dashboard/dashboard.component';
import { LightComponent } from './light/light.component';
import { StaticComponent } from './static/static.component';
import { ReportsComponent } from './reports/reports.component';
import { DetailsComponent } from './details/details.component';
import { NewTicketComponent } from './new-ticket/new-ticket.component';

export const containers = [DashboardComponent, StaticComponent, LightComponent, ReportsComponent, DetailsComponent, NewTicketComponent];

export * from './dashboard/dashboard.component';
export * from './static/static.component';
export * from './light/light.component';
export * from './reports/reports.component';
export * from './details/details.component';
export * from './new-ticket/new-ticket.component';